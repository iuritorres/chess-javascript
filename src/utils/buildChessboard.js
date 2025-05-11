import { BOARD_SIZE, COLORS, PIECE_COLORS } from "../constants/index.js";
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
      square.classList.add("square");

      const isWhiteSquare = (rowIndex + columnIndex) % 2 === 0;
      const squareColor = isWhiteSquare
        ? COLORS[PIECE_COLORS.WHITE]
        : COLORS[PIECE_COLORS.BLACK];

      // placeholder
      if (rowIndex === 7 && columnIndex === 0) {
        square.id = "A1";
      }

      square.style.backgroundColor = squareColor;
      chessboard.appendChild(square);
    });
  });

  document.body.appendChild(chessboard);
  organizePieces();
};
