export type Player = 'X' | 'O';
export type SquareValue = Player | null;

export interface GameState {
  board: SquareValue[];
  isXNext: boolean;
  winner: Player | 'Draw' | null;
  scores: {
    X: number;
    O: number;
    Draws: number;
  };
}
