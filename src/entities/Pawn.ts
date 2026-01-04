import { COLUMNS } from "../constants/chessboard";
import { PieceColor } from "../enums/PieceColor";
import { getSquarePiece } from "../functions/getSquarePiece";
import { ChessPiece } from "./ChessPiece";

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

    const direction = this.color === PieceColor.WHITE ? 1 : -1;

    const firstSquareId = squareColumn.concat(squareRow + 1 * direction);

    const isValidSquareId = firstSquareId.length === 2 && isNaN(firstSquareId);
    const isValidRow = firstSquareId[1] >= 1 && firstSquareId[1] <= 8;

    if (!isValidSquareId || !isValidRow) {
      return [];
    }

    const firstSquarePiece = getSquarePiece({ squareId: firstSquareId });

    if (!firstSquarePiece) {
      canMoveTo.push(firstSquareId);

      const secondSquareId = squareColumn.concat(squareRow + 2 * direction);
      const secondSquarePiece = getSquarePiece({ squareId: secondSquareId });

      // bug
      if (!this.hasMoved && !secondSquarePiece) {
        console.log({ hasMoved: this.hasMoved, secondSquarePiece });

        canMoveTo.push(secondSquareId);
      }
    }

    const leftColumn = COLUMNS[COLUMNS.indexOf(squareColumn) - 1];
    const rightColumn = COLUMNS[COLUMNS.indexOf(squareColumn) + 1];

    if (leftColumn) {
      const topLeftSquareId = leftColumn.concat(
        String(squareRow + 1 * direction)
      );
      const piece = getSquarePiece({ squareId: topLeftSquareId });

      if (piece && this.color !== piece.getAttribute("color")) {
        canMoveTo.push(topLeftSquareId);
      }
    }

    if (rightColumn) {
      const topRightSquareId = rightColumn.concat(
        String(squareRow + 1 * direction)
      );
      const piece = getSquarePiece({ squareId: topRightSquareId });

      if (piece && this.color !== piece.getAttribute("color")) {
        canMoveTo.push(topRightSquareId);
      }
    }

    return canMoveTo;
  }
}
