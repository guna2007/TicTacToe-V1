'use client';

import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
import ScoreBoard from '@/components/ScoreBoard';
import ControlPanel from '@/components/ControlPanel';
import { GameState, Player } from '@/types/game';
import { calculateWinner, isDraw, createInitialBoard } from '@/lib/gameUtils';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    board: createInitialBoard(),
    isXNext: true,
    winner: null,
    winningLine: null,
    scores: {
      X: 0,
      O: 0,
      Draws: 0,
    },
  });

  const handleSquareClick = useCallback((index: number) => {
    setGameState((prev) => {
      if (prev.board[index] || prev.winner) return prev;

      const currentPlayer: Player = prev.isXNext ? 'X' : 'O';
      const newBoard = [...prev.board];
      newBoard[index] = currentPlayer;

      const { winner, line } = calculateWinner(newBoard);
      const draw = isDraw(newBoard, !!winner);

      if (winner) {
        return {
          ...prev,
          board: newBoard,
          winner,
          winningLine: line,
          scores: {
            ...prev.scores,
            [winner]: prev.scores[winner] + 1,
          },
        };
      } else if (draw) {
        return {
          ...prev,
          board: newBoard,
          winner: 'Draw' as const,
          scores: {
            ...prev.scores,
            Draws: prev.scores.Draws + 1,
          },
        };
      } else {
        return {
          ...prev,
          board: newBoard,
          isXNext: !prev.isXNext,
        };
      }
    });
  }, []);

  const handleRestart = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      board: createInitialBoard(),
      isXNext: true, // X always starts or we could alternate
      winner: null,
      winningLine: null,
    }));
  }, []);

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
          winningLine={gameState.winningLine}
          disabled={!!gameState.winner}
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
