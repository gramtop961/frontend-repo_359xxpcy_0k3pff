import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ChatGlobal from './components/ChatGlobal';
import Quran from './components/Quran';
import Profile from './components/Profile';
import { motion } from 'framer-motion';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 text-slate-800">
      {/* Subtle radial highlight for glassy feel */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-100/60 via-transparent to-transparent" />

      <Navbar current={page} onNavigate={setPage} />

      <motion.main
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {page === 'home' && <Home />}
        {page === 'chat' && <ChatGlobal />}
        {page === 'quran' && <Quran />}
        {page === 'profile' && <Profile />}
      </motion.main>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mufadz App — Dibangun dengan nuansa biru yang tenang.
      </footer>
    </div>
  );
}

export default App;
