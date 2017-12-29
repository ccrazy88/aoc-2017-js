const calculateSteps = square => {
  let steps = 0;

  // Figure out which "layer" of the spiral to go to.
  let sideLength = 1;
  while (sideLength ** 2 < square) {
    steps += 1;
    sideLength += 2;
  }

  if (sideLength === 1) {
    return steps;
  }

  // Figure out how many steps from a straight line remain.
  const southeast = sideLength ** 2;
  const south = southeast - (sideLength - 1) / 2;
  const west = south - (sideLength - 1);
  const north = west - (sideLength - 1);
  const east = north - (sideLength - 1);
  const centers = [south, west, north, east];
  steps += Math.min(...centers.map(value => Math.abs(value - square)));

  return steps;
};

module.exports = { calculateSteps };
