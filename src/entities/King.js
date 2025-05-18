import { ChessPiece } from "./ChessPiece.js";

export class King extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare, color }) {}
}
