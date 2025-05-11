import { PIECE_COLORS } from "../constants/index.js";
import { Pawn } from "../entities/index.js";

export const organizePieces = () => {
  const pawn = new Pawn({
    color: PIECE_COLORS.WHITE,
    squareId: "A1",
  });
};
