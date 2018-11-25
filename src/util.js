function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function fisherYatesShuffle(array) {
  let len = array.length;
  for (let i = len - 1; i > 0; i--) {
    let j = getRandomInt(i);
    let [itmp, jtmp] = [array[i], array[j]];
    [array[i], array[j]] = [jtmp, itmp];
  }
  return array;
}

export { fisherYatesShuffle as shuffle };
