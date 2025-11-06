import React from 'react';
import { Compass } from 'lucide-react';

const Kiblat = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur border border-white/60 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-bl from-sky-50/60 via-blue-50/40 to-indigo-50/40 pointer-events-none" />
      <div className="relative p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 ring-1 ring-white">
            <Compass className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">Arah Kiblat</h3>
        </div>
        <div className="mx-auto mb-4 aspect-square w-40 rounded-full bg-gradient-to-br from-white via-sky-50 to-blue-100 p-3 shadow-inner ring-1 ring-slate-100">
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-sm">
            <div className="absolute inset-0 m-4 rounded-full border-2 border-dashed border-slate-200" />
            <div className="absolute h-2 w-2 rounded-full bg-blue-600" />
            <div className="absolute h-[70%] w-1 origin-bottom rounded-full bg-gradient-to-b from-blue-500 to-blue-800 shadow-lg" style={{ transform: 'rotate(-45deg)' }} />
          </div>
        </div>
        <p className="text-center text-sm text-slate-600">Arah Ka'bah: Barat Laut (dummy)</p>
      </div>
    </div>
  );
};

export default Kiblat;
