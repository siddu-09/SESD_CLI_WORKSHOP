# SESD CLI Workshop 2

A versatile Command Line Interface (CLI) tool built with Node.js, TypeScript, and the Commander.js library. This project provides a variety of utility commands ranging from file information and GitHub user lookup to weather forecasts and simple games like jokes and quotes.

## Features

- **File Information:** Get detailed stats about any file.
- **API Integrations:** 
  - GitHub User Info
  - Real-time Weather (via Open-Meteo)
  - Random Inspirational Quotes
  - Random Jokes
- **Text Utilities:** Reverse strings, palindrome checks, and word counts.
- **Time Utilities:** Current date/time display and a countdown timer.
- **Math Operations:** Basic calculator functions (Add, Subtract, Multiply, Divide).

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd sesd-workshop2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```
   *(Note: Ensure you have a build script in `package.json` or run `npx tsc`)*

4. **Link the CLI (Optional):**
   ```bash
   npm link
   ```
   Now you can use the command `mycli` directly in your terminal.

## Usage

You can run the CLI using `node dist/cli.js` or via `mycli` if linked.

### General Commands
- `mycli greet <name>` - Greets the user.
- `mycli now` - Shows current date and time.
- `mycli countdown <seconds>` - Starts a countdown timer.

### API Commands
- `mycli github <username>` - Fetches GitHub profile details.
- `mycli weather <city>` - Gets current weather for a specific city.
- `mycli quote` - Displays a random inspirational quote.
- `mycli joke` - Tells a random joke.

### Text Utilities
- `mycli reverse <text>` - Reverses the provided text.
- `mycli palindrome <text>` - Checks if the text is a palindrome.
- `mycli wordcount <sentence>` - Counts the number of words in a sentence.

### File & Math
- `mycli fileinfo <filename>` - Displays file size and timestamps.
- `mycli add <n1> <n2>` - Adds two numbers.
- `mycli subtract <n1> <n2>` - Subtracts two numbers.
- `mycli multiply <n1> <n2>` - Multiplies two numbers.
- `mycli divide <n1> <n2>` - Divides two numbers.

## Technologies Used
- **Language:** TypeScript
- **Runtime:** Node.js
- **Libraries:** 
  - [Commander.js](https://github.com/tj/commander.js/) - CLI framework
  - [Axios](https://axios-http.com/) - HTTP client for API requests

## License
ISC
