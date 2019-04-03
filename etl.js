
function transform(old) {
  let newPoints = Object.keys(old);
  let newKeys = Object.values(old);
  // let newPoints = oldKeys;
  let expected = {};
    expected.keys = newKeys;
  
  console.log('* newPoints *', newPoints);
  console.log('* newKeys *', newKeys);

  console.log('** expected **', expected);
  // console.log('* converted *', converted);
  
  return expected;
}

module.exports = {
  transform
}
