export class ChessPiece {
  color;
  imageSrc;
  squareId;
  pieceName;
  hasMoved;

  constructor({ color, squareId }) {
    const pieceName =
      Object.getPrototypeOf(this).constructor.name.toLowerCase();

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
    piece.draggable = true;
    piece.src = this.imageSrc;
    piece.classList.add("piece");
    piece.setAttribute("color", this.color);

    this.setupOnClick({ piece, square });
    this.setupDragListeners({ piece });

    square.appendChild(piece);
  }

  setupOnClick({ piece, square }) {
    piece.onclick = (event) => {
      const clickedPiece = event.currentTarget;
      const isSelected = clickedPiece.classList.contains("selected");
      const moveOptions = this.getMoveOptions({ currentSquare: square }).map(
        (squareId) => document.getElementById(squareId)
      );

      if (!isSelected) {
        const allPieces = document.getElementsByClassName("piece");
        const isSomePieceSelected = Array.from(allPieces).some((piece) =>
          piece.classList.contains("selected")
        );

        if (isSomePieceSelected) {
          return;
        }

        clickedPiece.classList.add("selected");
        moveOptions.forEach((square) => square.classList.add("can-move-to"));

        return;
      }

      clickedPiece.classList.remove("selected");
      moveOptions.forEach((square) => square.classList.remove("can-move-to"));
    };
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

  getCaptureOptions() {}

  canMove() {}
  getMoveOptions() {}
}
