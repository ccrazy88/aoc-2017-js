const parseSpreadsheet = (input) =>
  input
    .split(/\r?\n/)
    .map((row) =>
      row
        .split(/\s+/)
        .map((value) => parseInt(value, 10))
        .filter((value) => !isNaN(value)),
    )
    .filter((row) => row.length);

const calculateChecksum = (input, calculateRowChecksum) => {
  const spreadsheet = parseSpreadsheet(input);
  return spreadsheet.reduce(
    (accumulator, row) => accumulator + calculateRowChecksum(row),
    0,
  );
};

const calculateChecksumFirstHalf = (input) =>
  calculateChecksum(input, (row) => Math.max(...row) - Math.min(...row));

const generatePairs = (row) => {
  const pairs = [];
  for (let i = 0; i < row.length; i += 1) {
    for (let j = i + 1; j < row.length; j += 1) {
      const pair = row[i] > row[j] ? [row[i], row[j]] : [row[j], row[i]];
      pairs.push(pair);
    }
  }
  return pairs;
};

const calculateChecksumSecondHalf = (input) =>
  calculateChecksum(input, (row) =>
    generatePairs(row)
      .filter(([a, b]) => a % b === 0)
      .map(([a, b]) => a / b)
      // There should only be one result here.
      .reduce((accumulator, value) => accumulator + value),
  );

module.exports = { calculateChecksumFirstHalf, calculateChecksumSecondHalf };
