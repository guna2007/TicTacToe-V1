import React from 'react';
import { SquareValue } from '@/types/game';

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  disabled?: boolean;
  isWinningSquare?: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, disabled, isWinningSquare }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || !!value}
      className={`
        w-full aspect-square flex items-center justify-center text-4xl font-bold
        rounded-lg transition-all duration-200
        ${!value && !disabled ? 'hover:bg-neutral-800 cursor-pointer' : 'cursor-default'}
        ${isWinningSquare ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]' : 'bg-neutral-900 text-neutral-200 border border-neutral-800'}
        ${value === 'X' ? 'text-indigo-400' : value === 'O' ? 'text-rose-400' : ''}
      `}
      aria-label={value ? `Square occupied by ${value}` : 'Empty square'}
    >
      <span className="transform transition-transform duration-200 scale-110">
        {value}
      </span>
    </button>
  );
};

export default Square;
