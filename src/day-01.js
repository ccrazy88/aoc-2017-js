const parseDigits = (input) =>
  input
    .split("")
    .map((value) => parseInt(value, 10))
    .filter((value) => !isNaN(value));

const solveCaptcha = (input, findNextIndex) => {
  const digits = parseDigits(input);
  const { length } = digits;
  return digits.reduce(
    (accumulator, value, index) =>
      value === digits[findNextIndex(index, length)]
        ? value + accumulator
        : accumulator,
    0
  );
};

const solveCaptchaFirstHalf = (input) =>
  solveCaptcha(input, (index, length) => (index + 1) % length);

const solveCaptchaSecondHalf = (input) =>
  solveCaptcha(input, (index, length) => (index + length / 2) % length);

module.exports = { solveCaptchaFirstHalf, solveCaptchaSecondHalf };
