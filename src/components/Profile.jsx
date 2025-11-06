import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-4 py-10"
    >
      <div className="rounded-xl border border-white/60 bg-white/80 p-8 text-center shadow-sm backdrop-blur">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <User className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-semibold text-slate-800">Profile</h2>
        <p className="mt-2 text-slate-600">Silakan login untuk mengakses profilmu.</p>
        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">Login</button>
      </div>
    </motion.div>
  );
};

export default Profile;
