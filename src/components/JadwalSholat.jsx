import React from 'react';
import { Sun, Sunrise, Sunset } from 'lucide-react';

const times = [
  { name: 'Subuh', time: '04:35', icon: Sunrise },
  { name: 'Zuhur', time: '12:01', icon: Sun },
  { name: 'Ashar', time: '15:22', icon: Sun },
  { name: 'Maghrib', time: '17:48', icon: Sunset },
  { name: 'Isya', time: '19:00', icon: Sunset },
];

const JadwalSholat = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur border border-white/60 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-blue-50/40 to-indigo-50/40 pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800">Jadwal Sholat Hari Ini</h3>
          <span className="text-xs text-slate-500">Dummy Data</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {times.map(({ name, time, icon: Icon }) => (
            <div key={name} className="flex items-center justify-between rounded-lg border border-slate-100 bg-white/60 p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 text-blue-600 ring-1 ring-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">{name}</p>
                  <p className="text-xs text-slate-500">Waktu lokal</p>
                </div>
              </div>
              <p className="text-base font-semibold text-blue-700">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JadwalSholat;
