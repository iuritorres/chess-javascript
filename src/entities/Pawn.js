import { ChessPiece } from "./ChessPiece.js";

export class Pawn extends ChessPiece {
  constructor({ color, squareId }) {
    super({
      color,
      squareId,
      imageSrc: "../../src/assets/images/pawn.png",
    });
  }

  move() {}

  canMove() {}
}
