'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
import ScoreBoard from '@/components/ScoreBoard';
import ControlPanel from '@/components/ControlPanel';
import { GameState } from '@/types/game';

export default function Home() {
  // Mock state for UI development
  const [gameState] = useState<GameState>({
    board: Array(9).fill(null),
    isXNext: true,
    winner: null,
    scores: {
      X: 0,
      O: 0,
      Draws: 0,
    },
  });

  const handleSquareClick = () => {};

  const handleRestart = () => {};

  const statusMessage = gameState.winner 
    ? gameState.winner === 'Draw' ? "It's a Draw!" : `Winner: ${gameState.winner}`
    : `Next Player: ${gameState.isXNext ? 'X' : 'O'}`;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center px-4 pb-12">
      <Header />
      
      <div className="w-full max-w-md flex flex-col items-center mt-4">
        <ScoreBoard 
          scores={gameState.scores} 
          activePlayer={gameState.isXNext ? 'X' : 'O'} 
        />
        
        <GameBoard 
          board={gameState.board} 
          onSquareClick={handleSquareClick}
          winningLine={null}
        />
        
        <ControlPanel 
          onRestart={handleRestart} 
          statusMessage={statusMessage}
        />
      </div>

      <footer className="mt-auto pt-12 text-neutral-600 text-sm">
        Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
