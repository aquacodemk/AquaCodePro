
import React, { useState } from 'react';
import { Lock, AlertCircle } from 'lucide-react';

interface AuthProps {
  onAuthenticated: () => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validPasswords = ['Vlado', 'vaterpolo', '123456'];
    if (validPasswords.includes(password) || validPasswords.includes(password.toLowerCase())) {
      onAuthenticated();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 px-6 overflow-hidden">
      {/* Enhanced Pulsing Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.2)_0%,transparent_60%)] animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        {/* 1. ЛОГО ГОРЕ */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2.5rem] p-1 shadow-2xl mb-8 border-4 border-cyan-500/20 overflow-hidden transform hover:scale-105 transition-transform duration-500">
          <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-[2.2rem]" />
        </div>
        
        {/* 2. AQUA CODE (Bold, Non-italic) */}
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-2 not-italic">AQUA CODE</h1>
        
        {/* 3. ватерполо тренинг (Bold, Non-italic) */}
        <p className="text-cyan-400 font-black text-lg md:text-xl tracking-[0.2em] uppercase mb-12 not-italic">ватерполо тренинг</p>

        {/* 4. Form Area */}
        <div className="w-full bg-white/5 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/10 shadow-2xl animate-fade-in">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-500 transition-colors" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className={`w-full pl-14 pr-6 py-5 rounded-3xl bg-black/40 border-2 ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-center tracking-widest text-lg font-bold`}
                placeholder="Лозинка"
                autoFocus
              />
            </div>

            {error && (
              <div className="flex items-center justify-center gap-2 text-red-400 text-xs font-black uppercase tracking-widest animate-bounce">
                <AlertCircle size={14} />
                <span>Грешна лозинка!</span>
              </div>
            )}

            {/* 5. ВЛЕЗИ Button */}
            <button type="submit" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-3xl shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-lg">
              ВЛЕЗИ
            </button>
          </form>
        </div>
        
        <div className="mt-16 opacity-30">
          <p className="text-white text-[9px] font-black uppercase tracking-[0.4em]">Vlado Smilevski &copy; 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
