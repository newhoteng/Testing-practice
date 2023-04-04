function stringLength(string) {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    count += 1;
  }
  if (count < 1 || count > 10) {
    throw new Error('String is empty or too long');
  } else return count;
}

module.exports = stringLength;

// npm test
// npm run watch