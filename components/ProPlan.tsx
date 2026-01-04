
import React, { useState } from 'react';
import { WEEKLY_PLAN_DATA, MONTHLY_PLAN_DATA } from '../constants';
import { CheckCircle2, Activity, CalendarDays, Calendar, Clock, Star, Info, ChevronRight, ChevronDown } from 'lucide-react';
import { PlanDay } from '../types';

const ProPlan: React.FC = () => {
  const [view, setView] = useState<'weekly' | 'monthly'>('weekly');
  const [activeMonthWeek, setActiveMonthWeek] = useState(0);

  const renderExerciseTable = (items: any[]) => (
    <div className="w-full overflow-hidden border border-gray-100 dark:border-white/5 rounded-2xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-white/5">
            <th className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">ВЕЖБА</th>
            <th className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">ВРЕМЕ / СЕРИИ</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="border-t border-gray-100 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors flex flex-col md:table-row">
              <td className="px-4 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 md:w-2/3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] shrink-0"></div>
                  {item.name}
                </div>
              </td>
              <td className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                {item.detail} ({item.timeMinutes} мин)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-12 px-4">
      {/* HEADER SECTION */}
      <div className="bg-slate-900 dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/5">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <Star size={18} className="text-cyan-500 fill-cyan-500" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Elite Performance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase italic">
            Тренинг Системи
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Професионален систем за напредок. Следете ги плановите развиени за максимална издржливост и моќ во вода.
          </p>
          
          <div className="flex gap-4 mt-12">
            <button 
              onClick={() => setView('weekly')}
              className={`px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all flex items-center gap-3 ${
                view === 'weekly' 
                ? 'bg-cyan-600 text-white shadow-xl scale-105' 
                : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/5'
              }`}
            >
              <Calendar size={18} /> Неделен План
            </button>
            <button 
              onClick={() => setView('monthly')}
              className={`px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all flex items-center gap-3 ${
                view === 'monthly' 
                ? 'bg-cyan-600 text-white shadow-xl scale-105' 
                : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/5'
              }`}
            >
              <CalendarDays size={18} /> Месечен План
            </button>
          </div>
        </div>
        <Activity className="absolute right-[-10%] bottom-[-10%] opacity-[0.03] text-cyan-500 pointer-events-none" size={400} />
      </div>

      {/* WEEKLY VIEW */}
      {view === 'weekly' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {(Object.entries(WEEKLY_PLAN_DATA) as [string, PlanDay][]).map(([day, data], idx) => (
            <div 
              key={day} 
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-gray-100 dark:border-white/5 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">{day}</h3>
                <div className={`p-2 rounded-xl ${data.type === 'water' ? 'bg-cyan-500/10 text-cyan-500' : data.type === 'dry' ? 'bg-orange-500/10 text-orange-500' : 'bg-slate-500/10 text-slate-500'}`}>
                   {data.type === 'water' ? <Activity size={18} /> : data.type === 'dry' ? <Star size={18} /> : <Clock size={18} />}
                </div>
              </div>

              <div className="mb-4 space-y-1">
                <p className="text-[9px] font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-500">Фокус</p>
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-tight">{data.title}</h4>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl mb-6 border border-gray-100 dark:border-white/5">
                 <div className="flex items-center gap-2 mb-1">
                    <Info size={14} className="text-cyan-500" />
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">Цел</p>
                 </div>
                 <p className="text-xs font-bold text-slate-700 dark:text-slate-300 italic">{data.goal}</p>
              </div>

              <div className="flex items-center gap-2 mb-6 px-4 py-2 bg-indigo-500/5 rounded-xl self-start">
                  <Clock size={14} className="text-indigo-500" />
                  <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">ВКУПНО: 60 мин</span>
              </div>

              {data.type === 'rest' ? (
                <div className="flex-grow flex items-center justify-center py-10">
                   <p className="text-xs font-black uppercase tracking-widest text-slate-400">Активен одмор</p>
                </div>
              ) : (
                renderExerciseTable(data.items)
              )}
            </div>
          ))}
        </div>
      ) : (
        /* MONTHLY VIEW */
        <div className="space-y-8 animate-slide-up">
           <div className="flex flex-wrap gap-3 justify-center">
              {MONTHLY_PLAN_DATA.map((week, idx) => (
                 <button
                    key={idx}
                    onClick={() => setActiveMonthWeek(idx)}
                    className={`px-8 py-3.5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${
                       activeMonthWeek === idx
                       ? 'bg-indigo-600 text-white shadow-xl scale-105'
                       : 'bg-white dark:bg-slate-900 text-slate-400 border border-gray-100 dark:border-white/5'
                    }`}
                 >
                    Недела {week.week}
                 </button>
              ))}
           </div>

           {/* MONTHLY SUMMARY CARD */}
           <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-white/5 p-10 md:p-14 overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                 <div className="space-y-2">
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em]">Активна Фаза</span>
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tighter italic">
                       {MONTHLY_PLAN_DATA[activeMonthWeek].phase}
                    </h3>
                 </div>
                 <div className="px-6 py-3 bg-indigo-500/10 rounded-2xl text-indigo-500 font-black text-[10px] uppercase tracking-widest border border-indigo-500/10">
                    Интензитет: {MONTHLY_PLAN_DATA[activeMonthWeek].intensity}
                 </div>
              </div>
              
              <p className="text-slate-500 dark:text-slate-400 text-xl font-medium italic mb-10 max-w-3xl leading-relaxed">
                 {MONTHLY_PLAN_DATA[activeMonthWeek].goal}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 {MONTHLY_PLAN_DATA[activeMonthWeek].focus.map((item, i) => (
                    <div key={i} className="flex items-center gap-5 bg-slate-50 dark:bg-white/5 p-6 rounded-[2rem] border border-gray-50 dark:border-white/5 group hover:bg-indigo-500/5 transition-all">
                       <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-all"></div>
                       <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">{item}</span>
                    </div>
                 ))}
              </div>
              <Activity className="absolute right-[-5%] bottom-[-5%] opacity-[0.02] text-indigo-500 pointer-events-none" size={300} />
           </div>

           {/* FULL WEEK LIST IN MONTHLY VIEW */}
           <div className="space-y-6">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white px-4">Детален преглед на неделата</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(MONTHLY_PLAN_DATA[activeMonthWeek].schedule).map(([day, data]) => (
                  <div key={day} className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-gray-100 dark:border-white/5 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-lg font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">{day}</h5>
                      <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-lg ${data.type === 'water' ? 'bg-cyan-500/10 text-cyan-500' : data.type === 'dry' ? 'bg-orange-500/10 text-orange-500' : 'bg-slate-500/10 text-slate-500'}`}>
                        {data.type}
                      </span>
                    </div>
                    {data.type !== 'rest' ? renderExerciseTable(data.items) : <p className="text-xs text-slate-400 font-bold uppercase py-4">Одмор и регенерација</p>}
                  </div>
                ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ProPlan;
