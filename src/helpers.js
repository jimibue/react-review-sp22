//should return an array of strings ['a','b'...'z']

export const getAlphabet = () => {
  let alp = [];
  for (let i = 97; i <= 122; i++) {
    alp.push(String.fromCharCode(i));
  }
  return alp;
};

// String.fromCharCode(32) ' ' :space
// String.fromCharCode(97) => 'a'
// String.fromCharCode(98) 'b'
// String.fromCharCode(122) 'z'

// type out 'hello'   String.fromCharCode(122)
