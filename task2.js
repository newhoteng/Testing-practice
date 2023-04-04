function reverseString(string) {
  const arr = [];
  for (let i = 0; i < string.length; i += 1) {
    arr.unshift(string[i]);
  }
  return arr.join('');
}

module.exports = reverseString;