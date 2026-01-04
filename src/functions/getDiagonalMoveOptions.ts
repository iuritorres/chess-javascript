import { BOARD_SIZE, COLUMNS } from "../constants";
import { getSquarePiece } from "./getSquarePiece";

export const getDiagonalMoveOptions = ({ currentSquare, color }) => {
  const currentColumn = currentSquare.id[0];
  const currentRow = Number(currentSquare.id[1]);

  const topRows = [];
  const bottomRows = [];
  const leftColumns = [];
  const rightColumns = [];

  const topLeftSquareIds = [];
  const topRightSquareIds = [];
  const bottomLeftSquareIds = [];
  const bottomRightSquareIds = [];

  for (let row = currentRow + 1; row <= BOARD_SIZE; row++) {
    topRows.push(row);
  }

  for (let row = currentRow - 1; row > 0; row--) {
    bottomRows.push(row);
  }

  // Left Squares
  for (let column = COLUMNS.indexOf(currentColumn) - 1; column >= 0; column--) {
    leftColumns.push(COLUMNS[column]);
  }

  for (const column of leftColumns) {
    const columnIndex = leftColumns.indexOf(column);

    if (!topRows[columnIndex]) {
      break;
    }

    const squareId = column.concat(topRows[columnIndex]);
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        topLeftSquareIds.push(squareId);
      }

      break;
    }

    topLeftSquareIds.push(squareId);
  }

  for (const column of leftColumns) {
    const columnIndex = leftColumns.indexOf(column);

    if (!bottomRows[columnIndex]) {
      break;
    }

    const squareId = column.concat(bottomRows[columnIndex]);
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        topLeftSquareIds.push(squareId);
      }

      break;
    }

    bottomLeftSquareIds.push(squareId);
  }

  // Right Squares
  for (
    let column = COLUMNS.indexOf(currentColumn) + 1;
    column < BOARD_SIZE;
    column++
  ) {
    rightColumns.push(COLUMNS[column]);
  }

  for (const column of rightColumns) {
    const columnIndex = rightColumns.indexOf(column);

    if (!topRows[columnIndex]) {
      break;
    }

    const squareId = column.concat(topRows[columnIndex]);
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        topLeftSquareIds.push(squareId);
      }

      break;
    }

    topRightSquareIds.push(squareId);
  }

  for (const column of rightColumns) {
    const columnIndex = rightColumns.indexOf(column);

    if (!bottomRows[columnIndex]) {
      break;
    }

    const squareId = column.concat(bottomRows[columnIndex]);
    const piece = getSquarePiece({ squareId });

    if (piece) {
      if (color !== piece.getAttribute("color")) {
        topLeftSquareIds.push(squareId);
      }

      break;
    }

    bottomRightSquareIds.push(squareId);
  }

  return [
    ...topLeftSquareIds,
    ...topRightSquareIds,
    ...bottomLeftSquareIds,
    ...bottomRightSquareIds,
  ];
};
