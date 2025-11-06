import React, { useMemo, useState } from 'react';
import { Calendar as CalendarIcon, Moon, Sun } from 'lucide-react';

const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

function getMonthMatrix(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDay = (firstDay.getDay() + 0) % 7; // Sunday start
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const matrix = [];
  let current = 1 - startDay;
  for (let r = 0; r < 6; r++) {
    const row = [];
    for (let c = 0; c < 7; c++) {
      const cellDate = new Date(year, month, current);
      row.push({
        date: cellDate,
        inMonth: cellDate.getMonth() === month,
        day: cellDate.getDate(),
      });
      current++;
    }
    matrix.push(row);
  }
  return matrix;
}

const hijriMonths = [
  'Muharram','Safar','Rabiul Awal','Rabiul Akhir','Jumadil Ula','Jumadil Akhir',
  "Rajab","Sya'ban","Ramadhan","Syawal","Zulkaidah","Zulhijjah"
];

// Simple approximate Hijri conversion (dummy/visual only)
function gregorianToHijri(date) {
  const ms = date.getTime();
  const days = Math.floor(ms / 86400000) + 1; // days since epoch
  const hijriDays = days - 227015; // rough offset
  const hYear = Math.floor(hijriDays / 354.367);
  const dayOfYear = Math.floor(hijriDays - hYear * 354.367);
  const monthLengths = [30,29,30,29,30,29,30,29,30,29,30,29];
  let m = 0;
  let d = dayOfYear;
  while (m < 12 && d >= monthLengths[m]) {
    d -= monthLengths[m];
    m++;
  }
  return { hYear: 1440 + hYear, hMonth: m, hDay: d + 1 };
}

const Kalender = () => {
  const [mode, setMode] = useState('masehi');
  const today = new Date();
  const matrix = useMemo(() => getMonthMatrix(today), [today]);

  const { hMonth } = gregorianToHijri(today);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur border border-white/60 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-50/60 via-blue-50/40 to-indigo-50/40 pointer-events-none" />
      <div className="relative p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 ring-1 ring-white">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Kalender</h3>
              <p className="text-xs text-slate-500">{mode === 'masehi' ? 'Masehi' : 'Hijriah'} (dummy)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMode('masehi')}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-all ${
                mode === 'masehi' ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Sun className="h-4 w-4" /> Masehi
            </button>
            <button
              onClick={() => setMode('hijri')}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-all ${
                mode === 'hijri' ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Moon className="h-4 w-4" /> Hijriah
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
          {days.map((d) => (
            <div key={d} className="py-1 font-medium">{d}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {matrix.flat().map((cell, idx) => {
            const isToday = cell.date.toDateString() === today.toDateString();
            const { hDay, hMonth: hm } = gregorianToHijri(cell.date);
            return (
              <div
                key={idx}
                className={`relative rounded-lg border p-2 transition-all hover:-translate-y-0.5 hover:shadow ${
                  cell.inMonth ? 'bg-white/70 border-slate-200' : 'bg-slate-50/70 border-slate-100 text-slate-400'
                } ${isToday ? 'ring-2 ring-blue-400' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-700">{cell.day}</span>
                  {mode === 'hijri' && (
                    <span className="text-[10px] text-blue-600">{hDay}</span>
                  )}
                </div>
                {mode === 'hijri' && cell.inMonth && (
                  <div className="mt-4 text-center text-[10px] text-slate-500">
                    {idx < 7 && hm === hMonth ? hijriMonths[hMonth] : ''}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Kalender;
