function reverseString(string) {
  const arr = [];
  for (let i = 0; i < string.length; i += 1) {
    arr.unshift(arr[i]);
  }
  return arr.join('');
}

module.exports = reverseString;