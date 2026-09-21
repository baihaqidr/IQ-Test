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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 15 L50 85 M50 15 L30 35 M50 15 L70 35" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M85 50 L15 50 M85 50 L65 30 M85 50 L65 70" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 85 L50 15 M50 85 L30 65 M50 85 L70 65" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M85 50 L15 50 M85 50 L65 30 M85 50 L65 70" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 85 L50 15 M50 85 L30 65 M50 85 L70 65" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M15 50 L85 50 M15 50 L35 30 M15 50 L35 70" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 85 L50 15 M50 85 L30 65 M50 85 L70 65" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M15 50 L85 50 M15 50 L35 30 M15 50 L35 70" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 15 L50 85 M50 15 L30 35 M50 15 L70 35" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M85 50 L15 50 M85 50 L65 30 M85 50 L65 70" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" stroke="#0284c7" strokeWidth="6" fill="none" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M15 50 L85 50 M15 50 L35 30 M15 50 L35 70" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M20 20 L80 80 M20 80 L80 20" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" stroke="#0284c7" strokeWidth="6" fill="none" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="50" y1="20" x2="50" y2="80" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /><line x1="50" y1="20" x2="50" y2="80" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="25" y1="25" x2="75" y2="75" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="75" y1="25" x2="25" y2="75" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="25" y1="25" x2="75" y2="75" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /><line x1="75" y1="25" x2="25" y2="75" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="6" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /><line x1="50" y1="20" x2="50" y2="80" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="6" /><line x1="20" y1="50" x2="80" y2="50" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /><line x1="50" y1="20" x2="50" y2="80" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="#1e293b" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="25" y1="25" x2="75" y2="75" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#1e293b" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="15" fill="#1e293b" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 15 A35 35 0 0 1 85 50 Z" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 15 A35 35 0 0 1 85 50 L50 50 L85 50 A35 35 0 0 1 50 85 Z" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#0284c7" /><path d="M50 50 L15 50 A35 35 0 0 1 50 15 Z" fill="#e2e8f0" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L85 50 A35 35 0 0 1 50 85 Z" fill="#0284c7" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L85 50 A35 35 0 0 1 50 85 L50 50 L50 85 A35 35 0 0 1 15 50 Z" fill="#0284c7" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#0284c7" /><path d="M50 50 L50 15 A35 35 0 0 1 85 50 Z" fill="#e2e8f0" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 85 A35 35 0 0 1 15 50 Z" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 85 A35 35 0 0 1 15 50 L50 50 L15 50 A35 35 0 0 1 50 15 Z" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#0284c7" /><path d="M50 50 L85 50 A35 35 0 0 1 50 85 Z" fill="#e2e8f0" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><path d="M50 50 L50 15 A35 35 0 0 1 85 50 Z" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#e2e8f0" /><circle cx="50" cy="50" r="15" fill="#0284c7" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,18 85,82 15,82" fill="#3b82f6" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="22" y="22" width="56" height="56" fill="#3b82f6" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#3b82f6" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="22" y="22" width="56" height="56" fill="#3b82f6" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#3b82f6" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#3b82f6" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#3b82f6" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#3b82f6" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,12 79,25 90,56 74,84 26,84 10,56 21,25" fill="#3b82f6" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,18 85,82 15,82" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="22" y="22" width="56" height="56" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,42 72,82 28,82 15,42" fill="#3b82f6" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><ellipse cx="50" cy="50" rx="35" ry="20" fill="#3b82f6" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="30" r="8" fill="#0f172a" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="30" r="8" fill="#0f172a" /><circle cx="70" cy="30" r="8" fill="#0f172a" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="30" r="8" fill="#0f172a" /><circle cx="70" cy="30" r="8" fill="#0f172a" /><circle cx="30" cy="70" r="8" fill="#0f172a" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="70" cy="30" r="8" fill="#0f172a" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="70" cy="30" r="8" fill="#0f172a" /><circle cx="70" cy="70" r="8" fill="#0f172a" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="70" cy="30" r="8" fill="#0f172a" /><circle cx="70" cy="70" r="8" fill="#0f172a" /><circle cx="30" cy="70" r="8" fill="#0f172a" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="70" cy="70" r="8" fill="#0f172a" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="70" cy="70" r="8" fill="#0f172a" /><circle cx="30" cy="70" r="8" fill="#0f172a" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="70" cy="70" r="8" fill="#0f172a" /><circle cx="30" cy="70" r="8" fill="#0f172a" /><circle cx="30" cy="30" r="8" fill="#0f172a" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="10" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="30" r="8" fill="#0f172a" /><circle cx="70" cy="70" r="8" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="30" r="8" fill="#0f172a" /><circle cx="70" cy="30" r="8" fill="#0f172a" /><circle cx="30" cy="70" r="8" fill="#0f172a" /><circle cx="70" cy="70" r="8" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="30" cy="70" r="8" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="30" y="30" width="40" height="40" fill="#0f172a" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#0284c7" /><rect x="50" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="15" y="50" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="50" width="35" height="35" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="15" width="35" height="35" fill="#0284c7" /><rect x="15" y="50" width="35" height="35" fill="#0284c7" /><rect x="50" y="50" width="35" height="35" fill="#e2e8f0" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#0284c7" /><rect x="50" y="15" width="35" height="35" fill="#0284c7" /><rect x="15" y="50" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="50" width="35" height="35" fill="#e2e8f0" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="15" width="35" height="35" fill="#0284c7" /><rect x="15" y="50" width="35" height="35" fill="#0284c7" /><rect x="50" y="50" width="35" height="35" fill="#e2e8f0" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#0284c7" /><rect x="50" y="15" width="35" height="35" fill="#0284c7" /><rect x="15" y="50" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="50" width="35" height="35" fill="#e2e8f0" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="15" y="50" width="35" height="35" fill="#0284c7" /><rect x="50" y="50" width="35" height="35" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#0284c7" /><rect x="50" y="15" width="35" height="35" fill="#0284c7" /><rect x="15" y="50" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="50" width="35" height="35" fill="#e2e8f0" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="15" y="50" width="35" height="35" fill="#0284c7" /><rect x="50" y="50" width="35" height="35" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#0284c7" /><rect x="50" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="15" y="50" width="35" height="35" fill="#0284c7" /><rect x="50" y="50" width="35" height="35" fill="#e2e8f0" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#0284c7" /><rect x="50" y="15" width="35" height="35" fill="#0284c7" /><rect x="15" y="50" width="35" height="35" fill="#0284c7" /><rect x="50" y="50" width="35" height="35" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="15" y="50" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="50" width="35" height="35" fill="#e2e8f0" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="35" height="35" fill="#0284c7" /><rect x="50" y="15" width="35" height="35" fill="#e2e8f0" /><rect x="15" y="50" width="35" height="35" fill="#e2e8f0" /><rect x="50" y="50" width="35" height="35" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="20" x2="80" y2="80" stroke="#0284c7" strokeWidth="6" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#4f46e5" strokeWidth="5" /><circle cx="50" cy="50" r="16" fill="#4f46e5" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#4f46e5" strokeWidth="5" /><polygon points="50,30 68,68 32,68" fill="#4f46e5" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="70" height="70" fill="none" stroke="#4f46e5" strokeWidth="5" /><rect x="36" y="36" width="28" height="28" fill="#4f46e5" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#4f46e5" strokeWidth="5" /><circle cx="50" cy="50" r="16" fill="#4f46e5" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#4f46e5" strokeWidth="5" /><polygon points="50,30 68,68 32,68" fill="#4f46e5" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#4f46e5" strokeWidth="5" /><rect x="36" y="36" width="28" height="28" fill="#4f46e5" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#4f46e5" strokeWidth="5" /><circle cx="50" cy="60" r="14" fill="#4f46e5" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#4f46e5" strokeWidth="5" /><polygon points="50,45 64,75 36,75" fill="#4f46e5" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#4f46e5" strokeWidth="5" /><rect x="38" y="48" width="24" height="24" fill="#4f46e5" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="15" y="15" width="70" height="70" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#4f46e5" strokeWidth="5" /><circle cx="50" cy="60" r="14" fill="#4f46e5" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#4f46e5" strokeWidth="6" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="20" y="20" width="60" height="60" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="30" y1="20" x2="20" y2="30" stroke="#0284c7" strokeWidth="4" /><line x1="80" y1="70" x2="70" y2="80" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="20" y="20" width="60" height="60" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="40" y1="20" x2="20" y2="40" stroke="#0284c7" strokeWidth="4" /><line x1="60" y1="20" x2="20" y2="60" stroke="#0284c7" strokeWidth="4" /><line x1="80" y1="40" x2="40" y2="80" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="20" y="20" width="60" height="60" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="35" y1="20" x2="20" y2="35" stroke="#0284c7" strokeWidth="4" /><line x1="50" y1="20" x2="20" y2="50" stroke="#0284c7" strokeWidth="4" /><line x1="65" y1="20" x2="20" y2="65" stroke="#0284c7" strokeWidth="4" /><line x1="80" y1="35" x2="35" y2="80" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="35" y1="30" x2="30" y2="35" stroke="#0284c7" strokeWidth="4" /><line x1="70" y1="65" x2="65" y2="70" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="40" y1="25" x2="25" y2="40" stroke="#0284c7" strokeWidth="4" /><line x1="60" y1="25" x2="25" y2="60" stroke="#0284c7" strokeWidth="4" /><line x1="75" y1="40" x2="40" y2="75" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="38" y1="23" x2="23" y2="38" stroke="#0284c7" strokeWidth="4" /><line x1="50" y1="20" x2="20" y2="50" stroke="#0284c7" strokeWidth="4" /><line x1="62" y1="23" x2="23" y2="62" stroke="#0284c7" strokeWidth="4" /><line x1="77" y1="38" x2="38" y2="77" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="40" y1="40" x2="35" y2="50" stroke="#0284c7" strokeWidth="4" /><line x1="60" y1="80" x2="55" y2="85" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="45" y1="30" x2="30" y2="60" stroke="#0284c7" strokeWidth="4" /><line x1="55" y1="30" x2="30" y2="80" stroke="#0284c7" strokeWidth="4" /><line x1="70" y1="55" x2="50" y2="85" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#1e293b" strokeWidth="4" /><line x1="42" y1="28" x2="28" y2="55" stroke="#0284c7" strokeWidth="4" /><line x1="50" y1="25" x2="25" y2="75" stroke="#0284c7" strokeWidth="4" /><line x1="58" y1="28" x2="35" y2="85" stroke="#0284c7" strokeWidth="4" /><line x1="72" y1="55" x2="55" y2="85" stroke="#0284c7" strokeWidth="4" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 85,85 15,85" fill="none" stroke="#1e293b" strokeWidth="4" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="15" y1="15" x2="85" y2="85" stroke="#0284c7" strokeWidth="6" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="50" y2="20" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="50" y2="20" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="50" y2="20" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="72" y2="28" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="50" y2="20" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="80" y2="50" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="72" y2="28" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="72" y2="28" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="72" y2="28" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="80" y2="50" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="72" y2="28" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="72" y2="72" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="80" y2="50" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="72" y2="72" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="50" y2="80" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="50" y2="20" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /><line x1="50" y1="50" x2="50" y2="80" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="50" x2="20" y2="50" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#64748b" strokeWidth="4" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="10" fill="#0f172a" /></svg>, isCorrect: false }
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
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="20" y="20" width="60" height="60" fill="none" stroke="#0284c7" strokeWidth="5" /><line x1="20" y1="20" x2="80" y2="80" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="20" y="20" width="60" height="60" fill="none" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="20" x2="80" y2="80" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#0284c7" strokeWidth="5" /><line x1="50" y1="20" x2="50" y2="80" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="50" y1="20" x2="50" y2="80" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="none" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="none" stroke="#0284c7" strokeWidth="5" /><circle cx="50" cy="55" r="12" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="none" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="55" r="12" fill="#0284c7" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#0284c7" strokeWidth="5" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0284c7" strokeWidth="5" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="none" stroke="#0284c7" strokeWidth="5" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },

  // Soal 11 sampai 20 dibuat dengan pola unik dan tingkat kesulitan bertahap
  {
    id: 11,
    difficulty: "Lanjutan",
    title: "11. Pencerminan Asimetris (Mirroring)",
    subtitle: "Refleksi pola vertikal dan inversi sudut.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 25 L75 25 L75 75 Z" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M75 25 L75 75 L25 75 Z" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 75 L25 25 L75 75 Z" fill="#0284c7" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M75 25 L75 75 L25 75 Z" fill="#0284c7" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 75 L25 25 L75 75 Z" fill="#0284c7" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 25 L75 25 L25 75 Z" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 75 L25 25 L75 75 Z" fill="#0284c7" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 25 L75 25 L25 75 Z" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 25 L75 25 L75 75 Z" fill="#0284c7" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M75 25 L75 75 L25 75 Z" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 75 L25 25 L75 75 Z" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 12,
    difficulty: "Lanjutan",
    title: "12. Permutasi Simbol Latin Square",
    subtitle: "Tiga simbol unik (Bintang, Kotak, Lingkaran) berotasi tanpa duplikasi baris.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 61,38 85,38 66,54 73,78 50,62 27,78 34,54 15,38 39,38" fill="#f59e0b" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#3b82f6" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#10b981" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#3b82f6" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#10b981" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 61,38 85,38 66,54 73,78 50,62 27,78 34,54 15,38 39,38" fill="#f59e0b" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#10b981" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 61,38 85,38 66,54 73,78 50,62 27,78 34,54 15,38 39,38" fill="#f59e0b" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#3b82f6" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#10b981" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 61,38 85,38 66,54 73,78 50,62 27,78 34,54 15,38 39,38" fill="#f59e0b" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#3b82f6" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><ellipse cx="50" cy="50" rx="30" ry="15" fill="#3b82f6" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 13,
    difficulty: "Lanjutan",
    title: "13. Morfologi Kelengkungan Garis",
    subtitle: "Transformasi dari garis lurus menjadi kurva penuh.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M20 50 Q50 20 80 50" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" fill="none" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" stroke="#0284c7" strokeWidth="7" fill="none" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="50" y1="20" x2="50" y2="80" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M50 20 Q20 50 50 80" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" fill="none" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" stroke="#0284c7" strokeWidth="7" fill="none" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="25" y1="25" x2="75" y2="75" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M25 25 Q75 25 75 75" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" fill="none" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" stroke="#0284c7" strokeWidth="7" fill="none" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" stroke="#0284c7" strokeWidth="7" fill="none" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><path d="M20 50 Q50 80 80 50" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" fill="none" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="25" y1="75" x2="75" y2="25" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 14,
    difficulty: "Lanjutan",
    title: "14. Skala Ukuran Progresif",
    subtitle: "Pola ukuran kecil, sedang, dan besar pada matriks diagonal.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="12" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="22" fill="#0284c7" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="34" fill="#0284c7" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="38" y="38" width="24" height="24" fill="#6366f1" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="28" y="28" width="44" height="44" fill="#6366f1" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="16" y="16" width="68" height="68" fill="#6366f1" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,38 64,66 36,66" fill="#10b981" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,26 74,76 26,76" fill="#10b981" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,14 86,86 14,86" fill="#10b981" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="34" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,38 64,66 36,66" fill="#10b981" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="16" y="16" width="68" height="68" fill="#6366f1" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="12" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><ellipse cx="50" cy="50" rx="35" ry="20" fill="#10b981" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 15,
    difficulty: "Sangat Sulit",
    title: "15. Bidik Titik Kuadran Konsentris",
    subtitle: "Pola perpindahan titik pusat searah 4 kuadran lingkaran.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="65" cy="35" r="7" fill="#ef4444" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="65" cy="65" r="7" fill="#ef4444" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="35" cy="65" r="7" fill="#ef4444" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="65" cy="65" r="7" fill="#ef4444" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="35" cy="65" r="7" fill="#ef4444" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="35" cy="35" r="7" fill="#ef4444" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="35" cy="65" r="7" fill="#ef4444" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="35" cy="35" r="7" fill="#ef4444" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><line x1="50" y1="15" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" /><line x1="15" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2" /><circle cx="65" cy="35" r="7" fill="#ef4444" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><circle cx="50" cy="50" r="8" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#64748b" strokeWidth="4" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="4" /><circle cx="35" cy="65" r="7" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="15" y1="15" x2="85" y2="85" stroke="#ef4444" strokeWidth="5" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 16,
    difficulty: "Sangat Sulit",
    title: "16. Matriks Tekstur Shading Mandiri",
    subtitle: "Kombinasi 3 bentuk luar dan 3 tipe pola arsir dalam yang terdistribusi merata.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#0284c7" strokeWidth="5" /><line x1="25" y1="25" x2="75" y2="75" stroke="#0284c7" strokeWidth="4" /><line x1="75" y1="25" x2="25" y2="75" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="none" stroke="#0284c7" strokeWidth="5" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="none" stroke="#0284c7" strokeWidth="5" /><line x1="30" y1="30" x2="70" y2="70" stroke="#0284c7" strokeWidth="4" /><line x1="70" y1="30" x2="30" y2="70" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#0284c7" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="none" stroke="#0284c7" strokeWidth="5" /><line x1="50" y1="35" x2="35" y2="75" stroke="#0284c7" strokeWidth="4" /><line x1="50" y1="35" x2="65" y2="75" stroke="#0284c7" strokeWidth="4" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="#0284c7" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="none" stroke="#0284c7" strokeWidth="5" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0284c7" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="10" fill="#0284c7" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 17,
    difficulty: "Sangat Sulit",
    title: "17. Bilah Puzzle Berpengait",
    subtitle: "Pola tonjolan (+1) dan lekukan (-1) pada sambungan tepi puzzle.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="50" cy="25" r="8" fill="#0f172a" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="50" cy="25" r="8" fill="#0f172a" /><circle cx="75" cy="50" r="8" fill="#0f172a" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="50" cy="25" r="8" fill="#0f172a" /><circle cx="75" cy="50" r="8" fill="#0f172a" /><circle cx="50" cy="75" r="8" fill="#0f172a" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="75" cy="50" r="8" fill="#0f172a" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="75" cy="50" r="8" fill="#0f172a" /><circle cx="50" cy="75" r="8" fill="#0f172a" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="75" cy="50" r="8" fill="#0f172a" /><circle cx="50" cy="75" r="8" fill="#0f172a" /><circle cx="25" cy="50" r="8" fill="#0f172a" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="50" cy="75" r="8" fill="#0f172a" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="50" cy="75" r="8" fill="#0f172a" /><circle cx="25" cy="50" r="8" fill="#0f172a" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="50" cy="75" r="8" fill="#0f172a" /><circle cx="25" cy="50" r="8" fill="#0f172a" /><circle cx="50" cy="25" r="8" fill="#0f172a" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="25" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /><circle cx="50" cy="25" r="8" fill="#0f172a" /><circle cx="75" cy="50" r="8" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 18,
    difficulty: "Sangat Sulit",
    title: "18. Operasi Irisan Boolean Diagram Venn",
    subtitle: "Penggabungan logika irisan dua lingkaran.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="38" cy="50" r="24" fill="#0284c7" opacity="0.8" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="62" cy="50" r="24" fill="#6366f1" opacity="0.8" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="38" cy="50" r="24" fill="#0284c7" opacity="0.8" /><circle cx="62" cy="50" r="24" fill="#6366f1" opacity="0.8" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="20" y="32" width="36" height="36" fill="#0284c7" opacity="0.8" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="44" y="32" width="36" height="36" fill="#6366f1" opacity="0.8" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="20" y="32" width="36" height="36" fill="#0284c7" opacity="0.8" /><rect x="44" y="32" width="36" height="36" fill="#6366f1" opacity="0.8" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="35,25 55,75 15,75" fill="#0284c7" opacity="0.8" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="65,25 85,75 45,75" fill="#6366f1" opacity="0.8" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="35,25 55,75 15,75" fill="#0284c7" opacity="0.8" /><polygon points="65,25 85,75 45,75" fill="#6366f1" opacity="0.8" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,20 80,80 20,80" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0284c7" strokeWidth="6" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="12" fill="#6366f1" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 19,
    difficulty: "Sangat Sulit",
    title: "19. Pergerakan Spiral Matriks 9 Titik",
    subtitle: "Titik hitam aktif berputar spiral menuju titik tengah pusat.",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="9" fill="#ef4444" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="9" fill="#ef4444" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="9" fill="#ef4444" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="9" fill="#ef4444" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="9" fill="#ef4444" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="9" fill="#ef4444" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="9" fill="#ef4444" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="9" fill="#ef4444" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="5" fill="#cbd5e1" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="9" fill="#ef4444" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="25" cy="25" r="9" fill="#ef4444" /><circle cx="50" cy="25" r="5" fill="#cbd5e1" /><circle cx="75" cy="25" r="5" fill="#cbd5e1" /><circle cx="25" cy="50" r="5" fill="#cbd5e1" /><circle cx="50" cy="50" r="5" fill="#cbd5e1" /><circle cx="75" cy="50" r="5" fill="#cbd5e1" /><circle cx="25" cy="75" r="5" fill="#cbd5e1" /><circle cx="50" cy="75" r="5" fill="#cbd5e1" /><circle cx="75" cy="75" r="5" fill="#cbd5e1" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="28" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="75" cy="75" r="9" fill="#ef4444" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="20" x2="80" y2="80" stroke="#ef4444" strokeWidth="6" /></svg>, isCorrect: false }
    ]
  },

  {
    id: 20,
    difficulty: "Master Level",
    title: "20. Matriks Multidimensi WAIS-IV Terakhir",
    subtitle: "Transformasi gabungan 3 atribut (Bentuk Poligon, Arah Putaran 45°, dan Titik Inti).",
    matrixType: "3x3",
    grid: [
      { id: '1', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform="rotate(0 50 50)" /><circle cx="50" cy="50" r="8" fill="white" /></svg> },
      { id: '2', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform="rotate(45 50 50)" /><circle cx="50" cy="50" r="8" fill="white" /></svg> },
      { id: '3', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0284c7" transform="rotate(90 50 50)" /><polygon points="50,42 56,58 44,58" fill="white" /></svg> },
      { id: '4', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,18 82,82 18,82" fill="#6366f1" transform="rotate(0 50 50)" /><circle cx="50" cy="58" r="7" fill="white" /></svg> },
      { id: '5', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,18 82,82 18,82" fill="#6366f1" transform="rotate(60 50 50)" /><circle cx="50" cy="50" r="7" fill="white" /></svg> },
      { id: '6', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,18 82,82 18,82" fill="#6366f1" transform="rotate(120 50 50)" /><rect x="44" y="44" width="12" height="12" fill="white" /></svg> },
      { id: '7', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#0f172a" transform="rotate(0 50 50)" /><circle cx="50" cy="50" r="8" fill="white" /></svg> },
      { id: '8', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#0f172a" transform="rotate(30 50 50)" /><circle cx="50" cy="50" r="8" fill="white" /></svg> },
      { id: '9', isTarget: true }
    ],
    options: [
      { id: 'A', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#0f172a" transform="rotate(60 50 50)" /><polygon points="50,42 58,58 42,58" fill="white" /></svg>, isCorrect: true },
      { id: 'B', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'C', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><circle cx="50" cy="50" r="30" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'D', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><rect x="25" y="25" width="50" height="50" fill="#0f172a" /></svg>, isCorrect: false },
      { id: 'E', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><polygon points="50,18 82,82 18,82" fill="#6366f1" /></svg>, isCorrect: false },
      { id: 'F', svg: <svg viewBox="0 0 100 100" className="w-full h-full p-2"><line x1="20" y1="50" x2="80" y2="50" stroke="#0f172a" strokeWidth="6" /></svg>, isCorrect: false }
    ]
  }
];
