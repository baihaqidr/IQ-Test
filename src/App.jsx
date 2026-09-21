import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DemographicsStep from './components/DemographicsStep';
import QuizStep from './components/QuizStep';
import CalculatingLoader from './components/CalculatingLoader';
import LeadCaptureStep from './components/LeadCaptureStep';
import ResultsPaywall from './components/ResultsPaywall';
import CheckoutModal from './components/CheckoutModal';
import { questions } from './data/questions';

export default function App() {
  const [step, setStep] = useState('demographics'); // demographics | quiz | calculating | lead_capture | results
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [demographics, setDemographics] = useState({ gender: null, ageGroup: null });
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [licenseId, setLicenseId] = useState('');
  const [calculatedScore, setCalculatedScore] = useState(128);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [utmParams, setUtmParams] = useState({});

  // Capture UTM parameters from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    for (const [key, value] of params.entries()) {
      utm[key] = value;
    }
    setUtmParams(utm);
  }, []);

  const handleStartQuiz = (demoData) => {
    setDemographics(demoData);
    setStep('quiz');
    setQuestionIndex(0);
  };

  const handleAnswerQuestion = (qId, option) => {
    const updatedAnswers = { ...userAnswers, [qId]: option };
    setUserAnswers(updatedAnswers);

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Finished all questions, calculate score & generate unique license
      const correctCount = Object.values(updatedAnswers).filter(a => a?.isCorrect).length;
      const finalIQ = Math.min(144, Math.max(90, Math.round(92 + (correctCount / questions.length) * 48)));
      const genLicense = `COG-ID-${Math.floor(100000 + Math.random() * 900000)}`;
      
      setCalculatedScore(finalIQ);
      setLicenseId(genLicense);
      setStep('calculating');
    }
  };

  const handleSkipQuestion = () => {
    handleAnswerQuestion(questions[questionIndex].id, { id: 'SKIPPED', isCorrect: false });
  };

  const handleCalculationComplete = () => {
    setStep('lead_capture');
  };

  const handleLeadSubmit = async (lead) => {
    setUserData(lead);
    setStep('results');

    // 1. Simpan Lead & Hasil ke Database Neon via API Serverless
    try {
      await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          gender: demographics.gender,
          ageGroup: demographics.ageGroup,
          score: calculatedScore,
          licenseId: licenseId,
          answers: userAnswers,
          utmParams: utmParams,
          status: 'completed'
        })
      });
    } catch (err) {
      console.warn('API submit-quiz error (simulated locally):', err);
    }

    // 2. Trigger kirim email via Serverless API
    try {
      await fetch('/api/send-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          score: calculatedScore,
          licenseId: licenseId,
          classification: calculatedScore >= 120 ? 'Unggul / Superior Intelligence' : 'Rata-rata Normal'
        })
      });
    } catch (e) {
      console.warn('API send-certificate error:', e);
    }
  };

  const handlePaymentSuccess = async () => {
    // Update status ke 'paid' di Neon PostgreSQL
    try {
      await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          gender: demographics.gender,
          ageGroup: demographics.ageGroup,
          score: calculatedScore,
          licenseId: licenseId,
          status: 'paid'
        })
      });
    } catch (err) {
      console.warn('Payment status update error:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FA]">
      {/* Sticky Official Header */}
      <Header
        currentStep={questionIndex + 1}
        totalSteps={questions.length}
        isQuizActive={step === 'quiz'}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {step === 'demographics' && (
          <DemographicsStep onStart={handleStartQuiz} />
        )}

        {step === 'quiz' && (
          <QuizStep
            question={questions[questionIndex]}
            questionIndex={questionIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswerQuestion}
            onSkip={handleSkipQuestion}
          />
        )}

        {step === 'calculating' && (
          <CalculatingLoader onComplete={handleCalculationComplete} />
        )}

        {step === 'lead_capture' && (
          <LeadCaptureStep onSubmit={handleLeadSubmit} />
        )}

        {step === 'results' && (
          <ResultsPaywall
            user={{ ...demographics, ...userData }}
            score={calculatedScore}
            licenseId={licenseId}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />
        )}
      </main>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        user={userData}
        score={calculatedScore}
        licenseId={licenseId}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 bg-white py-6 text-center text-xs text-neutral-400 mt-auto font-mono">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <rect x="6" y="5" width="20" height="6.5" rx="3.25" fill="#F26207" />
                <rect x="6" y="5" width="6.5" height="22" rx="3.25" fill="#F26207" />
                <rect x="6" y="20.5" width="20" height="6.5" rx="3.25" fill="#F26207" />
              </svg>
            </div>
            <p>© 2026 cognitive™ Lab. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-neutral-500">
            <span className="hover:text-neutral-800 cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:text-neutral-800 cursor-pointer">Terms</span>
            <span>•</span>
            <span className="hover:text-neutral-800 cursor-pointer">WAIS-IV Standard</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
