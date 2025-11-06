import React from 'react';
import JadwalSholat from './JadwalSholat';
import Kalender from './Kalender';
import Kiblat from './Kiblat';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-6xl px-4 py-6"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-800">Assalamu'alaikum 👋</h1>
        <p className="mt-1 text-slate-600">Selamat datang di Mufadz App — Islami Modern Web App.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-1">
          <JadwalSholat />
        </div>
        <div className="col-span-1 xl:col-span-1 md:col-span-1">
          <Kalender />
        </div>
        <div className="col-span-1">
          <Kiblat />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
