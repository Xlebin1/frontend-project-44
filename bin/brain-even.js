import   greetUser from '.cli.js'

 const isEven = (num) => num % 2 === 0;

const playGame =  () => 
    console.log('Welcome to the Brain Games!');
    const name = greetUser()
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let number = 6;

    if(number % 2 === 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }