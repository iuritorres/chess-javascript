import { ChessPiece } from "./ChessPiece.js";

export class Queen extends ChessPiece {
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
