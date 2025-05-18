import { ChessPiece } from "./ChessPiece.js";

export class Knight extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const moveOptions = [];

    return moveOptions;
  }
}
