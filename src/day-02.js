const parseSpreadsheet = input =>
  input
    .split(/\r?\n/)
    .map(row =>
      row
        .split(/\s+/)
        .map(value => parseInt(value, 10))
        .filter(value => !isNaN(value))
    )
    .filter(row => row.length);

const calculateChecksum = input => {
  const spreadsheet = parseSpreadsheet(input);
  return spreadsheet.reduce(
    (accumulator, row) => accumulator + Math.max(...row) - Math.min(...row),
    0
  );
};

module.exports = { calculateChecksum };
