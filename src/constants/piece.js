import { Bishop, King, Knight, Pawn, Queen, Rook } from "../entities/index.js";
import { PIECE_COLOR } from "./chessboard.js";

export const INITIAL_PIECES_POSITIONS = [
  {
    Piece: Bishop,
    color: PIECE_COLOR.WHITE,
    squares: ["C1", "F1"],
  },
  {
    Piece: King,
    color: PIECE_COLOR.WHITE,
    squares: ["E1"],
  },
  {
    Piece: Knight,
    color: PIECE_COLOR.WHITE,
    squares: ["B1", "G1"],
  },
  {
    Piece: Pawn,
    color: PIECE_COLOR.WHITE,
    squares: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
  },
  {
    Piece: Queen,
    color: PIECE_COLOR.WHITE,
    squares: ["D1"],
  },
  {
    Piece: Rook,
    color: PIECE_COLOR.WHITE,
    squares: ["A1", "H1"],
  },
  {
    Piece: Bishop,
    color: PIECE_COLOR.BLACK,
    squares: ["C8", "F8"],
  },
  {
    Piece: King,
    color: PIECE_COLOR.BLACK,
    squares: ["E8"],
  },
  {
    Piece: Knight,
    color: PIECE_COLOR.BLACK,
    squares: ["B8", "G8"],
  },
  {
    Piece: Pawn,
    color: PIECE_COLOR.BLACK,
    squares: ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
  },
  {
    Piece: Queen,
    color: PIECE_COLOR.BLACK,
    squares: ["D8"],
  },
  {
    Piece: Rook,
    color: PIECE_COLOR.BLACK,
    squares: ["A8", "H8"],
  },
];
