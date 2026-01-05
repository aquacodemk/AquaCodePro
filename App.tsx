
import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Navigation from './components/Navigation';
import Planner from './components/Planner';
import ProPlan from './components/ProPlan';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import TacticsBoard from './components/TacticsBoard';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import { TabType, Exercise, RoutineItem, DailyStats, GalleryImage, ScheduledWorkout, SavedRoutine, TacticObject, DrawingPath, MovePath } from './types';
import { Moon, Sun, Trophy } from 'lucide-react';
import { EXERCISE_CATALOG } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('planner');
  const [darkMode, setDarkMode] = useState(true);
  const [logoError, setLogoError] = useState(false);

  const exercisesCount = EXERCISE_CATALOG.reduce((acc, cat) => acc + cat.items.length, 0);

  const [currentRoutine, setCurrentRoutine] = useState<RoutineItem[]>([]);
  const [savedRoutines, setSavedRoutines] = useState<SavedRoutine[]>([]);
  const [scheduledWorkouts, setScheduledWorkouts] = useState<ScheduledWorkout[]>([]);
  const [stats, setStats] = useState<DailyStats>({ total: 0, streak: 0, lastDate: null, level: 'Почетник', calories: 0 });
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [activityLog, setActivityLog] = useState<string[]>([]);
  
  const [tacticObjects, setTacticObjects] = useState<TacticObject[]>([]);
  const [tacticPencilPaths, setTacticPencilPaths] = useState<DrawingPath[]>([]);
  const [tacticMovePaths, setTacticMovePaths] = useState<Record<string, MovePath>>({});

  useEffect(() => {
    try {
        setSavedRoutines(JSON.parse(localStorage.getItem('aquacode-routines') || '[]'));
        setScheduledWorkouts(JSON.parse(localStorage.getItem('aquacode-scheduled') || '[]'));
        setStats(JSON.parse(localStorage.getItem('aquacode-stats') || JSON.stringify(stats)));
        setGalleryImages(JSON.parse(localStorage.getItem('aquacode-gallery') || '[]'));
        setActivityLog(JSON.parse(localStorage.getItem('aquacode-activity-log') || '[]'));
        setTacticObjects(JSON.parse(localStorage.getItem('aquacode-tactic-objects') || '[]'));
        setTacticPencilPaths(JSON.parse(localStorage.getItem('aquacode-tactic-pencil') || '[]'));
        setTacticMovePaths(JSON.parse(localStorage.getItem('aquacode-tactic-moves') || '{}'));
    } catch (e) { console.error(e); }

    const savedTheme = localStorage.getItem('aquacode-theme');
    if (savedTheme === 'light') {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
    setTimeout(() => setLoading(false), 800);
  }, []);

  useEffect(() => { localStorage.setItem('aquacode-routines', JSON.stringify(savedRoutines)); }, [savedRoutines]);
  useEffect(() => { localStorage.setItem('aquacode-scheduled', JSON.stringify(scheduledWorkouts)); }, [scheduledWorkouts]);
  useEffect(() => { localStorage.setItem('aquacode-stats', JSON.stringify(stats)); }, [stats]);
  useEffect(() => { localStorage.setItem('aquacode-gallery', JSON.stringify(galleryImages)); }, [galleryImages]);
  useEffect(() => { localStorage.setItem('aquacode-activity-log', JSON.stringify(activityLog)); }, [activityLog]);
  useEffect(() => { localStorage.setItem('aquacode-tactic-objects', JSON.stringify(tacticObjects)); }, [tacticObjects]);
  useEffect(() => { localStorage.setItem('aquacode-tactic-pencil', JSON.stringify(tacticPencilPaths)); }, [tacticPencilPaths]);
  useEffect(() => { localStorage.setItem('aquacode-tactic-moves', JSON.stringify(tacticMovePaths)); }, [tacticMovePaths]);

  const handleAuth = () => {
    setIsAuthenticated(true);
  };

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if(newMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('aquacode-theme', newMode ? 'dark' : 'light');
  };

  const addToRoutine = (exercise: Exercise) => {
    const newItem: RoutineItem = { ...exercise, addedAt: new Date().toISOString() + Math.random().toString(36).substring(2, 7) };
    setCurrentRoutine([...currentRoutine, newItem]);
  };

  if (!isAuthenticated) return <Auth onAuthenticated={handleAuth} />;
  
  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-cyan-600 font-black tracking-tighter uppercase italic animate-pulse">
        AQUA CODE PRO ВЧИТУВАЊЕ...
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pb-20 flex flex-col">
      <header className="sticky top-0 z-50 bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 text-white py-5 px-4 md:px-8 border-b border-white/5 shadow-2xl">
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-between items-center gap-6">
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden shrink-0 bg-white/10 flex items-center justify-center p-0.5">
                       {!logoError ? (
                         <img 
                            src="./logo.jpg" 
                            alt="Logo" 
                            className="w-full h-full object-cover rounded-[1.2rem]" 
                            onError={() => setLogoError(true)}
                         />
                       ) : (
                         <Trophy size={32} className="text-cyan-400" />
                       )}
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">AQUA CODE</h1>
                        <div className="space-y-0.5">
                          <p className="text-cyan-400 text-[10px] md:text-sm font-black uppercase tracking-widest">Вежбај • Играј • Победи</p>
                          <p className="text-white/60 text-[9px] md:text-xs font-black uppercase tracking-wider">
                            Без одмор - Без милост - <span className="text-orange-500 font-black">САМО ВАТЕРПОЛО</span>
                          </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <button onClick={toggleTheme} className="p-3 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all shadow-xl group">
                        {darkMode ? <Sun size={20} className="group-hover:rotate-45 transition-transform" /> : <Moon size={20} className="group-hover:-rotate-12 transition-transform" />}
                    </button>
                </div>
            </div>
         </div>
      </header>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} exercisesCount={exercisesCount} />
      <main className="max-w-7xl mx-auto p-4 md:p-6 flex-grow w-full mt-2">
          {activeTab === 'planner' && (
            <Planner 
              currentRoutine={currentRoutine} 
              addToRoutine={addToRoutine} 
              removeFromRoutine={(at) => setCurrentRoutine(currentRoutine.filter(i => i.addedAt !== at))} 
              saveRoutine={(n) => { setSavedRoutines([...savedRoutines, { id: Date.now(), name: n, exercises: currentRoutine, createdAt: new Date().toISOString(), completed: false }]); setCurrentRoutine([]); }} 
              scheduleWorkout={(d, n) => { setScheduledWorkouts([...scheduledWorkouts, { id: Date.now(), name: n, exercises: currentRoutine, date: d, createdAt: new Date().toISOString(), completed: false }]); setCurrentRoutine([]); }} 
              completeWorkout={() => { setStats({...stats, total: stats.total + 1}); setActivityLog([new Date().toISOString(), ...activityLog]); setCurrentRoutine([]); }} 
              savedRoutines={savedRoutines} 
            />
          )}
          {activeTab === 'tactics' && (
            <TacticsBoard 
              objects={tacticObjects} setObjects={setTacticObjects}
              pencilPaths={tacticPencilPaths} setPencilPaths={setTacticPencilPaths}
              movePaths={tacticMovePaths} setMovePaths={setTacticMovePaths}
              onSaveToGallery={(b, n) => setGalleryImages([{ id: Date.now(), data: b, name: n, timestamp: Date.now() }, ...galleryImages])} 
            />
          )}
          {activeTab === 'pro-plan' && <ProPlan />}
          {activeTab === 'stats' && <Stats stats={stats} activityLog={activityLog} resetStats={() => setStats({ total: 0, streak: 0, lastDate: null, level: 'Почетник', calories: 0 })} />}
          {activeTab === 'gallery' && <Gallery images={galleryImages} addImage={(b, n) => setGalleryImages([{ id: Date.now(), data: b, name: n, timestamp: Date.now() }, ...galleryImages])} removeImage={(id) => setGalleryImages(galleryImages.filter(i => i.id !== id))} />}
          {activeTab === 'calendar' && <Calendar scheduledWorkouts={scheduledWorkouts} />}
          {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  );
};

export default App;
