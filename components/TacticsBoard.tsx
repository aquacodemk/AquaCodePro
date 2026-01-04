
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Save, RefreshCw, PenTool, MousePointer2, Eraser, Info, Users, LayoutDashboard, ShieldAlert } from 'lucide-react';
import { TacticObject, DrawingPath, MovePath, Point } from '../types';

interface TacticsBoardProps {
  objects: TacticObject[];
  setObjects: React.Dispatch<React.SetStateAction<TacticObject[]>>;
  pencilPaths: DrawingPath[];
  setPencilPaths: React.Dispatch<React.SetStateAction<DrawingPath[]>>;
  movePaths: Record<string, MovePath>;
  setMovePaths: React.Dispatch<React.SetStateAction<Record<string, MovePath>>>;
  onSaveToGallery: (base64: string, name: string) => void;
}

type Tool = 'pen' | 'eraser' | 'white-team' | 'blue-team' | 'red-cap' | 'ball' | 'move';

const TacticsBoard: React.FC<TacticsBoardProps> = ({ 
  objects, setObjects, 
  pencilPaths, setPencilPaths, 
  movePaths, setMovePaths, 
  onSaveToGallery 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [activeTool, setActiveTool] = useState<Tool>('white-team');
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<Point[] | null>(null);
  const [draggedObjectId, setDraggedObjectId] = useState<string | null>(null);

  const PLAYER_LIMIT = 7;
  const PLAYER_RADIUS = 15;

  const drawPoolBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Базен - сина боја
    ctx.fillStyle = '#0e7490'; 
    ctx.fillRect(0, 0, width, height);
    
    // Линии на базен
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    
    // Централна линија (бела испрекината)
    ctx.setLineDash([10, 5]);
    ctx.beginPath(); ctx.moveTo(0, height / 2); ctx.lineTo(width, height / 2); ctx.stroke();
    
    // 2м линии (црвени)
    ctx.setLineDash([]);
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath(); ctx.moveTo(0, height * 0.15); ctx.lineTo(width, height * 0.15); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, height * 0.85); ctx.lineTo(width, height * 0.85); ctx.stroke();
    
    // 5м линии (жолти)
    ctx.strokeStyle = '#facc15';
    ctx.beginPath(); ctx.moveTo(0, height * 0.28); ctx.lineTo(width, height * 0.28); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, height * 0.72); ctx.lineTo(width, height * 0.72); ctx.stroke();

    // Голови
    ctx.fillStyle = 'white';
    const goalWidth = width * 0.35;
    ctx.fillRect((width - goalWidth) / 2, 0, goalWidth, 6);
    ctx.fillRect((width - goalWidth) / 2, height - 6, goalWidth, 6);
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPoolBackground(ctx, canvas.width, canvas.height);

    // Цртање на линиите од моливот
    pencilPaths.forEach(path => {
      if (path.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.moveTo(path.points[0].x, path.points[0].y);
      path.points.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.stroke();
    });

    if (currentPath && currentPath.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 3;
      ctx.moveTo(currentPath[0].x, currentPath[0].y);
      currentPath.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.stroke();
    }

    // Цртање на играчи и топка
    objects.forEach(obj => {
      const radius = obj.type === 'ball' ? 12 : PLAYER_RADIUS;
      ctx.beginPath();
      ctx.arc(obj.x, obj.y, radius, 0, 2 * Math.PI);
      
      let fillColor = 'white';
      let textColor = '#1d4ed8';
      let strokeColor = 'white';
      
      if (obj.type === 'ball') {
        fillColor = '#facc15';
        textColor = 'black';
        strokeColor = 'black';
      } else if (obj.type === 'red-cap') {
        fillColor = '#ef4444'; 
        textColor = 'white';
        strokeColor = 'white';
      } else if (obj.type === 'blue-cap') {
        fillColor = '#1d4ed8'; 
        textColor = 'white';
        strokeColor = 'white';
      } else {
        fillColor = 'white'; 
        textColor = '#1d4ed8';
        strokeColor = '#1d4ed8';
      }

      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = strokeColor;
      ctx.stroke();
      
      if (obj.number) {
        ctx.fillStyle = textColor;
        ctx.font = 'black 10px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(obj.number.toString(), obj.x, obj.y + 4);
      }
    });
  }, [objects, pencilPaths, currentPath]);

  useEffect(() => { render(); }, [render]);

  const handlePointerDown = (e: any) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const pos = { 
      x: (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left, 
      y: (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top 
    };
    
    const hitIndex = objects.findIndex(o => Math.sqrt((o.x - pos.x)**2 + (o.y - pos.y)**2) < 25);
    const hit = objects[hitIndex];

    if (activeTool === 'eraser') {
        if (hit) setObjects(prev => prev.filter(o => o.id !== hit.id));
        setPencilPaths(prev => prev.filter(p => !p.points.some(pt => Math.sqrt((pt.x - pos.x)**2 + (pt.y - pos.y)**2) < 20)));
        return;
    }

    if (hit) {
      setDraggedObjectId(hit.id);
    } else if (activeTool === 'pen') {
      setIsDrawing(true);
      setCurrentPath([pos]);
    } else if (['white-team', 'blue-team', 'red-cap'].includes(activeTool)) {
      const typeMap = { 'white-team': 'white-cap', 'blue-team': 'blue-cap', 'red-cap': 'red-cap' };
      const teamType = typeMap[activeTool as keyof typeof typeMap];
      
      const teamPlayers = objects.filter(o => o.type === teamType);
      if (teamPlayers.length >= PLAYER_LIMIT) return;

      let nextNum = activeTool === 'red-cap' ? 1 : -1;
      if (nextNum === -1) {
        const existingNums = teamPlayers.map(p => p.number);
        for (let i = 2; i <= 15; i++) {
            if (!existingNums.includes(i)) {
                nextNum = i;
                break;
            }
        }
      }
      
      setObjects(prev => [...prev, { id: Math.random().toString(), type: teamType as any, x: pos.x, y: pos.y, number: nextNum }]);
    } else if (activeTool === 'ball') {
        setObjects(prev => [...prev, { id: Math.random().toString(), type: 'ball', x: pos.x, y: pos.y }]);
    }
  };

  const handlePointerMove = (e: any) => {
    if (!isDrawing && !draggedObjectId) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const pos = { 
      x: (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left, 
      y: (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top 
    };

    if (draggedObjectId) {
      setObjects(prev => prev.map(o => o.id === draggedObjectId ? { ...o, x: pos.x, y: pos.y } : o));
    } else if (isDrawing) {
      setCurrentPath(prev => prev ? [...prev, pos] : [pos]);
    }
  };

  const handlePointerUp = () => {
    if (isDrawing && currentPath) {
      setPencilPaths(prev => [...prev, { id: Math.random().toString(), points: currentPath }]);
    }
    setIsDrawing(false);
    setCurrentPath(null);
    setDraggedObjectId(null);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const resize = () => {
      const w = containerRef.current!.clientWidth;
      const h = Math.min(w * 1.5, window.innerHeight * 0.7);
      canvas.width = w;
      canvas.height = h;
      render();
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [render]);

  return (
    <div className="max-w-4xl mx-auto space-y-4 animate-fade-in pb-10">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600">
                <LayoutDashboard size={20} />
             </div>
             <h2 className="text-xl font-black dark:text-white uppercase tracking-tighter italic">Tactics Board</h2>
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button 
                onClick={() => { if(window.confirm('Чистиш сè?')) { setObjects([]); setPencilPaths([]); setMovePaths({}); } }} 
                className="p-3 text-red-500 hover:bg-red-50 rounded-2xl transition-all"
            >
              <RefreshCw size={22} />
            </button>
            <button onClick={() => onSaveToGallery(canvasRef.current!.toDataURL(), 'Тактика')} className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl shadow-xl font-black uppercase text-xs tracking-widest hover:bg-indigo-500 transition-all">
              <Save size={18} /> Сочувај
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600">
          <button onClick={() => setActiveTool('move')} className={`p-4 rounded-2xl transition-all ${activeTool === 'move' ? 'bg-indigo-600 text-white shadow-xl scale-110' : 'text-gray-400 hover:bg-white dark:hover:bg-gray-600'}`}><MousePointer2 size={24} /></button>
          <button onClick={() => setActiveTool('pen')} className={`p-4 rounded-2xl transition-all ${activeTool === 'pen' ? 'bg-indigo-600 text-white shadow-xl scale-110' : 'text-gray-400 hover:bg-white dark:hover:bg-gray-600'}`}><PenTool size={24} /></button>
          <button onClick={() => setActiveTool('eraser')} className={`p-4 rounded-2xl transition-all ${activeTool === 'eraser' ? 'bg-indigo-600 text-white shadow-xl scale-110' : 'text-gray-400 hover:bg-white dark:hover:bg-gray-600'}`}><Eraser size={24} /></button>
          <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 self-center mx-2" />
          <button onClick={() => setActiveTool('white-team')} className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTool === 'white-team' ? 'bg-white text-indigo-900 shadow-md ring-2 ring-indigo-500' : 'text-gray-400'}`}>
            <div className="w-4 h-4 rounded-full bg-white border-2 border-indigo-500" />
            <span className="text-[10px] font-black uppercase tracking-wider">Бели</span>
          </button>
          <button onClick={() => setActiveTool('blue-team')} className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTool === 'blue-team' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400'}`}>
            <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
            <span className="text-[10px] font-black uppercase tracking-wider">Сини</span>
          </button>
          <button onClick={() => setActiveTool('red-cap')} className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTool === 'red-cap' ? 'bg-red-500 text-white shadow-md' : 'text-gray-400'}`}>
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white" />
            <span className="text-[10px] font-black uppercase tracking-wider">Голман</span>
          </button>
          <button onClick={() => setActiveTool('ball')} className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTool === 'ball' ? 'bg-yellow-400 text-black shadow-md' : 'text-gray-400'}`}>
            <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-black" />
            <span className="text-[10px] font-black uppercase tracking-wider">Топка</span>
          </button>
        </div>

        <div ref={containerRef} className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-cyan-900 touch-none border-8 border-cyan-800">
          <canvas 
            ref={canvasRef} 
            onMouseDown={handlePointerDown} onMouseMove={handlePointerMove} onMouseUp={handlePointerUp} 
            onTouchStart={handlePointerDown} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp} 
            className="block w-full cursor-crosshair" 
          />
        </div>

        <div className="mt-8 p-5 bg-indigo-50 dark:bg-indigo-900/30 rounded-3xl text-[10px] text-indigo-700 dark:text-indigo-300 flex gap-4 border border-indigo-100 dark:border-indigo-800 items-center">
          <ShieldAlert size={24} className="shrink-0 text-indigo-500" />
          <p className="font-bold leading-relaxed">
            <b>ТАКТИЧКИ СОВЕТ:</b> Користете го моливот за да ги нацртате патеките на пливање. Црвената капа секогаш го носи бројот 1 (Голман).
          </p>
        </div>
      </div>
    </div>
  );
};

export default TacticsBoard;
