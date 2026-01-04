
import React from 'react';
import { Mail, Phone, Clock, MapPin, Waves, Maximize, Navigation as NavIcon, MessageSquare, Trophy, Facebook, Instagram, Anchor, Footprints, Bus } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in pb-20">
      <div className="grid lg:grid-cols-12 gap-8">
        {/* AQUA CODE КОНТАКТ */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-12 shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden h-full">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10 uppercase italic tracking-tighter">
              AQUA CODE Контакт
            </h3>
            
            <div className="space-y-8">
              <a href="mailto:aquacodemk@gmail.com" className="flex items-center gap-6 group transition-all">
                <div className="p-5 bg-cyan-50 dark:bg-white/5 text-cyan-600 rounded-[1.5rem] group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Е-маил</p>
                  <p className="text-base font-black dark:text-white">aquacodemk@gmail.com</p>
                </div>
              </a>

              <a href="tel:+38972747171" className="flex items-center gap-6 group transition-all">
                <div className="p-5 bg-cyan-50 dark:bg-white/5 text-cyan-600 rounded-[1.5rem] group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Телефон</p>
                  <p className="text-base font-black dark:text-white">+389 72 747 171</p>
                </div>
              </a>

              <div className="pt-8 border-t border-gray-50 dark:border-white/5 flex gap-4">
                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-5 bg-[#1877F2] text-white rounded-3xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:-translate-y-1 transition-all">
                    <Facebook size={20} /> Facebook
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-3xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:-translate-y-1 transition-all">
                    <Instagram size={20} /> Instagram
                 </a>
              </div>
            </div>
            <Trophy className="absolute right-[-40px] bottom-[-40px] opacity-[0.03] text-cyan-600 rotate-12 pointer-events-none" size={240} />
          </div>
        </div>

        {/* ИНФОРМАЦИИ ЗА БАЗЕНОТ */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white shadow-2xl border border-white/5 h-full relative overflow-hidden">
            <h3 className="text-3xl font-black text-white mb-10 uppercase italic tracking-tighter">
              Градски Базен Куманово
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10 flex items-center gap-5">
                <Maximize size={24} className="text-cyan-400" />
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400/50 mb-1">Димензии</p>
                    <p className="text-sm font-black uppercase italic">25м x 30м</p>
                </div>
              </div>
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10 flex items-center gap-5">
                <Anchor size={24} className="text-cyan-400" />
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400/50 mb-1">Капацитет</p>
                    <p className="text-sm font-black uppercase italic">12 Траки</p>
                </div>
              </div>
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10 flex items-center gap-5">
                <Clock size={24} className="text-cyan-400" />
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400/50 mb-1">Работно време</p>
                    <p className="text-sm font-black uppercase italic">07:00 - 22:00</p>
                </div>
              </div>
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10 flex items-center gap-5">
                <MapPin size={24} className="text-cyan-400" />
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400/50 mb-1">Локација</p>
                    <p className="text-sm font-black uppercase italic">Куманово, МК</p>
                </div>
              </div>
              
              {/* НОВИ КАРТИЧКИ */}
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10 flex items-center gap-5 group hover:bg-white/10 transition-all">
                <Footprints size={24} className="text-cyan-400" />
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400/50 mb-1">Насока</p>
                    <p className="text-sm font-black uppercase italic">5 мин. од центар</p>
                </div>
              </div>
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10 flex items-center gap-5 group hover:bg-white/10 transition-all">
                <Bus size={24} className="text-cyan-400" />
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400/50 mb-1">Автобус</p>
                    <p className="text-sm font-black uppercase italic">Автобус бр. 4</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-3">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Gradski+Bazen+Kumanovo" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-4 bg-white/10 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white/20 transition-all">
                <NavIcon size={18} className="rotate-45" /> Мапа
              </a>
              <a href="https://docs.google.com/forms/d/1b4LAOHOyZMVdIQq_e8rMbvTu4jWboQT6nzYqXpE3bHM/edit" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-4 bg-cyan-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-cyan-500 transition-all">
                <MessageSquare size={18} /> Мислење
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ШКОЛА ЗА ЖИВОТ - ЦИТАТ НА ДНОТО (BLACK UPPERCASE) */}
      <div className="mt-20 pt-20 border-t border-gray-200 dark:border-white/5 text-center max-w-5xl mx-auto animate-slide-up">
        <Waves className="text-cyan-500 mx-auto mb-10 opacity-30" size={50} />
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm md:text-lg font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.3em] leading-relaxed max-w-4xl px-6 text-center">
            "Ватерполото не е само спорт, туку школа за живот. Те учи да бидеш силен, да соработуваш и никогаш да не се откажуваш."
          </p>
          <div className="flex items-center gap-4">
             <div className="w-16 h-px bg-cyan-500/20"></div>
             <p className="font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.4em] text-sm md:text-lg">
               Владо Смилевски
             </p>
             <div className="w-16 h-px bg-cyan-500/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
