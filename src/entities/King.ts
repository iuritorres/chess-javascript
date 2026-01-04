import { BOARD_SIZE, COLUMNS } from "../constants/chessboard";
import { getSquarePiece } from "../functions/getSquarePiece";
import { ChessPiece } from "./ChessPiece";

export class King extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  getMoveOptions({ currentSquare }) {
    const currentColumn = currentSquare.id[0];
    const currentRow = Number(currentSquare.id[1]);

    const moveOptions = [];

    const topRow = String(currentRow < BOARD_SIZE ? currentRow + 1 : "");
    const bottomRow = String(currentRow > 1 ? currentRow - 1 : "");
    const leftColumn = COLUMNS[COLUMNS.indexOf(currentColumn) - 1] ?? "";
    const rightColumn = COLUMNS[COLUMNS.indexOf(currentColumn) + 1] ?? "";

    const topSquare = currentColumn.concat(topRow);
    const bottomSquare = currentColumn.concat(bottomRow);
    const leftSquare = leftColumn.concat(String(currentRow));
    const rightSquare = rightColumn.concat(String(currentRow));

    const topLeftSquare = leftColumn.concat(topRow);
    const topRightSquare = rightColumn.concat(topRow);
    const bottomLeftSquare = leftColumn.concat(bottomRow);
    const bottomRightSquare = rightColumn.concat(bottomRow);

    const boundarySquares = [
      topSquare,
      bottomSquare,
      leftSquare,
      rightSquare,
      topLeftSquare,
      topRightSquare,
      bottomLeftSquare,
      bottomRightSquare,
    ];

    boundarySquares.forEach((squareId) => {
      if (squareId.length !== 2) {
        return;
      }

      const piece = getSquarePiece({ squareId });

      if (piece && this.color === piece.getAttribute("color")) {
        return;
      }

      moveOptions.push(squareId);
    });

    return moveOptions;
  }
}
