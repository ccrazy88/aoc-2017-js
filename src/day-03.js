class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  manhattanDistance = () => Math.abs(this.x) + Math.abs(this.y);

  adjacentPositions = () => [
    new Position(this.x + 1, this.y),
    new Position(this.x + 1, this.y + 1),
    new Position(this.x, this.y + 1),
    new Position(this.x - 1, this.y + 1),
    new Position(this.x - 1, this.y),
    new Position(this.x - 1, this.y - 1),
    new Position(this.x, this.y - 1),
    new Position(this.x + 1, this.y - 1)
  ];

  toString = () => `${this.x},${this.y}`;
}

const calculatePosition = square => {
  if (square === 1) {
    return new Position(0, 0);
  }

  // Figure out which "layer" of the spiral to go to.
  let sideLength = 1;
  while (sideLength ** 2 < square) {
    sideLength += 2;
  }
  const firstAxis = Math.floor(sideLength / 2);

  // Figure out how many steps from a straight line remain.
  let reference = sideLength ** 2;
  let direction = "S";
  const clockwiseDirection = { S: "W", W: "N", N: "E", E: "S" };
  // Find the nearest corner, then go to the center of its (clockwise) side.
  while (reference - square > sideLength - 1) {
    reference -= sideLength - 1;
    const newDirection = clockwiseDirection[direction];
    direction = newDirection;
  }
  reference -= (sideLength - 1) / 2;

  const secondAxisFormula = {
    S: square - reference,
    W: reference - square,
    N: reference - square,
    E: square - reference
  };
  const secondAxis = secondAxisFormula[direction];

  const coordinates = {
    S: [secondAxis, -firstAxis],
    W: [-firstAxis, secondAxis],
    N: [secondAxis, firstAxis],
    E: [firstAxis, secondAxis]
  };
  return new Position(...coordinates[direction]);
};

const calculateSteps = square => calculatePosition(square).manhattanDistance();

const calculateFirstSquareGreaterThanValue = value => {
  const squaresByPosition = {};
  let currentSquare = 1;
  let currentValue = 0;
  while (currentValue <= value) {
    const position = calculatePosition(currentSquare);
    const adjacentSquares = position
      .adjacentPositions()
      .map(adjacentPosition => squaresByPosition[`${adjacentPosition}`])
      .filter(Boolean);
    const sum = adjacentSquares.length
      ? adjacentSquares.reduce((acc, square) => acc + square, 0)
      : 1;
    currentSquare += 1;
    squaresByPosition[`${position}`] = sum;
    currentValue = sum;
  }
  return currentValue;
};

module.exports = { calculateSteps, calculateFirstSquareGreaterThanValue };
