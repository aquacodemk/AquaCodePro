
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, CheckCircle2, X, Waves } from 'lucide-react';
import { ScheduledWorkout } from '../types';

interface CalendarProps {
  scheduledWorkouts: ScheduledWorkout[];
}

const Calendar: React.FC<CalendarProps> = ({ scheduledWorkouts }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<ScheduledWorkout | null>(null);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  //Adjust for Monday start
  const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const monthNames = [
    "Јануари", "Февруари", "Март", "Април", "Мај", "Јуни",
    "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"
  ];

  const daysArr = ["Пон", "Вто", "Сре", "Чет", "Пет", "Саб", "Нед"];

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const calendarDays = [];

  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    calendarDays.push(i);
  }

  const getWorkoutsForDay = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return scheduledWorkouts.filter(w => w.date === dateStr);
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto pb-10">
      <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="p-6 md:p-8 bg-gradient-to-br from-cyan-600 to-indigo-700 text-white flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md shadow-inner">
              <CalendarIcon size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black italic uppercase tracking-tight">{monthNames[currentDate.getMonth()]}</h3>
              <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-[0.3em]">{currentDate.getFullYear()}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="p-2 hover:bg-white/20 rounded-xl transition-all"><ChevronLeft /></button>
            <button onClick={nextMonth} className="p-2 hover:bg-white/20 rounded-xl transition-all"><ChevronRight /></button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30">
          {daysArr.map(d => (
            <div key={d} className="py-4 text-center text-[10px] font-black uppercase text-gray-400 tracking-widest">
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, idx) => {
            if (day === null) return <div key={`empty-${idx}`} className="aspect-square bg-gray-50/20 dark:bg-gray-900/10 border-r border-b border-gray-100 dark:border-gray-700" />;
            
            const workouts = getWorkoutsForDay(day);
            const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();

            return (
              <div 
                key={day} 
                className={`aspect-square border-r border-b border-gray-100 dark:border-gray-700 p-1 md:p-2 relative group transition-all hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 ${isToday ? 'bg-cyan-50/30 dark:bg-cyan-900/10 shadow-inner' : ''}`}
              >
                <span className={`text-xs md:text-sm font-black ${isToday ? 'text-cyan-600 dark:text-cyan-400' : 'text-gray-400 dark:text-gray-500'}`}>
                  {day}
                </span>
                
                <div className="flex flex-col gap-1 mt-1 overflow-hidden">
                  {workouts.map(w => (
                    <button
                      key={w.id}
                      onClick={() => setSelectedWorkout(w)}
                      className="w-full text-[8px] md:text-[9px] truncate bg-cyan-600 dark:bg-cyan-500 text-white font-black px-1.5 py-1 rounded-lg shadow-sm hover:scale-105 transition-transform"
                    >
                      {w.name || 'Тренинг'}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      {selectedWorkout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-lg animate-fade-in">
          <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden border border-white/10">
            <div className="p-8 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl shadow-inner"><Waves size={24} /></div>
                <div>
                  <h4 className="text-2xl font-black italic uppercase tracking-tight">{selectedWorkout.name || 'Тренинг'}</h4>
                  <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mt-1">
                    <Clock size={12} /> {selectedWorkout.date}
                  </p>
                </div>
              </div>
              <button onClick={() => setSelectedWorkout(null)} className="p-3 hover:bg-white/20 rounded-2xl transition-all"><X size={24} /></button>
            </div>
            
            <div className="p-8 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Вежби за денешниот тренинг:</p>
              {selectedWorkout.exercises.map((ex, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600">
                  <span className="text-3xl bg-white dark:bg-gray-600 w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm">{ex.icon}</span>
                  <div className="flex-1">
                    <p className="font-black text-gray-800 dark:text-white text-base leading-tight">{ex.name}</p>
                    <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider mt-1">{ex.goal}</p>
                  </div>
                  <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                </div>
              ))}
            </div>

            <div className="p-8 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20">
               <button onClick={() => setSelectedWorkout(null)} className="w-full py-5 bg-cyan-600 text-white font-black rounded-2xl hover:bg-cyan-500 transition-all uppercase tracking-widest">
                  ЗАТВОРИ ПРЕГЛЕД
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
