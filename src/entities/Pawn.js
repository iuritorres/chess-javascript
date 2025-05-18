import { COLUMNS, PieceColor } from "../constants/chessboard.js";
import { getSquarePiece } from "../functions/getSquarePiece.js";
import { ChessPiece } from "./ChessPiece.js";

export class Pawn extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const squareColumn = currentSquare.id[0];
    const squareRow = Number(currentSquare.id[1]);
    const canMoveTo = [];

    const direction = this.color === PieceColor.BLACK ? 1 : -1;

    const firstSquareId = squareColumn.concat(squareRow + 1 * direction);
    const firstSquarePiece = getSquarePiece({ squareId: firstSquareId });

    if (!firstSquarePiece) {
      canMoveTo.push(firstSquareId);

      const secondSquareId = squareColumn.concat(squareRow + 2 * direction);
      const secondSquarePiece = getSquarePiece({ squareId: secondSquareId });

      if (!this.hasMoved && !secondSquarePiece) {
        canMoveTo.push(secondSquareId);
      }
    }

    const leftColumn = COLUMNS[COLUMNS.indexOf(squareColumn) - 1];
    const rightColumn = COLUMNS[COLUMNS.indexOf(squareColumn) + 1];

    if (leftColumn) {
      const topLeftSquareId = leftColumn.concat(squareRow + 1 * direction);
      const piece = getSquarePiece({ squareId: topLeftSquareId });

      if (piece && this.color !== piece.getAttribute("color")) {
        canMoveTo.push(topLeftSquareId);
      }
    }

    if (rightColumn) {
      const topRightSquareId = rightColumn.concat(squareRow + 1 * direction);
      const piece = getSquarePiece({ squareId: topRightSquareId });

      if (piece && this.color !== piece.getAttribute("color")) {
        canMoveTo.push(topRightSquareId);
      }
    }

    return canMoveTo;
  }
}
