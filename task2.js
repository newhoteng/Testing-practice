function reverseString(string) {
  let arr = [];
  for (let c of string) {
    arr.unshift(c);
  }
  return arr.join('')
}

module.exports = reverseString;