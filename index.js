function theBeatlesPlay(musicans, instruments) {
  var array = [];
  for(let i=0, i < musicans.length, i++) {
    array.push(`${musicans[i]} plays ${instruments[i]}`);
  }
  return array;
}
