import { getDiagonalMoveOptions } from "../functions/getDiagonalMoveOptions.js";
import { getStraightMoveOptions } from "../functions/getStraightMoveOptions.js";
import { ChessPiece } from "./ChessPiece.js";

export class Queen extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare, color }) {
    const canMoveTo = [
      ...getStraightMoveOptions({ currentSquare, color }),
      ...getDiagonalMoveOptions({ currentSquare, color }),
    ];

    return canMoveTo;
  }
}
