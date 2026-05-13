import React from 'react';
import Square from './Square';
import { SquareValue } from '@/types/game';

interface GameBoardProps {
  board: SquareValue[];
  onSquareClick: (index: number) => void;
  disabled?: boolean;
  winningLine?: number[] | null;
}

const GameBoard: React.FC<GameBoardProps> = ({ board, onSquareClick, disabled, winningLine }) => {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-[400px] mx-auto p-4 bg-neutral-950 rounded-xl shadow-2xl border border-neutral-800">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          disabled={disabled}
          isWinningSquare={winningLine?.includes(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
