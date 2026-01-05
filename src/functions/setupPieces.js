import { INITIAL_PIECES_POSITIONS } from "../constants/index.js";

export const setupPieces = () => {
  for (const { Piece, color, squares } of INITIAL_PIECES_POSITIONS) {
    for (const squareId of squares) {
      new Piece({ color, squareId });
    }
  }
};
