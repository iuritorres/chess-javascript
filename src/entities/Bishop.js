import { getDiagonalMoveOptions } from "../functions/getDiagonalMoveOptions.js";
import { ChessPiece } from "./ChessPiece.js";

export class Bishop extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const canMoveTo = getDiagonalMoveOptions({ currentSquare });
    return canMoveTo;
  }
}
