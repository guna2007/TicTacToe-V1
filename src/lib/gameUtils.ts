import { SquareValue, Player } from '@/types/game';

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(board: SquareValue[]): { winner: Player | null; line: number[] | null } {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}

export function isDraw(board: SquareValue[], hasWinner: boolean): boolean {
  return !hasWinner && board.every((square) => square !== null);
}

export function createInitialBoard(): SquareValue[] {
  return Array(9).fill(null);
}
