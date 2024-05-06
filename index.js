#! /usr/bin/env node
//////////////////// "The Starting Coding" ///////////////////////////
import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import chalkAnimation from "chalk-animation";
console.log(chalk.bgGreen.white.bold.underline(`\n\t\t\t\t*Welcome To Countdown Timer*\n`));
// Function to display a box with animation
async function box() {
    let Animation_box = chalkAnimation.neon(boxen(`Countdown Timer\nProject 09\nBy\n*Anas Hakeem*`, {
        // Creating a box with title, text, and styling
        title: '"My Project"',
        titleAlignment: "center",
        textAlignment: "center",
        borderColor: "magenta",
        borderStyle: "doubleSingle",
        backgroundColor: "blue",
        width: 105, // Setting the width of the box
    }));
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 7 seconds
    Animation_box.stop(); // Stop animation after 7 seconds
}
await box();
async function CountdownTimer(duration) {
    let remaining = duration;
    let remainingSeconds = setInterval(() => {
        remaining--;
        if (remaining <= 0) {
            clearInterval(remainingSeconds);
            console.log(chalk.bgGreen.white.bold.underline(`\n\t\t\t\t\t\t"Time Up"\n`));
        }
        else {
            console.log(chalk.bgRed.white.italic.underline(`\nTime remaining: ${remaining} seconds\n`));
        }
    }, 1000);
}
async function main() {
    const { duration } = await inquirer.prompt([
        {
            type: "number",
            name: "duration",
            message: chalk.white.bold.underline("Enter the duration of the countdown in seconds:"),
            validate: (input) => {
                return input >= 0
                    ? true
                    : console.log(chalk.bgRed.white.italic.underline(`\n\t\t\t\t"Please enter a valid duration (greater than 0)."\n`));
            },
        },
    ]);
    CountdownTimer(duration);
}
main();
///////////////////////////////// "The Ending Coding" ///////////////////////////
