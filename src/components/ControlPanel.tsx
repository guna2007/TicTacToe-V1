import React from 'react';

interface ControlPanelProps {
  onRestart: () => void;
  statusMessage: string;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onRestart, statusMessage }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[400px] mx-auto mt-8 gap-6">
      <p aria-live="polite" className="text-xl font-medium text-neutral-300 h-8 flex items-center">
        {statusMessage}
      </p>
      
      <button
        onClick={onRestart}
        className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg shadow-indigo-900/20 active:scale-[0.98]"
      >
        Restart Game
      </button>
    </div>
  );
};

export default ControlPanel;
