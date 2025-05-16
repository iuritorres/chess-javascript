import { ChessPiece } from "./ChessPiece.js";

export class Bishop extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions() {}
}
