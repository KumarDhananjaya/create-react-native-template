# Create React Native Bare Template

![NPM Version](https://img.shields.io/npm/v/create-react-native-template) ![NPM Downloads](https://img.shields.io/npm/dm/create-react-native-template) ![License](https://img.shields.io/npm/l/create-react-native-template)

The fastest way to start a new React Native project configured with the **Bare Workflow** and out-of-the-box **web support**.

This command-line tool is designed for developers who want to bypass the interactive prompts and immediately generate a clean, production-ready project structure.

## Why Use This Tool?

The standard `create-expo-app` is fantastic, but it requires you to manually select a template. This tool automates that process for a specific, common use case: starting a project where you know you'll need access to the native `android` and `ios` directories.

## Key Features

-   ⚡️ **One-Command Setup:** Creates a complete project with a single, non-interactive command. No questions asked.
-   🏗️ **Bare Workflow Ready:** Perfect for projects that require custom native modules or direct access to native project configuration. The `android` and `ios` directories are generated from the start.
-   🌐 **Web Support Included:** Automatically installs `react-native-web`, `react-dom`, and other required dependencies so you can run your app in a web browser instantly.
-   ✨ **Zero Configuration:** Just run the command and start coding.

---

## Prerequisites

To use this tool, you must have [Node.js](https://nodejs.org/) installed on your machine (LTS version is recommended).

---

## Usage

Getting started is as simple as running one command in your terminal. Replace `YourAwesomeApp` with the name of your project.

```bash
npx create-react-native-template YourAwesomeApp