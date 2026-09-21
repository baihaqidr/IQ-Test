import React from 'react';

export const questions = [
  // Soal 1: Rotasi Panah Jarum Jam
  {
    id: 1,
    difficulty: "Dasar",
    title: "1. Pola Rotasi Panah Penunjuk",
    subtitle: "Perhatikan arah perputaran panah 90 derajat searah jarum jam pada setiap baris.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M50 10 L50 90 M50 10 L25 35 M50 10 L75 35" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M90 50 L10 50 M90 50 L65 25 M90 50 L65 75" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M50 90 L50 10 M50 90 L25 65 M50 90 L75 65" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M90 50 L10 50 M90 50 L65 25 M90 50 L65 75" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M50 90 L50 10 M50 90 L25 65 M50 90 L75 65" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M10 50 L90 50 M10 50 L35 25 M10 50 L35 75" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M50 90 L50 10 M50 90 L25 65 M50 90 L75 65" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M10 50 L90 50 M10 50 L35 25 M10 50 L35 75" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M50 10 L50 90 M50 10 L25 35 M50 10 L75 35" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M90 50 L10 50 M90 50 L65 25 M90 50 L65 75" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="36" stroke="#0284c7" strokeWidth="8" fill="none" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M10 50 L90 50 M10 50 L35 25 M10 50 L35 75" stroke="#0284c7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 15 L85 85 M15 85 L85 15" stroke="#0284c7" strokeWidth="9" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="18" y="18" width="64" height="64" stroke="#0284c7" strokeWidth="8" fill="none" /></svg>, isCorrect: false }
    ]
  },

  // Soal 2: Penjumlahan Garis Overlap
  {
    id: 2,
    difficulty: "Dasar",
    title: "2. Penjumlahan Garis Kisi",
    subtitle: "Kolom 1 ditambah Kolom 2 menghasilkan Kolom 3 pada setiap baris.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="50" y1="12" x2="50" y2="88" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#162033" strokeWidth="10" strokeLinecap="round" /><line x1="50" y1="12" x2="50" y2="88" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="18" y1="18" x2="82" y2="82" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="82" y1="18" x2="18" y2="82" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="18" y1="18" x2="82" y2="82" stroke="#162033" strokeWidth="10" strokeLinecap="round" /><line x1="82" y1="18" x2="18" y2="82" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="36" fill="none" stroke="#162033" strokeWidth="9" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#162033" strokeWidth="10" strokeLinecap="round" /><line x1="50" y1="12" x2="50" y2="88" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="36" fill="none" stroke="#162033" strokeWidth="9" /><line x1="12" y1="50" x2="88" y2="50" stroke="#162033" strokeWidth="10" strokeLinecap="round" /><line x1="50" y1="12" x2="50" y2="88" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="36" fill="#162033" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="18" y1="18" x2="82" y2="82" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="18" y="18" width="64" height="64" fill="none" stroke="#162033" strokeWidth="9" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#162033" strokeWidth="10" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="20" fill="#162033" /></svg>, isCorrect: false }
    ]
  },

  // Soal 3: Sektor Pie Bertingkat
  {
    id: 3,
    difficulty: "Dasar",
    title: "3. Akumulasi Sektor Lingkaran",
    subtitle: "Pola penambahan 1/4 kuadran lingkaran searah jarum jam.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><path d="M50 50 L50 8 A42 42 0 0 1 92 50 Z" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><path d="M50 50 L50 8 A42 42 0 0 1 92 50 L50 50 L92 50 A42 42 0 0 1 50 92 Z" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#0284c7" /><path d="M50 50 L8 50 A42 42 0 0 1 50 8 Z" fill="#e2e8f0" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><path d="M50 50 L92 50 A42 42 0 0 1 50 92 Z" fill="#0284c7" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><path d="M50 50 L92 50 A42 42 0 0 1 50 92 L50 50 L50 92 A42 42 0 0 1 8 50 Z" fill="#0284c7" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#0284c7" /><path d="M50 50 L50 8 A42 42 0 0 1 92 50 Z" fill="#e2e8f0" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><path d="M50 50 L50 92 A42 42 0 0 1 8 50 Z" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><path d="M50 50 L50 92 A42 42 0 0 1 8 50 L50 50 L8 50 A42 42 0 0 1 50 8 Z" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#0284c7" /><path d="M50 50 L92 50 A42 42 0 0 1 50 92 Z" fill="#e2e8f0" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><path d="M50 50 L50 8 A42 42 0 0 1 92 50 Z" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#e2e8f0" /><circle cx="50" cy="50" r="20" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },

  // Soal 4: Sisi Poligon Progresif
  {
    id: 4,
    difficulty: "Dasar",
    title: "4. Progresi Sisi Poligon",
    subtitle: "Jumlah sudut/sisi bangun bertambah secara teratur di setiap baris.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,12 90,88 10,88" fill="#3b82f6" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="#3b82f6" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,40 75,88 25,88 10,40" fill="#3b82f6" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="#3b82f6" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,40 75,88 25,88 10,40" fill="#3b82f6" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 88,30 88,70 50,90 12,70 12,30" fill="#3b82f6" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,40 75,88 25,88 10,40" fill="#3b82f6" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 88,30 88,70 50,90 12,70 12,30" fill="#3b82f6" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,8 82,22 94,56 76,88 24,88 6,56 18,22" fill="#3b82f6" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,12 90,88 10,88" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,40 75,88 25,88 10,40" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><ellipse cx="50" cy="50" rx="40" ry="24" fill="#3b82f6" /></svg>, isCorrect: false }
    ]
  },

  // Soal 5: Titik Dadu & Pergeseran Diagonal
  {
    id: 5,
    difficulty: "Menengah",
    title: "5. Distribusi Titik Dadu Sudut",
    subtitle: "Pola perpindahan titik pada posisi empat sudut persegi.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="28" cy="28" r="14" fill="#0B1419" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="28" cy="28" r="14" fill="#0B1419" /><circle cx="72" cy="28" r="14" fill="#0B1419" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="28" cy="28" r="14" fill="#0B1419" /><circle cx="72" cy="28" r="14" fill="#0B1419" /><circle cx="28" cy="72" r="14" fill="#0B1419" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="72" cy="28" r="14" fill="#0B1419" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="72" cy="28" r="14" fill="#0B1419" /><circle cx="72" cy="72" r="14" fill="#0B1419" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="72" cy="28" r="14" fill="#0B1419" /><circle cx="72" cy="72" r="14" fill="#0B1419" /><circle cx="28" cy="72" r="14" fill="#0B1419" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="72" cy="72" r="14" fill="#0B1419" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="72" cy="72" r="14" fill="#0B1419" /><circle cx="28" cy="72" r="14" fill="#0B1419" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="72" cy="72" r="14" fill="#0B1419" /><circle cx="28" cy="72" r="14" fill="#0B1419" /><circle cx="28" cy="28" r="14" fill="#0B1419" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="18" fill="#0B1419" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="28" cy="28" r="14" fill="#0B1419" /><circle cx="72" cy="72" r="14" fill="#0B1419" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="28" cy="28" r="14" fill="#0B1419" /><circle cx="72" cy="28" r="14" fill="#0B1419" /><circle cx="28" cy="72" r="14" fill="#0B1419" /><circle cx="72" cy="72" r="14" fill="#0B1419" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="28" cy="72" r="14" fill="#0B1419" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="25" y="25" width="50" height="50" fill="#0B1419" /></svg>, isCorrect: false }
    ]
  },

  // Soal 6: Inversi Papan Catur 2x2
  {
    id: 6,
    difficulty: "Menengah",
    title: "6. Negasi Papan Catur 2x2",
    subtitle: "Pola pergeseran dan inversi warna petak gelap-terang.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#0284c7" /><rect x="50" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="10" y="50" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="50" width="40" height="40" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="10" width="40" height="40" fill="#0284c7" /><rect x="10" y="50" width="40" height="40" fill="#0284c7" /><rect x="50" y="50" width="40" height="40" fill="#e2e8f0" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#0284c7" /><rect x="50" y="10" width="40" height="40" fill="#0284c7" /><rect x="10" y="50" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="50" width="40" height="40" fill="#e2e8f0" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="10" width="40" height="40" fill="#0284c7" /><rect x="10" y="50" width="40" height="40" fill="#0284c7" /><rect x="50" y="50" width="40" height="40" fill="#e2e8f0" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#0284c7" /><rect x="50" y="10" width="40" height="40" fill="#0284c7" /><rect x="10" y="50" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="50" width="40" height="40" fill="#e2e8f0" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="10" y="50" width="40" height="40" fill="#0284c7" /><rect x="50" y="50" width="40" height="40" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#0284c7" /><rect x="50" y="10" width="40" height="40" fill="#0284c7" /><rect x="10" y="50" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="50" width="40" height="40" fill="#e2e8f0" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="10" y="50" width="40" height="40" fill="#0284c7" /><rect x="50" y="50" width="40" height="40" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#0284c7" /><rect x="50" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="10" y="50" width="40" height="40" fill="#0284c7" /><rect x="50" y="50" width="40" height="40" fill="#e2e8f0" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#0284c7" /><rect x="50" y="10" width="40" height="40" fill="#0284c7" /><rect x="10" y="50" width="40" height="40" fill="#0284c7" /><rect x="50" y="50" width="40" height="40" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="10" y="50" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="50" width="40" height="40" fill="#e2e8f0" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="40" height="40" fill="#0284c7" /><rect x="50" y="10" width="40" height="40" fill="#e2e8f0" /><rect x="10" y="50" width="40" height="40" fill="#e2e8f0" /><rect x="50" y="50" width="40" height="40" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="36" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="15" y1="15" x2="85" y2="85" stroke="#0284c7" strokeWidth="9" /></svg>, isCorrect: false }
    ]
  },

  // Soal 7: Lapisan Geometri Konsentris
  {
    id: 7,
    difficulty: "Menengah",
    title: "7. Bentuk Konsentris Berlapis",
    subtitle: "Kombinasi bentuk luar dan bentuk dalam pada setiap sel.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="4" fill="none" stroke="#4f46e5" strokeWidth="8" /><circle cx="50" cy="50" r="20" fill="#4f46e5" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="4" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,25 74,72 26,72" fill="#4f46e5" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="4" fill="none" stroke="#4f46e5" strokeWidth="8" /><rect x="32" y="32" width="36" height="36" rx="2" fill="#4f46e5" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="none" stroke="#4f46e5" strokeWidth="8" /><circle cx="50" cy="50" r="20" fill="#4f46e5" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,25 74,72 26,72" fill="#4f46e5" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="none" stroke="#4f46e5" strokeWidth="8" /><rect x="32" y="32" width="36" height="36" rx="2" fill="#4f46e5" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><circle cx="50" cy="62" r="16" fill="#4f46e5" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,42 68,78 32,78" fill="#4f46e5" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><rect x="34" y="48" width="32" height="32" rx="2" fill="#4f46e5" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><circle cx="50" cy="62" r="16" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="15" y1="50" x2="85" y2="50" stroke="#4f46e5" strokeWidth="9" /></svg>, isCorrect: false }
    ]
  },

  // Soal 8: Kepadatan Garis Arsir Miring
  {
    id: 8,
    difficulty: "Menengah",
    title: "8. Frekuensi Garis Arsir",
    subtitle: "Pola pertambahan garis arsir diagonal 2 -> 3 -> 4.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="12" y="12" width="76" height="76" rx="4" fill="none" stroke="#162033" strokeWidth="6" /><line x1="25" y1="12" x2="12" y2="25" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="88" y1="75" x2="75" y2="88" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="12" y="12" width="76" height="76" rx="4" fill="none" stroke="#162033" strokeWidth="6" /><line x1="40" y1="12" x2="12" y2="40" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="65" y1="12" x2="12" y2="65" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="88" y1="35" x2="35" y2="88" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="12" y="12" width="76" height="76" rx="4" fill="none" stroke="#162033" strokeWidth="6" /><line x1="32" y1="12" x2="12" y2="32" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="52" y1="12" x2="12" y2="52" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="72" y1="12" x2="12" y2="72" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="88" y1="28" x2="28" y2="88" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#162033" strokeWidth="6" /><line x1="32" y1="24" x2="24" y2="32" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="76" y1="68" x2="68" y2="76" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#162033" strokeWidth="6" /><line x1="42" y1="16" x2="16" y2="42" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="68" y1="16" x2="16" y2="68" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="84" y1="32" x2="32" y2="84" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#162033" strokeWidth="6" /><line x1="36" y1="16" x2="16" y2="36" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="52" y1="14" x2="14" y2="52" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="68" y1="16" x2="16" y2="68" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="84" y1="32" x2="32" y2="84" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#162033" strokeWidth="6" /><line x1="38" y1="40" x2="30" y2="54" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="70" y1="84" x2="62" y2="90" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#162033" strokeWidth="6" /><line x1="44" y1="28" x2="25" y2="62" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="58" y1="28" x2="25" y2="88" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /><line x1="75" y1="58" x2="52" y2="90" stroke="#F26207" strokeWidth="8" strokeLinecap="round" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#162033" strokeWidth="6" /><line x1="40" y1="24" x2="22" y2="58" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="50" y1="20" x2="20" y2="78" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="62" y1="24" x2="30" y2="90" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /><line x1="78" y1="58" x2="58" y2="90" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#162033" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="12" x2="88" y2="88" stroke="#0284c7" strokeWidth="8" /></svg>, isCorrect: false }
    ]
  },

  // Soal 9: Jarum Jam & Sudut Rotasi 45 Derajat
  {
    id: 9,
    difficulty: "Menengah",
    title: "9. Sudut Jam Berputar",
    subtitle: "Dua jarum jam bergerak menjauh sebesar 45 derajat di setiap kolom.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="50" y2="14" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="50" y2="14" stroke="#F26207" strokeWidth="6" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="50" y2="14" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="78" y2="22" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="50" y2="14" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="86" y2="50" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="78" y2="22" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="78" y2="22" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="78" y2="22" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="86" y2="50" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="78" y2="22" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="78" y2="78" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="86" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="86" y2="50" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="86" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="78" y2="78" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="86" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="50" y2="86" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="50" y2="14" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="50" x2="50" y2="86" stroke="#F26207" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#F26207" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="6" /><line x1="50" y1="50" x2="14" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#94a3b8" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="16" fill="#0B1419" /></svg>, isCorrect: false }
    ]
  },

  // Soal 10: Pengurangan Bentuk XOR
  {
    id: 10,
    difficulty: "Menengah",
    title: "10. Pengurangan Bentuk Serupa (XOR)",
    subtitle: "Garis yang sama di kolom 1 & 2 dihilangkan pada kolom 3.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="12" y="12" width="76" height="76" rx="4" fill="none" stroke="#0284c7" strokeWidth="8" /><line x1="12" y1="12" x2="88" y2="88" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="12" y="12" width="76" height="76" rx="4" fill="none" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="12" x2="88" y2="88" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0284c7" strokeWidth="8" /><line x1="50" y1="12" x2="50" y2="88" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="50" y1="12" x2="50" y2="88" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#0284c7" strokeWidth="8" /><circle cx="50" cy="62" r="16" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="62" r="16" fill="#0284c7" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#0284c7" strokeWidth="8" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#0284c7" strokeWidth="8" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#0284c7" strokeWidth="8" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },

  // Soal 11: Pencerminan Asimetris
  {
    id: 11,
    difficulty: "Lanjutan",
    title: "11. Pencerminan Asimetris (Mirroring)",
    subtitle: "Refleksi pola vertikal dan inversi sudut.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 15 L85 15 L85 85 Z" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M85 15 L85 85 L15 85 Z" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 85 L15 15 L85 85 Z" fill="#0284c7" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M85 15 L85 85 L15 85 Z" fill="#0284c7" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 85 L15 15 L85 85 Z" fill="#0284c7" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 15 L85 15 L15 85 Z" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 85 L15 15 L85 85 Z" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 15 L85 15 L15 85 Z" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 15 L85 15 L85 85 Z" fill="#0284c7" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M85 15 L85 85 L15 85 Z" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M15 85 L15 15 L85 85 Z" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },

  // Soal 12: Permutasi Simbol Latin Square
  {
    id: 12,
    difficulty: "Lanjutan",
    title: "12. Permutasi Simbol Latin Square",
    subtitle: "Tiga simbol unik (Bintang, Kotak, Lingkaran) berotasi tanpa duplikasi baris.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,8 63,35 92,35 68,54 77,82 50,64 23,82 32,54 8,35 37,35" fill="#f59e0b" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="#3b82f6" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#10b981" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="#3b82f6" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#10b981" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,8 63,35 92,35 68,54 77,82 50,64 23,82 32,54 8,35 37,35" fill="#f59e0b" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#10b981" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,8 63,35 92,35 68,54 77,82 50,64 23,82 32,54 8,35 37,35" fill="#f59e0b" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="#3b82f6" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#10b981" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,8 63,35 92,35 68,54 77,82 50,64 23,82 32,54 8,35 37,35" fill="#f59e0b" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#3b82f6" strokeWidth="8" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><ellipse cx="50" cy="50" rx="40" ry="22" fill="#3b82f6" /></svg>, isCorrect: false }
    ]
  },

  // Soal 13: Morfologi Kelengkungan Garis
  {
    id: 13,
    difficulty: "Lanjutan",
    title: "13. Morfologi Kelengkungan Garis",
    subtitle: "Transformasi dari garis lurus menjadi kurva penuh.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M12 50 Q50 12 88 50" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" fill="none" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" stroke="#0284c7" strokeWidth="11" fill="none" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="50" y1="12" x2="50" y2="88" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M50 12 Q12 50 50 88" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" fill="none" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" stroke="#0284c7" strokeWidth="11" fill="none" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="18" y1="18" x2="82" y2="82" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M18 18 Q82 18 82 82" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" fill="none" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" stroke="#0284c7" strokeWidth="11" fill="none" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" stroke="#0284c7" strokeWidth="10" fill="none" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M12 50 Q50 88 88 50" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" fill="none" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="18" y1="82" x2="82" y2="18" stroke="#0284c7" strokeWidth="11" strokeLinecap="round" /></svg>, isCorrect: false }
    ]
  },

  // Soal 14: Skala Ukuran Progresif
  {
    id: 14,
    difficulty: "Lanjutan",
    title: "14. Skala Ukuran Progresif",
    subtitle: "Pola ukuran kecil, sedang, dan besar pada matriks diagonal.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="16" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="28" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#0284c7" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="34" y="34" width="32" height="32" rx="3" fill="#6366f1" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="22" y="22" width="56" height="56" rx="4" fill="#6366f1" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="5" fill="#6366f1" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,32 70,68 30,68" fill="#10b981" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,20 80,80 20,80" fill="#10b981" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,8 92,92 8,92" fill="#10b981" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,32 70,68 30,68" fill="#10b981" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="5" fill="#6366f1" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="16" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><ellipse cx="50" cy="50" rx="42" ry="24" fill="#10b981" /></svg>, isCorrect: false }
    ]
  },

  // Soal 15: Bidik Titik Kuadran Konsentris
  {
    id: 15,
    difficulty: "Sangat Sulit",
    title: "15. Bidik Titik Kuadran Konsentris",
    subtitle: "Pola perpindahan titik pusat searah 4 kuadran lingkaran.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="70" cy="30" r="10" fill="#ef4444" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="70" cy="70" r="10" fill="#ef4444" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="30" cy="70" r="10" fill="#ef4444" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="70" cy="70" r="10" fill="#ef4444" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="30" cy="70" r="10" fill="#ef4444" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="30" cy="30" r="10" fill="#ef4444" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="30" cy="70" r="10" fill="#ef4444" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="30" cy="30" r="10" fill="#ef4444" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><line x1="50" y1="8" x2="50" y2="92" stroke="#94a3b8" strokeWidth="3" /><line x1="8" y1="50" x2="92" y2="50" stroke="#94a3b8" strokeWidth="3" /><circle cx="70" cy="30" r="10" fill="#ef4444" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><circle cx="50" cy="50" r="12" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#64748b" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="42" fill="none" stroke="#64748b" strokeWidth="6" /><circle cx="30" cy="70" r="10" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="10" y1="10" x2="90" y2="90" stroke="#ef4444" strokeWidth="8" /></svg>, isCorrect: false }
    ]
  },

  // Soal 16: Matriks Tekstur Shading Mandiri
  {
    id: 16,
    difficulty: "Sangat Sulit",
    title: "16. Matriks Tekstur Shading Mandiri",
    subtitle: "Kombinasi 3 bentuk luar dan 3 tipe pola arsir dalam yang terdistribusi merata.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="none" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" rx="4" fill="none" stroke="#0284c7" strokeWidth="8" /><line x1="15" y1="15" x2="85" y2="85" stroke="#0284c7" strokeWidth="7" /><line x1="85" y1="15" x2="15" y2="85" stroke="#0284c7" strokeWidth="7" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0284c7" strokeWidth="8" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0284c7" strokeWidth="8" /><line x1="23" y1="23" x2="77" y2="77" stroke="#0284c7" strokeWidth="7" /><line x1="77" y1="23" x2="23" y2="77" stroke="#0284c7" strokeWidth="7" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#0284c7" strokeWidth="8" /><line x1="50" y1="30" x2="30" y2="82" stroke="#0284c7" strokeWidth="7" /><line x1="50" y1="30" x2="70" y2="82" stroke="#0284c7" strokeWidth="7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#0284c7" strokeWidth="8" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#0284c7" strokeWidth="9" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="16" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },

  // Soal 17: Bilah Puzzle Berpengait
  {
    id: 17,
    difficulty: "Sangat Sulit",
    title: "17. Bilah Puzzle Berpengait",
    subtitle: "Pola penambahan tonjolan dan lekukan saling mengunci.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="20" y="20" width="60" height="60" rx="6" fill="#3b82f6" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H80 V42 A12 12 0 0 1 80 58 V80 H20 Z" fill="#3b82f6" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H80 V42 A12 12 0 0 1 80 58 V80 H58 A12 12 0 0 1 42 80 H20 Z" fill="#3b82f6" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H80 V42 A12 12 0 0 0 80 58 V80 H20 Z" fill="#3b82f6" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H80 V42 A12 12 0 0 0 80 58 V80 H58 A12 12 0 0 1 42 80 H20 Z" fill="#3b82f6" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H80 V42 A12 12 0 0 0 80 58 V80 H58 A12 12 0 0 0 42 80 H20 Z" fill="#3b82f6" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H42 A12 12 0 0 1 58 20 H80 V80 H20 Z" fill="#3b82f6" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H42 A12 12 0 0 1 58 20 H80 V42 A12 12 0 0 1 80 58 V80 H20 Z" fill="#3b82f6" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H42 A12 12 0 0 1 58 20 H80 V42 A12 12 0 0 1 80 58 V80 H58 A12 12 0 0 1 42 80 H20 Z" fill="#3b82f6" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="20" y="20" width="60" height="60" rx="6" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M20 20 H80 V42 A12 12 0 0 1 80 58 V80 H20 Z" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="16" fill="#3b82f6" /></svg>, isCorrect: false }
    ]
  },

  // Soal 18: Interseksi Koordinat Bintang
  {
    id: 18,
    difficulty: "Master Level",
    title: "18. Irisan Vektor Multi-Dimensi",
    subtitle: "Kombinasi garis silang dan titik fokal koordinat.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="10" y1="50" x2="90" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="50" y1="10" x2="50" y2="90" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="10" y1="50" x2="90" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="10" x2="50" y2="90" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="16" y1="16" x2="84" y2="84" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="84" y1="16" x2="16" y2="84" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="16" y1="16" x2="84" y2="84" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="84" y1="16" x2="16" y2="84" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0B1419" strokeWidth="7" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="10" y1="50" x2="90" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="10" x2="50" y2="90" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0B1419" strokeWidth="7" /><line x1="10" y1="50" x2="90" y2="50" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><line x1="50" y1="10" x2="50" y2="90" stroke="#0B1419" strokeWidth="8" strokeLinecap="round" /><circle cx="50" cy="50" r="12" fill="#F26207" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="#F26207" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#0B1419" strokeWidth="8" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="16" y1="16" x2="84" y2="84" stroke="#0B1419" strokeWidth="8" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0B1419" strokeWidth="7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="16" fill="#0B1419" /></svg>, isCorrect: false }
    ]
  },

  // Soal 19: Matriks Fraktal 4-Kuadran
  {
    id: 19,
    difficulty: "Master Level",
    title: "19. Fraktal Kuadran Bersarang",
    subtitle: "Siklus perputaran sub-elemen mikro di dalam matriks makro.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="30" cy="30" r="10" fill="#F26207" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="70" cy="30" r="10" fill="#F26207" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="70" cy="70" r="10" fill="#F26207" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="70" cy="30" r="10" fill="#F26207" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="70" cy="70" r="10" fill="#F26207" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="30" cy="70" r="10" fill="#F26207" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="70" cy="70" r="10" fill="#F26207" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="30" cy="70" r="10" fill="#F26207" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="30" cy="30" r="10" fill="#F26207" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="#F26207" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="38" fill="none" stroke="#0B1419" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#0B1419" strokeWidth="6" /><circle cx="70" cy="70" r="10" fill="#F26207" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="14" fill="#F26207" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="12" x2="88" y2="88" stroke="#0B1419" strokeWidth="7" /></svg>, isCorrect: false }
    ]
  },

  // Soal 20: Sintesis Logika Multi-Layer Master Level
  {
    id: 20,
    difficulty: "Master Level",
    title: "20. Sintesis Logika Multi-Layer Master Level",
    subtitle: "Ujian puncak penalaran matriks kombinasi bentuk, arah, dan orientasi.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,18 78,74 22,74" fill="#F26207" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="82,50 26,78 26,22" fill="#F26207" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,82 22,26 78,26" fill="#F26207" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="82,50 26,78 26,22" fill="#F26207" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,82 22,26 78,26" fill="#F26207" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="18,50 74,22 74,78" fill="#F26207" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,82 22,26 78,26" fill="#F26207" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="18,50 74,22 74,78" fill="#F26207" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><polygon points="50,32 78,82 22,82" fill="#F26207" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="#F26207" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><rect x="10" y="10" width="80" height="80" fill="none" stroke="#4f46e5" strokeWidth="8" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,10 90,90 10,90" fill="none" stroke="#4f46e5" strokeWidth="8" /><circle cx="50" cy="60" r="16" fill="#F26207" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="12" y1="50" x2="88" y2="50" stroke="#4f46e5" strokeWidth="9" /></svg>, isCorrect: false }
    ]
  }
];
