import { Bishop, King, Knight, Pawn, Queen, Rook } from "../entities/";
import { PieceColor } from "../enums/PieceColor";

export const INITIAL_PIECES_POSITIONS = [
  {
    Piece: Bishop,
    color: PieceColor.WHITE,
    squares: ["C1", "F1"],
  },
  {
    Piece: King,
    color: PieceColor.WHITE,
    squares: ["E1"],
  },
  {
    Piece: Knight,
    color: PieceColor.WHITE,
    squares: ["B1", "G1"],
  },
  {
    Piece: Pawn,
    color: PieceColor.WHITE,
    squares: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
  },
  {
    Piece: Queen,
    color: PieceColor.WHITE,
    squares: ["D1"],
  },
  {
    Piece: Rook,
    color: PieceColor.WHITE,
    squares: ["A1", "H1"],
  },
  {
    Piece: Bishop,
    color: PieceColor.BLACK,
    squares: ["C8", "F8"],
  },
  {
    Piece: King,
    color: PieceColor.BLACK,
    squares: ["E8"],
  },
  {
    Piece: Knight,
    color: PieceColor.BLACK,
    squares: ["B8", "G8"],
  },
  {
    Piece: Pawn,
    color: PieceColor.BLACK,
    squares: ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
  },
  {
    Piece: Queen,
    color: PieceColor.BLACK,
    squares: ["D8"],
  },
  {
    Piece: Rook,
    color: PieceColor.BLACK,
    squares: ["A8", "H8"],
  },
];
