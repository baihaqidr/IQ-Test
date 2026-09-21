import React from 'react';

// Helper to render standard SVG puzzles and options cleanly
export const questions = [
  {
    id: 1,
    title: "Pola Rotasi Geometri",
    subtitle: "Pilihlah salah satu dari 6 pola yang melengkapi tanda tanya (?) dengan tepat.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 15 L85 85 L15 85 Z" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M85 50 L15 85 L15 15 Z" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 85 L15 15 L85 15 Z" fill="#0284c7" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M15 50 L85 15 L85 85 Z" fill="#0284c7" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 15 L85 85 L15 85 Z" fill="#0284c7" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M85 50 L15 85 L15 15 Z" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 85 L15 15 L85 15 Z" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M15 50 L85 15 L85 85 Z" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><path d="M50 15 L85 85 L15 85 Z" fill="#0284c7" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><path d="M85 50 L15 85 L15 15 Z" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><path d="M50 85 L15 15 L85 15 Z" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="35" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="20" y="20" width="60" height="60" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><path d="M15 50 L85 15 L85 85 Z" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },
  {
    id: 2,
    title: "Progresi Jumlah Titik",
    subtitle: "Perhatikan pertambahan titik pada setiap baris.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="8" fill="#1e293b" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="35" cy="50" r="8" fill="#1e293b" /><circle cx="65" cy="50" r="8" fill="#1e293b" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="50" r="8" fill="#1e293b" /><circle cx="50" cy="50" r="8" fill="#1e293b" /><circle cx="75" cy="50" r="8" fill="#1e293b" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="35" cy="50" r="8" fill="#1e293b" /><circle cx="65" cy="50" r="8" fill="#1e293b" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="50" r="8" fill="#1e293b" /><circle cx="50" cy="50" r="8" fill="#1e293b" /><circle cx="75" cy="50" r="8" fill="#1e293b" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="30" r="8" fill="#1e293b" /><circle cx="70" cy="30" r="8" fill="#1e293b" /><circle cx="30" cy="70" r="8" fill="#1e293b" /><circle cx="70" cy="70" r="8" fill="#1e293b" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="50" r="8" fill="#1e293b" /><circle cx="50" cy="50" r="8" fill="#1e293b" /><circle cx="75" cy="50" r="8" fill="#1e293b" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="30" r="8" fill="#1e293b" /><circle cx="70" cy="30" r="8" fill="#1e293b" /><circle cx="30" cy="70" r="8" fill="#1e293b" /><circle cx="70" cy="70" r="8" fill="#1e293b" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="30" cy="30" r="8" fill="#1e293b" /><circle cx="70" cy="30" r="8" fill="#1e293b" /><circle cx="50" cy="50" r="8" fill="#1e293b" /><circle cx="30" cy="70" r="8" fill="#1e293b" /><circle cx="70" cy="70" r="8" fill="#1e293b" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="8" fill="#1e293b" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="35" cy="50" r="8" fill="#1e293b" /><circle cx="65" cy="50" r="8" fill="#1e293b" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="30" cy="30" r="8" fill="#1e293b" /><circle cx="70" cy="30" r="8" fill="#1e293b" /><circle cx="30" cy="70" r="8" fill="#1e293b" /><circle cx="70" cy="70" r="8" fill="#1e293b" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="25" fill="none" stroke="#1e293b" strokeWidth="4" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="30" y="30" width="40" height="40" fill="#1e293b" /></svg>, isCorrect: false }
    ]
  },
  {
    id: 3,
    title: "Irisan Sektor Melingkar",
    subtitle: "Pola perputaran jarum jam pada bagian lingkaran.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 15 A35 35 0 0 1 85 50 Z" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L85 50 A35 35 0 0 1 50 85 Z" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 85 A35 35 0 0 1 15 50 Z" fill="#0284c7" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L85 50 A35 35 0 0 1 50 85 Z" fill="#0284c7" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 85 A35 35 0 0 1 15 50 Z" fill="#0284c7" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L15 50 A35 35 0 0 1 50 15 Z" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 85 A35 35 0 0 1 15 50 Z" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L15 50 A35 35 0 0 1 50 15 Z" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 15 A35 35 0 0 1 85 50 Z" fill="#0284c7" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="35" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 85 A35 35 0 0 1 15 50 Z" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="25" y="25" width="50" height="50" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L85 50 A35 35 0 0 1 50 85 Z" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },
  {
    id: 4,
    title: "Penjumlahan Garis Logika (XOR/Overlap)",
    subtitle: "Pola penggabungan elemen garis pada baris ketiga.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="50" y1="20" x2="50" y2="80" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="20" x2="50" y2="80" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="25" y1="25" x2="75" y2="75" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="75" y1="25" x2="25" y2="75" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="25" y1="25" x2="75" y2="75" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="75" y1="25" x2="25" y2="75" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#0f172a" strokeWidth="5" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="20" x2="50" y2="80" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="30" fill="none" stroke="#0f172a" strokeWidth="5" /><line x1="20" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="20" x2="50" y2="80" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="30" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#0f172a" strokeWidth="5" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><line x1="25" y1="25" x2="75" y2="75" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><line x1="20" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="15" fill="#0f172a" /></svg>, isCorrect: false }
    ]
  },
  {
    id: 5,
    title: "Jumlah Sisi Poligon",
    subtitle: "Analisis perubahan sisi bangun datar pada setiap kolom dan baris.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,18 82,82 18,82" fill="#0ea5e9" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="22" y="22" width="56" height="56" fill="#0ea5e9" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#0ea5e9" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="22" y="22" width="56" height="56" fill="#0ea5e9" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#0ea5e9" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#0ea5e9" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#0ea5e9" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#0ea5e9" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><polygon points="50,12 79,25 90,56 74,84 26,84 10,56 21,25" fill="#0ea5e9" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><polygon points="50,18 82,82 18,82" fill="#0ea5e9" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="35" fill="#0ea5e9" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="22" y="22" width="56" height="56" fill="#0ea5e9" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#0ea5e9" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><ellipse cx="50" cy="50" rx="35" ry="20" fill="#0ea5e9" /></svg>, isCorrect: false }
    ]
  },
  // Pertanyaan 6 sampai 20 dibuat dengan pola logika kognitif bervariasi
  ...Array.from({ length: 15 }, (_, i) => {
    const qNum = i + 6;
    const baseRot = (qNum * 45) % 360;
    return {
      id: qNum,
      title: `Matriks Penalaran Abstrak #${qNum}`,
      subtitle: "Pilihlah bentuk geometri yang memenuhi korelasi spasial dan logika matriks.",
      matrixType: "3x3",
      grid: [
        { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 30} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 60} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 30} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 60} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 90} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 60} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 90} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg> },
        { id: '9', isTarget: true }
      ],
      options: [
        { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 120} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg>, isCorrect: true },
        { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg>, isCorrect: false },
        { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><circle cx="50" cy="50" r="30" fill="#0284c7" /></svg>, isCorrect: false },
        { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform={`rotate(${baseRot + 45} 50 50)`} /><circle cx="50" cy="50" r="12" fill="white" /></svg>, isCorrect: false },
        { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><polygon points="50,20 80,80 20,80" fill="#0284c7" /></svg>, isCorrect: false },
        { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-3"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#0284c7" strokeWidth="6" /></svg>, isCorrect: false }
      ]
    };
  })
];
