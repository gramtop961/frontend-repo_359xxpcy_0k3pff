import React from 'react';
import { Home, MessageCircle, BookOpen, User } from 'lucide-react';

const NavItem = ({ label, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      active ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
    }`}
  >
    <Icon className={`h-5 w-5 ${active ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} />
    <span>{label}</span>
  </button>
);

const Navbar = ({ current, onNavigate }) => {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-200 via-blue-400 to-blue-700 shadow-sm ring-1 ring-white/50" />
            <div className="flex flex-col">
              <span className="text-sm tracking-wide text-slate-500">Mufadz App</span>
              <span className="-mt-1 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-800 bg-clip-text text-lg font-semibold text-transparent">Islami Modern</span>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavItem label="Chat Global" icon={MessageCircle} active={current === 'chat'} onClick={() => onNavigate('chat')} />
            <NavItem label="Home" icon={Home} active={current === 'home'} onClick={() => onNavigate('home')} />
            <NavItem label="Baca Quran" icon={BookOpen} active={current === 'quran'} onClick={() => onNavigate('quran')} />
            <NavItem label="Profile" icon={User} active={current === 'profile'} onClick={() => onNavigate('profile')} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
