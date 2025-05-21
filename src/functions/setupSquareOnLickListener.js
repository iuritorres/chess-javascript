import { getSquarePiece } from "./getSquarePiece.js";

export const setupSquareOnLickListener = ({ square }) => {
  square.onclick = (event) => {
    const clickedSquare = event.currentTarget;
    const hasPiece = getSquarePiece({ squareId: clickedSquare.id });
    const canMoveTo = clickedSquare.classList.contains("can-move-to");

    if (!canMoveTo) {
      return;
    }

    const selectedPiece = document.getElementsByClassName("selected")[0];
    const allSquares = document.getElementsByClassName("square");

    if (hasPiece) {
      const piece = Array.from(clickedSquare.children).find((element) =>
        element.classList.contains("piece")
      );

      clickedSquare.removeChild(piece);
    }

    clickedSquare.appendChild(selectedPiece);

    selectedPiece.classList.remove("selected");
    Array.from(allSquares).forEach((square) =>
      square.classList.remove("can-move-to")
    );
  };
};
