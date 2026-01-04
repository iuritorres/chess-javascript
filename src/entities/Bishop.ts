import { getDiagonalMoveOptions } from "../functions/getDiagonalMoveOptions";
import { ChessPiece } from "./ChessPiece";

export class Bishop extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const canMoveTo = getDiagonalMoveOptions({
      currentSquare,
      color: this.color,
    });

    return canMoveTo;
  }
}
