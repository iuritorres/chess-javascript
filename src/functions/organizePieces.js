import { InitialPiecesPositions } from "../constants/index.js";

export const organizePieces = () => {
  for (const pieceColor in InitialPiecesPositions) {
    for (const piece of InitialPiecesPositions[pieceColor]) {
      const { Class: Piece, squares } = piece;

      for (const square of squares) {
        new Piece({
          color: pieceColor,
          squareId: square,
        });
      }
    }
  }
};
