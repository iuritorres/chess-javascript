import { BOARD_SIZE, Color, COLUMNS, PieceColor } from "../constants/index.js";
import { organizePieces } from "./organizePieces.js";
import { setupSquareOnLickListener } from "./setupSquareOnLickListener.js";

export const buildChessboard = () => {
  const chessboard = document.createElement("div");
  chessboard.id = "chessboard";

  const boardMatrix = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));

  boardMatrix.forEach((row, rowIndex) => {
    row.forEach((_, columnIndex) => {
      const isWhiteSquare = (rowIndex + columnIndex) % 2 === 0;
      const squareColor = isWhiteSquare
        ? Color[PieceColor.WHITE]
        : Color[PieceColor.BLACK];

      const square = document.createElement("div");
      square.id = COLUMNS[columnIndex].concat(BOARD_SIZE - rowIndex);
      square.classList.add("square");
      square.style.backgroundColor = squareColor;

      if (columnIndex === 0) {
        const squareIndexer = document.createElement("span");
        squareIndexer.innerText = BOARD_SIZE - rowIndex;
        squareIndexer.classList.add("line-indexer");

        square.appendChild(squareIndexer);
      }

      if (rowIndex === 7) {
        const squareIndexer = document.createElement("span");
        squareIndexer.innerText = COLUMNS[columnIndex].toLocaleLowerCase();
        squareIndexer.classList.add("column-indexer");

        square.appendChild(squareIndexer);
      }

      setupSquareOnLickListener({ square });
      chessboard.appendChild(square);
    });
  });

  document.body.appendChild(chessboard);
  organizePieces();
};
