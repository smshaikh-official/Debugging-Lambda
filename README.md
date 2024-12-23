
# Debugging AWS Lambda Code On Development Machine Using Visual Studio Code

Debugging AWS Lambda code can be challenging, especially when trying to replicate the cloud environment locally. Here the goal is to simplify the debugging process and improve your development workflow.

## Why Debug AWS Lambda Locally?

Developing and testing AWS Lambda code directly in the cloud can be time-consuming and costly. Debugging locally provides several benefits:

- Cost Efficiency: Reduces the need for frequent deployments to AWS.
- Faster Iteration: Enables quicker testing and debugging cycles.
- Greater Control: Allows you to use familiar tools and plugins available in your development environment.

## Prerequisites

Before starting, ensure you have the following installed on your development machine:

- Node.js: Install the latest LTS version.
- AWS CLI: Install the AWS CLI.
- TypeScript Compiler: Available via npm install -g typescript.
- Visual Studio Code: Ensure it's up-to-date.

## Run Locally

Clone the project

```bash
  git clone git@github.com:smshaikh-official/Debugging-Lambda.git
```

Go to the project directory

```bash
  cd Debugging-Lambda
```

Install dependencies

```bash
  npm install
```

## Debugging

Add breakpoints in your code at the key locations and start the debugger.

## Screenshots

![Debugging](./debug-screenshot.jpeg?raw=true "Active debug session")

## About the Author

This project is maintained by [Shoaib Shaikh](https://github.com/smshaikh-official).