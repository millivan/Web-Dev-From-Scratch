let regex1 = /Waldo/,
  regex2 = /waldo/;
let text = "Waldo is hiding";
console.log(regex1.test(text));
console.log(regex2.test(text));

let regex3 = /dog|cat|bird|fish/;
console.log(regex3.test("James has a pet cat"));

// ignore case
let regex4 = /freecodecamp/i;
console.log(regex4.test("freeCodeCamp"));

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result2 = twinkleStar.match(starRegex);
console.log(result2);

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(humStr.match(huRegex)); // Returns ["hum"]
console.log(hugStr.match(huRegex)); // Returns ["hug"]
let exampleStr = "fUn run BUN suN";
let unRegex = /.un/gi;
console.log(exampleStr.match(unRegex));

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let regex5 = /[aeiou]./gi;
console.log(quoteSample.match(regex5));

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
console.log(quoteSample2.match(alphabetRegex));

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/gi;
console.log(quoteSample3.match(myRegex));

let quoteSample4 = "3 blind mice.";
let myRegex1 = /[^0-9aeiou]/gi;
console.log(quoteSample4.match(myRegex1));

let difficultSpelling = "Mississipspi";
let myRegex2 = /s+/g;
console.log(difficultSpelling.match(myRegex2));

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /a*/i; // Change this line
console.log(chewieQuote.match(chewieRegex));

let string = "titanic";
let regex = /t[a-z]+?i/;
console.log(string.match(regex));

let text2 = "<h1>Winter is coming</h1>";
let myRegex3 = /<.*>/; // <.*?>
console.log(text2.match(myRegex3));

let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /c+/gi; // Change this line
console.log(crowd.match(reCriminals));

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
console.log(rickyAndCal.match(calRegex));

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
console.log(lastRegex.test(caboose));

let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let nonAlphabetRegex = /\W/g;
console.log(quoteSample5.match(alphabetRegexV2));
console.log(quoteSample5.match(nonAlphabetRegex));

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let noNumRegex = /\D*/g; // Change this line
console.log(numString.match(numRegex));
console.log(numString.match(noNumRegex));

let username = "JackOfAllTrades02";
let userCheck = /^\w{2,}\d{2,}/gi;
console.log(userCheck.test(username));
console.log(username.match(userCheck));

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let noCountWhiteSpace = /\S/g; // Change this line
console.log(sample.match(countWhiteSpace));
res = sample.match(noCountWhiteSpace);
let noWhiteSpace = "";
for (let i = 0; i < sample.match(noCountWhiteSpace).length; i++) {
  noWhiteSpace += res[i];
}
console.log(noWhiteSpace);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let ohRegex2 = /Oh{3,} no/;
let ohRegex3 = /Oh{3} no/;
console.log(ohStr.match(ohRegex));
console.log(ohStr.match(ohRegex2));
console.log(ohStr.match(ohRegex3));

let favWord = "favorite";
let favRegex = /favou?rite/;
console.log(favWord.match(favRegex));

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
let sampleWord = "339302gfgretwtg";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
console.log(sampleWord.match(pwRegex));
console.log(pwRegex.test(sampleWord));

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
console.log(reRegex.test(repeatNum));

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

console.log("Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"));
// Returns "Camp Code"

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
console.log(huhText.replace(fixRegex, replaceText));

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result3 = hello.replace(wsRegex, ""); // Change this line
console.log(result3);
