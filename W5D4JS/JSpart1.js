
//Why this code doesn't work:

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
 //For this one, I got that the method was undefined.
 //I guess c is contained outside of the scope. When we ask to
  //print x in the final line, it's not held under any clause.


  function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

//This one also came out as undefined.

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

//This one gave a syntax error, of 'constant x has already been identified'

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

// Surprise, surprise, this one also came up as undefined.  I think the issue is the two let statements
//conflicting.

//this function will ensure to take the words to be interpolated as arguments.
function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

//will check if there's a substring is included in a larger string, akin to the Ruby .include? method
function isSubstring(phrase, subphrase) {
  return phrase.includes(subphrase);
}

//Fizzbuzz works very similarly, I think, to ZRuby here.  Note that it takes 3 equal signs!
function fizzBuzz (array) {
  const fizzBuzzArr = [];

  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzArr.push(el);
    }
  });

  return fizzBuzzArr;
}
