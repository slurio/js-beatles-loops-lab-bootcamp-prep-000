function theBeatlesPlay(musicans, instruments) {
  var array = [];
  for(let i=0; i < musicans.length; i += 1) {
    array.push(`${musicans[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.lenght) {
    facts.push(`${facts}!!!`);
    i += 1;
  }
  return facts;
}
