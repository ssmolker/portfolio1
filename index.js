const chalk = require('chalk');
var prompt = require('prompt');

let quotes =[`"I have the power of God and anime on my side. AAAAAAAAAHHHHHHHHH"
-child on Vine (circa 2015)`,
`“Two bros, chillin’ in a hot tub, 5 feet apart cause they’re not gay.” -Anthony Padilla`,
`“Oh hi, thanks for checking in I’m still a piece of garrbaagge.” -Bill Wurtz`]

let index = Math.floor(Math.random() * 3)

let final = (quotes[index])

let phrase = "Thank you for using quote generator."

let colors = chalk.red("red ")+chalk.blue("blue ")+chalk.green("green ")

console.log(chalk.magentaBright("Welcome to quote generator!"))
console.log(chalk.magentaBright("Enter what color you would like your quote to be printed in."))
console.log(colors)

prompt.start();
prompt.get(['color'], function (err, result) {
    // Log the results.
    const choice = result.color
    console.log('  color choice: ' + choice);

    
    if(choice ==='red'){
        console.log(chalk.red(final))
        console.log(chalk.magentaBright(phrase))
    }
    if(choice ==='blue'){
        console.log(chalk.blue(final))
        console.log(chalk.magentaBright(phrase))
    }
    if(choice ==='green'){
        console.log(chalk.green(final))
        console.log(chalk.magentaBright(phrase))
    }
    if (choice !=='green'&&choice !=='red'&&choice !=='blue'){
        console.log(chalk.magentaBright("Please try again."))
    }

});



