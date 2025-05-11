export class ChessPiece {
  color;
  imageSrc;
  squareId;
  hasMoved;

  constructor({ color, imageSrc, squareId }) {
    this.color = color;
    this.imageSrc = imageSrc;
    this.squareId = squareId;
    this.hasMoved = false;

    this.render();
  }

  render(squareId = "A1") {
    const square = document.getElementById(squareId);

    const piece = document.createElement("img");
    piece.classList.add("chess-piece");
    piece.src = this.imageSrc;

    square.appendChild(piece);
  }
}
