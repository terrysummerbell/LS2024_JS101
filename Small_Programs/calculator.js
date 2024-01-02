// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require("readline-sync");

const MESSAGES = require('./calculator_messages.json');

const LANGUAGE = 'es';

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages('welcome', LANGUAGE));

while (true) {
 prompt(messages('firstNumber', LANGUAGE));
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt(messages('invalidNumber', LANGUAGE));
    number1 = readline.question();
  }
  
  prompt(messages('secondNumber', LANGUAGE));
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt(messages('invalidNumber', LANGUAGE));
    number2 = readline.question();
  }
  
  prompt(messages('operation', LANGUAGE));
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('mustChoose', LANGUAGE));
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      // '1' represents addition
      output = Number(number1) + Number(number2);
      break;
    case '2': 
      // '2' represents subtraction
      output = Number(number1) - Number(number2);
      break;
    case '3':
      // '3' represents multiplication
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(`The result is ${output}`);
  
  prompt(messages('anotherOperation', LANGUAGE));
  let answer = readline.question();
  
  if (answer[0].toLowerCase() !== "y") break;
}