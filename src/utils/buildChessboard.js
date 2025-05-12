import { BOARD_SIZE, Color, COLUMNS, PieceColor } from "../constants/index.js";
import { organizePieces } from "./organizePieces.js";

export const buildChessboard = () => {
  const chessboard = document.createElement("div");
  chessboard.id = "chessboard";

  const boardMatrix = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));

  boardMatrix.forEach((row, rowIndex) => {
    row.forEach((_, columnIndex) => {
      const square = document.createElement("div");

      const isWhiteSquare = (rowIndex + columnIndex) % 2 === 0;
      const squareColor = isWhiteSquare
        ? Color[PieceColor.WHITE]
        : Color[PieceColor.BLACK];

      square.classList.add("square");
      square.style.backgroundColor = squareColor;
      square.id = COLUMNS[columnIndex].concat(BOARD_SIZE - rowIndex);

      chessboard.appendChild(square);
    });
  });

  document.body.appendChild(chessboard);
  organizePieces();
};
