import { ChessPiece } from "./ChessPiece.js";

export class Queen extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions() {}
}
