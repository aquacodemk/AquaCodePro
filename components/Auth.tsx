
import React, { useState } from 'react';
import { Lock, AlertCircle, Trophy } from 'lucide-react';

interface AuthProps {
  onAuthenticated: () => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validPasswords = ['Vlado', 'vaterpolo', '123456', 'PRO'];
    if (validPasswords.includes(password) || validPasswords.includes(password.toLowerCase())) {
      onAuthenticated();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 px-6 overflow-hidden">
      {/* Пулсирачки ефект на позадината */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.15)_0%,transparent_60%)] animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        {/* 1. ЛОГО - Поправен пат до главната папка */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2.5rem] p-1 shadow-2xl mb-8 border-4 border-cyan-500/20 overflow-hidden flex items-center justify-center">
          {!logoError ? (
            <img 
              src="logo.jpg" 
              alt="Logo" 
              className="w-full h-full object-cover rounded-[2.2rem]" 
              onError={() => setLogoError(true)}
            />
          ) : (
            <Trophy size={64} className="text-cyan-500" />
          )}
        </div>
        
        {/* 2. НАСЛОВ (Bold, Non-italic) */}
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-2 text-center">
          AQUA CODE
        </h1>
        
        {/* 3. ПОДНАСЛОВ (Bold, Non-italic) */}
        <p className="text-cyan-400 font-black text-lg md:text-xl tracking-[0.25em] uppercase mb-12 text-center">
          ватерполо тренинг
        </p>

        {/* 4. ФОРМА ЗА ЛОЗИНКА */}
        <div className="w-full space-y-6">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className={`w-full pl-14 pr-6 py-5 rounded-3xl bg-white/5 border-2 ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-white/20 focus:outline-none focus:border-cyan-500 transition-all text-center tracking-widest text-lg font-bold`}
                placeholder="Внесете лозинка"
                autoFocus
              />
            </div>

            {error && (
              <div className="flex items-center justify-center gap-2 text-red-400 text-xs font-black uppercase tracking-widest animate-bounce">
                <AlertCircle size={14} />
                <span>Грешна лозинка!</span>
              </div>
            )}

            {/* 5. КОПЧЕ ВЛЕЗИ */}
            <button type="submit" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-3xl shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)] transition-all transform active:scale-95 uppercase tracking-widest text-lg">
              ВЛЕЗИ
            </button>
          </form>
        </div>

        <div className="mt-16 opacity-30 text-center">
          <p className="text-white text-[9px] font-black uppercase tracking-[0.4em]">AQUA CODE PRO &copy; 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
