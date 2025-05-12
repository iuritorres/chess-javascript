import { PieceColor } from "../constants/chessboard.js";
import { ChessPiece } from "./ChessPiece.js";

export class Pawn extends ChessPiece {
  constructor({ color, squareId }) {
    super({ color, squareId });
  }

  move() {}

  canMove() {}

  showMoveOptions({ currentSquare }) {
    const squareColumn = currentSquare.id[0];
    const squareRow = Number(currentSquare.id[1]);

    const canMoveTo = [
      `${squareColumn}${
        this.color === PieceColor.BLACK ? squareRow + 1 : squareRow - 1
      }`,
    ];

    if (!this.hasMoved) {
      canMoveTo.push(
        `${squareColumn}${
          this.color === PieceColor.BLACK ? squareRow + 2 : squareRow - 2
        }`
      );
    }

    for (const squareId of canMoveTo) {
      const square = document.getElementById(squareId);
      square.classList.add("can-move-to");
    }

    return true;
  }
}
