import { Bishop, King, Knight, Pawn, Queen, Rook } from "../entities/index.js";
import { PieceColor } from "./chessboard.js";

export const InitialPiecesPositions = {
  [PieceColor.BLACK]: [
    {
      Class: Bishop,
      squares: ["C1", "F1"],
    },
    {
      Class: King,
      squares: ["E1"],
    },
    {
      Class: Knight,
      squares: ["B1", "G1"],
    },
    {
      Class: Pawn,
      squares: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
    },
    {
      Class: Queen,
      squares: ["D1"],
    },
    {
      Class: Rook,
      squares: ["A1"],
    },
  ],
  [PieceColor.WHITE]: [
    {
      Class: Bishop,
      squares: ["C8", "F8"],
    },
    {
      Class: King,
      squares: ["E8"],
    },
    {
      Class: Knight,
      squares: ["B8"],
    },
    {
      Class: Pawn,
      squares: ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7", "D5"],
    },
    {
      Class: Queen,
      squares: ["D8"],
    },
    {
      Class: Rook,
      squares: ["A8", "H8", "G5"],
    },
  ],
};
