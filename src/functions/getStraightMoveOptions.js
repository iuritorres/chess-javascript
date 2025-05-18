import { BOARD_SIZE, COLUMNS } from "../constants/index.js";
import { getSquarePiece } from "./getSquarePiece.js";

export const getStraightMoveOptions = ({ currentSquare, color }) => {
  const currentColumn = currentSquare.id[0];
  const currentRow = Number(currentSquare.id[1]);

  const moveOptions = [];

  // Vertical
  for (let line = currentRow + 1; line <= BOARD_SIZE; line++) {
    const squareId = currentColumn + line;
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        moveOptions.push(squareId);
      }

      break;
    }

    moveOptions.push(squareId);
  }

  for (let line = currentRow - 1; line > 0; line--) {
    const squareId = currentColumn + line;
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        moveOptions.push(squareId);
      }

      break;
    }

    moveOptions.push(squareId);
  }

  // Horizontal
  for (let column = COLUMNS.indexOf(currentColumn) - 1; column >= 0; column--) {
    const squareId = COLUMNS[column] + currentRow;
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        moveOptions.push(squareId);
      }

      break;
    }

    moveOptions.push(squareId);
  }

  for (
    let column = COLUMNS.indexOf(currentColumn) + 1;
    column < BOARD_SIZE;
    column++
  ) {
    const squareId = COLUMNS[column] + currentRow;
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        moveOptions.push(squareId);
      }

      break;
    }

    moveOptions.push(squareId);
  }

  return moveOptions;
};
