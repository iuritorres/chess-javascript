import { getStraightMoveOptions } from "../functions/getStraightMoveOptions";
import { ChessPiece } from "./ChessPiece";

export class Rook extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const canMoveTo = getStraightMoveOptions({
      currentSquare,
      color: this.color,
    });

    return canMoveTo;
  }
}
