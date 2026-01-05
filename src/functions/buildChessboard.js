import { BOARD_SIZE, Color, COLUMNS, PIECE_COLOR } from "../constants/index.js";
import { setupPieces } from "./setupPieces.js";
import { setupSquareOnClickListener } from "./setupSquareOnClickListener.js";

export const buildChessboard = () => {
  const chessboard = document.createElement("div");
  chessboard.id = "chessboard";

  for (let rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex++) {
    for (let columnIndex = 0; columnIndex < BOARD_SIZE; columnIndex++) {
      const isWhiteSquare = (rowIndex + columnIndex) % 2 === 0;
      const squareColor = isWhiteSquare
        ? Color[PIECE_COLOR.WHITE]
        : Color[PIECE_COLOR.BLACK];

      const square = document.createElement("div");
      square.id = COLUMNS[columnIndex] + (BOARD_SIZE - rowIndex);
      square.classList.add("square");
      square.style.backgroundColor = squareColor;

      if (columnIndex === 0) {
        const squareIndexer = document.createElement("span");
        squareIndexer.innerText = BOARD_SIZE - rowIndex;
        squareIndexer.classList.add("line-indexer");

        square.appendChild(squareIndexer);
      }

      if (rowIndex === BOARD_SIZE - 1) {
        const squareIndexer = document.createElement("span");
        squareIndexer.innerText = COLUMNS[columnIndex].toLowerCase();
        squareIndexer.classList.add("column-indexer");

        square.appendChild(squareIndexer);
      }

      setupSquareOnClickListener({ square });
      chessboard.appendChild(square);
    }
  }

  document.body.appendChild(chessboard);
  setupPieces();
};
