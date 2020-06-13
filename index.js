function theBeatlesPlay(musicans, instruments) {
  var array = [];
  for(let i=0; i < musicans.length; i += 1) {
    array.push(`${musicans[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i += 1;
    return newFacts;
  }
}
