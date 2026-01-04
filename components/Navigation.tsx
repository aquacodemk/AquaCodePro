
import React from 'react';
import { ClipboardList, Trophy, Calendar, BarChart2, Image, Mail, PenTool } from 'lucide-react';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  exercisesCount: number;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, exercisesCount }) => {
  const tabs: { id: TabType; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'planner', label: 'Планер', icon: <ClipboardList size={20} />, color: 'text-cyan-600 dark:text-cyan-400' },
    { id: 'tactics', label: 'Тактика', icon: <PenTool size={20} />, color: 'text-indigo-600 dark:text-indigo-400' },
    { id: 'pro-plan', label: 'Про План', icon: <Trophy size={20} />, color: 'text-yellow-600 dark:text-yellow-400' },
    { id: 'calendar', label: 'Календар', icon: <Calendar size={20} />, color: 'text-green-600 dark:text-green-400' },
    { id: 'stats', label: 'Статс', icon: <BarChart2 size={20} />, color: 'text-purple-600 dark:text-purple-400' },
    { id: 'gallery', label: 'Галерија', icon: <Image size={20} />, color: 'text-pink-600 dark:text-pink-400' },
    { id: 'contact', label: 'Контакт', icon: <Mail size={20} />, color: 'text-gray-600 dark:text-gray-400' },
  ];

  return (
    <nav className="sticky top-[112px] md:top-[128px] z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm overflow-visible">
      {/* MICRO QUOTE BAR */}
      <div className="bg-black py-1.5 px-4 overflow-hidden border-b border-white/5">
        <p className="text-[8px] md:text-[10px] font-black uppercase text-center text-white tracking-[0.25em] whitespace-nowrap md:whitespace-normal animate-fade-in">
          Нема комплицирана наука, туку практични вежби и лесни објаснувања — Владо Смилевски
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-2 overflow-x-auto custom-scrollbar">
        <div className="flex space-x-1 md:space-x-4 min-w-max p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-100 dark:bg-gray-700/50 shadow-inner scale-105'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'
              }`}
            >
              <div className={`${activeTab === tab.id ? tab.color : 'text-gray-400'} transition-colors`}>
                {tab.icon}
              </div>
              <span className={`font-black text-[10px] uppercase tracking-wider ${
                activeTab === tab.id ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 ml-1 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
