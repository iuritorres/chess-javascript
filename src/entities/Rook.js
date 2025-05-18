import { getStraightMoveOptions } from "../functions/getStraightMoveOptions.js";
import { ChessPiece } from "./ChessPiece.js";

export class Rook extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare, color }) {
    const canMoveTo = getStraightMoveOptions({ currentSquare, color });
    return canMoveTo;
  }
}
