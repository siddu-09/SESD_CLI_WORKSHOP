#!/usr/bin/env node
const { Command } = require('commander');
const axios = require("axios");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => {
    console.log(`Hello ${name}`);
});
program
    .command("add <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
});
program
    .command("subtract <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);
});
program
    .command("multiply <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
});
program
    .command("divide <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    if (num2 === 0) {
        console.error("Cannot divide by zero.");
        process.exit(1);
    }
    console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}`);
});
program
    .command("joke")
    .action(async () => {
    try {
        const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        console.log(res);
    }
    catch (err) {
        console.log("Error", err);
    }
});
program.parse();
