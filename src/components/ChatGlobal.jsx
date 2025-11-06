import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatGlobal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-4 py-10"
    >
      <div className="rounded-xl border border-white/60 bg-white/80 p-8 text-center shadow-sm backdrop-blur">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <MessageCircle className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-semibold text-slate-800">Chat Global</h2>
        <p className="mt-2 text-slate-600">Chat Global akan hadir di versi berikutnya.</p>
      </div>
    </motion.div>
  );
};

export default ChatGlobal;
