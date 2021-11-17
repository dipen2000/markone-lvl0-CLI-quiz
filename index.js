const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log("Welcome to the quiz where your knowledge will be tested about me, and I wil get to know how well you know me.");
var readlineSync = require('readline-sync');
let userName = readlineSync.question(chalk.blue("Can i know your name please "));
console.log("Welcome " +chalk.yellow(userName));

const age = 20;
const color = "Purple";
const person = "Steve Jobs"
let count = 0;
if (readlineSync.keyInYN(chalk.blue('Are you sure you wanna start?'))) {
  // 'Y' key was pressed.
  console.log('OK good to go');
  console.log("I am going to ask you threee questions let's see How   many of the them you get right..");

  let dipenAge = readlineSync.question(chalk.blue("what is my age? "));
  if(+dipenAge === age){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(dipenAge === ""){
    console.log(chalk.magenta("You passed this one."));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.cyanBright("Moving to the next question."))

  let dipenColor = readlineSync.question(chalk.blue("what is my favourite color? "));
  if(dipenColor === color){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(dipenColor === ""){
    console.log(chalk.magenta("You passed this one"));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.cyanBright("Moving to the next question."))

  let dipenPerson = readlineSync.question(chalk.blue("what is my favourite person dead or alive? "));
  if(dipenPerson === person){
    console.log(chalk.green("Noted."))
    count++;
  }
  else if(dipenPerson === ""){
    console.log(chalk.magenta("You passed this one"));
  }
  else{
    console.log(chalk.green("Noted."))
  }

  console.log(chalk.yellow("Result coming in 2 sec precisely..."));
  let timer = setTimeout(()=>{
    console.log("Right answer " + age);
    console.log("Your answer " + dipenAge);
    console.log("Right answer " + color);
    console.log("Your answer " + dipenColor);
    console.log("Right answer " + person);
    console.log("Your answer " + dipenPerson);
    if(count===3){
      console.log(chalk.green("Congratulations you got 3 out of 3"));
    }
    else{
      console.log(chalk.yellow("You got " + count + " out of 3"));
    }
  },2000);
} 

else {
  // Another key was pressed.
  console.log(chalk.magenta('ok no problem some other time.'));
}

