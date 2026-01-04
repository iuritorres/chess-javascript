import { BOARD_SIZE, COLOR, COLUMNS } from "../constants";
import { PieceColor } from "../enums/PieceColor";
import { setupPieces } from "./setupPieces";
import { setupSquareOnClickListener } from "./setupSquareOnClickListener";

export const buildChessboard = () => {
  const chessboard = document.createElement("div");
  chessboard.id = "chessboard";

  for (let rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex++) {
    for (let columnIndex = 0; columnIndex < BOARD_SIZE; columnIndex++) {
      const isWhiteSquare = (rowIndex + columnIndex) % 2 === 0;
      const squareColor = isWhiteSquare
        ? COLOR[PieceColor.WHITE]
        : COLOR[PieceColor.BLACK];

      const square = document.createElement("div");
      square.id = COLUMNS[columnIndex] + (BOARD_SIZE - rowIndex);
      square.classList.add("square");
      square.style.backgroundColor = squareColor;

      if (columnIndex === 0) {
        const squareIndexer = document.createElement("span");
        squareIndexer.innerText = (BOARD_SIZE - rowIndex).toString();
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
