import { BOARD_SIZE, COLUMNS } from "../constants/index.js";
import { getSquarePiece } from "../functions/getSquarePiece.js";
import { ChessPiece } from "./ChessPiece.js";

export class Knight extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const currentColumn = currentSquare.id[0];
    const currentRow = Number(currentSquare.id[1]);

    const moveOptions = [];

    const topRow = currentRow < BOARD_SIZE ? currentRow + 1 : "";
    const bottomRow = currentRow > 1 ? currentRow - 1 : "";
    const leftColumn = COLUMNS[COLUMNS.indexOf(currentColumn) - 1] ?? "";
    const rightColumn = COLUMNS[COLUMNS.indexOf(currentColumn) + 1] ?? "";

    const twoColumnsBefore = COLUMNS[COLUMNS.indexOf(currentColumn) - 2] ?? "";
    const twoColumnsAfter = COLUMNS[COLUMNS.indexOf(currentColumn) + 2] ?? "";

    const topSquares = [
      leftColumn.concat(currentRow + 2),
      rightColumn.concat(currentRow + 2),
    ];

    const bottomSquares = [
      leftColumn.concat(currentRow - 2),
      rightColumn.concat(currentRow - 2),
    ];

    const leftSquares = [
      twoColumnsBefore.concat(topRow),
      twoColumnsBefore.concat(bottomRow),
    ];

    const rightSquares = [
      twoColumnsAfter.concat(topRow),
      twoColumnsAfter.concat(bottomRow),
    ];

    [...topSquares, ...bottomSquares, ...leftSquares, ...rightSquares].forEach(
      (squareId) => {
        const isValidSquareId = squareId.length === 2 && isNaN(squareId);
        const isValidRow = squareId[1] >= 1 && squareId[1] <= 8;

        if (!isValidSquareId || !isValidRow) {
          return;
        }

        const piece = getSquarePiece({ squareId });

        if (piece && this.color === piece.getAttribute("color")) {
          return;
        }

        moveOptions.push(squareId);
      }
    );

    return moveOptions;
  }
}
