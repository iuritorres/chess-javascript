export class ChessPiece {
  color;
  imageSrc;
  squareId;
  pieceName;
  hasMoved;

  constructor({ color, squareId }) {
    const piecePrototype = Object.getPrototypeOf(this);
    const pieceName = piecePrototype.constructor.name.toLowerCase();

    this.color = color;
    this.squareId = squareId;
    this.imageSrc = `assets/images/${pieceName}-${color}.png`;
    this.pieceName = pieceName;
    this.hasMoved = false;

    this.render();
  }

  render() {
    const square = document.getElementById(this.squareId);

    const piece = document.createElement("img");
    piece.classList.add("piece");

    piece.src = this.imageSrc;
    piece.draggable = true;

    piece.onclick = (event) => {
      const clickedPiece = event.currentTarget;
      const allPieces = document.getElementsByClassName("piece");
      const allSquares = document.getElementsByClassName("square");

      if (clickedPiece.classList.contains("selected")) {
        clickedPiece.classList.remove("selected");

        for (const square of allSquares) {
          if (square.classList.contains("can-move-to")) {
            square.classList.remove("can-move-to");
          }
        }

        return;
      }

      for (const piece of allPieces) {
        if (piece.classList.contains("selected")) {
          return;
        }
      }

      clickedPiece.classList.add("selected");

      const moveOptions = this.getMoveOptions({ currentSquare: square });

      for (const squareId of moveOptions) {
        const square = document.getElementById(squareId);
        square.classList.add("can-move-to");
      }
    };

    this.setupDragListeners({ piece });

    square.appendChild(piece);
  }

  setupDragListeners({ piece }) {
    piece.ondragstart = (event) => {
      const clickedPiece = event.currentTarget;

      clickedPiece.classList.add("dragging");
    };

    piece.ondragend = (event) => {
      const clickedPiece = event.currentTarget;

      clickedPiece.classList.remove("dragging");
    };
  }

  canMove() {}
  getMoveOptions() {}
}
