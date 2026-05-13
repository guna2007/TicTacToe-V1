import React from 'react';

interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
    Draws: number;
  };
  activePlayer: 'X' | 'O';
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, activePlayer }) => {
  return (
    <div className="flex justify-between w-full max-w-[400px] mx-auto mb-8 gap-4">
      <div className={`flex-1 p-3 rounded-lg border transition-all duration-300 ${activePlayer === 'X' ? 'bg-indigo-950/30 border-indigo-500/50 shadow-[0_0_10px_rgba(79,70,229,0.2)]' : 'bg-neutral-900 border-neutral-800'}`}>
        <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1 font-semibold">Player (X)</div>
        <div className="text-2xl font-bold text-indigo-400">{scores.X}</div>
      </div>
      
      <div className="flex-1 p-3 rounded-lg bg-neutral-900 border border-neutral-800">
        <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1 font-semibold">Draws</div>
        <div className="text-2xl font-bold text-neutral-300">{scores.Draws}</div>
      </div>

      <div className={`flex-1 p-3 rounded-lg border transition-all duration-300 ${activePlayer === 'O' ? 'bg-rose-950/30 border-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.2)]' : 'bg-neutral-900 border-neutral-800'}`}>
        <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1 font-semibold">AI (O)</div>
        <div className="text-2xl font-bold text-rose-400">{scores.O}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
