export const getSquarePiece = ({ squareId }) => {
  const squareElement = document.getElementById(squareId);
  const squareChildren = Array.from(squareElement.children);

  return squareChildren.find((element) => element.classList.contains("piece"));
};
