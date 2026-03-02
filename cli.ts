#!/usr/bin/env node
const { Command } = require('commander')
const axios = require("axios")
const fs = require('fs')

const program = new Command()
program
    .command("greet <name>")
    .action((name) => {
        console.log(`Hello ${name}`)
    });

// 1. File info
program
    .command("fileinfo <filename>")
    .description("Show file size and stats")
    .action((filename) => {
        try {
            const stats = fs.statSync(filename);
            console.log(`File: ${filename}`);
            console.log(`Size: ${stats.size} bytes`);
            console.log(`Created: ${stats.birthtime}`);
            console.log(`Modified: ${stats.mtime}`);
        } catch (err) {
            console.error("File not found or error reading file.");
        }
    });

// 2. GitHub user info (API)
program
    .command("github <username>")
    .description("Get GitHub user info")
    .action(async (username) => {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const user = res.data;
            console.log(`GitHub User: ${user.login}`);
            console.log(`Name: ${user.name}`);
            console.log(`Public Repos: ${user.public_repos}`);
            console.log(`Followers: ${user.followers}`);
            console.log(`Following: ${user.following}`);
            console.log(`Bio: ${user.bio}`);
        } catch (err) {
            console.error("Error fetching GitHub user info.");
        }
    });

// 3. Weather (API)
program
    .command("weather <city>")
    .description("Get current weather for a city (Open-Meteo API)")
    .action(async (city) => {
        try {
            // Geocoding to get lat/lon
            const geo = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
            if (!geo.data.results || geo.data.results.length === 0) {
                console.error("City not found.");
                return;
            }
            const { latitude, longitude } = geo.data.results[0];
            const weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const w = weather.data.current_weather;
            console.log(`Weather in ${city}: ${w.temperature}°C, wind ${w.windspeed} km/h`);
        } catch (err) {
            console.error("Error fetching weather.");
        }
    });

// 4. Quote generator (API)
program
    .command("quote")
    .description("Get a random inspirational quote")
    .action(async () => {
        try {
            const res = await axios.get("https://api.quotable.io/random");
            const q = res.data;
            console.log(`\"${q.content}\" — ${q.author}`);
        } catch (err) {
            console.error("Error fetching quote.");
        }
    });

// 5. Joke (API, improved output)
program
    .command("joke")
    .description("Get a random joke")
    .action(async () => {
        try {
            const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`)
            const joke = res.data;
            console.log(`${joke.setup}\n${joke.punchline}`);
        } catch (err) {
            console.log("Error fetching joke.");
        }
    });

// 6. Reverse string
program
    .command("reverse <text>")
    .description("Reverse the given text")
    .action((text) => {
        console.log(text.split('').reverse().join(''));
    });

// 7. Palindrome check
program
    .command("palindrome <text>")
    .description("Check if text is a palindrome")
    .action((text) => {
        const clean = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isPal = clean === clean.split('').reverse().join('');
        console.log(isPal ? "Yes, it's a palindrome!" : "No, not a palindrome.");
    });

// 8. Word count
program
    .command("wordcount <sentence>")
    .description("Count words in a sentence")
    .action((sentence) => {
        const count = sentence.trim().split(/\s+/).length;
        console.log(`Word count: ${count}`);
    });

// 9. Time now
program
    .command("now")
    .description("Show current date and time")
    .action(() => {
        console.log(`Current date and time: ${new Date().toLocaleString()}`);
    });

// 10. Countdown
program
    .command("countdown <seconds>")
    .description("Countdown from N seconds")
    .action(async (seconds) => {
        let n = parseInt(seconds);
        if (isNaN(n) || n < 1) {
            console.error("Please provide a positive integer.");
            return;
        }
        for (let i = n; i > 0; i--) {
            process.stdout.write(`\r${i}   `);
            await new Promise(res => setTimeout(res, 1000));
        }
        console.log("\nTime's up!");
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

program.parse();