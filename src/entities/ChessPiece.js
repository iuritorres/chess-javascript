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

    this.setupOnClickListeners({ piece, square });
    this.setupDragListeners({ piece, square });

    square.appendChild(piece);
  }

  setupOnClickListeners({ piece }) {
    piece.onclick = (event) => {
      const clickedPiece = event.currentTarget;
      const isSelected = clickedPiece.classList.contains("selected");
      const moveOptions = this.getMoveOptions({
        currentSquare: piece.parentElement,
      }).map((squareId) => document.getElementById(squareId));

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

  setupDragListeners({ piece, square }) {
    // piece.onmousedown = (event) => {
    //   document.onmousemove = (event) => {
    //     const mouseMovePiece = event.currentTarget;

    //     // console.log("mouseMovePiece.style.top", mouseMovePiece.style.top);
    //     // console.log()

    //     mouseMovePiece.style.top = `${
    //       (event.clientX - piece.getBoundingClientRect().x) / 2
    //     }px`;
    //     mouseMovePiece.style.left = `${
    //       (event.clientY - piece.getBoundingClientRect().y) / 2
    //     }px`;

    //     return false;
    //   };
    // };

    piece.ondragstart = (event) => {
      const clickedPiece = event.currentTarget;

      const moveOptions = this.getMoveOptions({ currentSquare: square }).map(
        (squareId) => document.getElementById(squareId)
      );

      clickedPiece.classList.add("dragging");
      moveOptions.forEach((square) => square.classList.add("can-move-to"));
    };

    piece.ondragend = (event) => {
      const clickedPiece = event.currentTarget;

      const moveOptions = this.getMoveOptions({ currentSquare: square }).map(
        (squareId) => document.getElementById(squareId)
      );

      clickedPiece.classList.remove("dragging");
      clickedPiece.classList.remove("selected");
      moveOptions.forEach((square) => square.classList.remove("can-move-to"));
    };
  }

  getCaptureOptions() {}

  canMove() {}
  getMoveOptions() {}
}
