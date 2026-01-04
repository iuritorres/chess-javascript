import { getDiagonalMoveOptions } from "../functions/getDiagonalMoveOptions";
import { getStraightMoveOptions } from "../functions/getStraightMoveOptions";
import { ChessPiece } from "./ChessPiece";

export class Queen extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const canMoveTo = [
      ...getStraightMoveOptions({
        currentSquare,
        color: this.color,
      }),
      ...getDiagonalMoveOptions({
        currentSquare,
        color: this.color,
      }),
    ];

    return canMoveTo;
  }
}
