import { ChessPiece } from "./ChessPiece.js";

export class Rook extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}
}
