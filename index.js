var readlineSync = require('readline-sync');
const queBank = [
  {question : "What is my age? ", answer : "20"},
  {question : "What is my favorite color? ", answer : "Purple"},
  {question : "What is my favorite person dead or alive? " , answer : "Steve Jobs"},
  {question : "What is my hometown? ", answer : "Rajkot"},
  {question : "What is my house in Hogwarts? ", answer : "Gryffindor"}
];

let highScore = [
  {
    name : "Dipen",
    score : "5"
  },
  {
    name : "My mom",
    score : "4"
  }
];
let score = 0;

let userName = readlineSync.question('May I have your name please? ');
console.log("Welcome to this quiz " + userName);
console.log("This is quick quiz to test how well you know me.");

function play(question , answer){
    let userAns = readlineSync.question(question);
    if(userAns.toUpperCase() === answer.toUpperCase()){
      score = score + 1;
      console.log("Right answer!");
    }
    else{
      score = score - 1;
      console.log("Wrong answer!");
    }
    console.log("Score : " + score);
    console.log("----------------");
}

for(let i = 0;i<queBank.length;i++){
  play(queBank[i].question , queBank[i].answer);
}

console.log("Your final score is " + score);
console.log("----------------");


console.log("Here are the highscores.");
for(let i=0;i<highScore.length;i++){
  console.log(`{Place ${i+1}}`);
  console.log("name " + highScore[i].name);
  console.log("score " + highScore[i].score);
  console.log("----------------");
}
