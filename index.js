#!/usr/bin/env node

const { Command } = require("commander");
const chalk = require("chalk");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const program = new Command();

program
  .name("create-react-native-template") // Corrected name to match package.json
  .description(
    'A simple CLI to create a React Native project with the "Blank (Bare)" template and web support.'
  )
  .argument("<project-name>", "The name for the new React Native project.")
  .action((projectName) => {
    const projectPath = path.resolve(process.cwd(), projectName);

    // Check if a directory with the project name already exists
    if (fs.existsSync(projectPath)) {
      console.error(
        chalk.red(`Error: Directory "${projectName}" already exists.`)
      );
      process.exit(1);
    }

    try {
      // --- STEP 1: Create the base project ---
      const createProjectCommand = `npx create-expo-app@latest "${projectName}" --template bare-minimum`;
      console.log(
        chalk.blue(`Creating a new React Native project named "${projectName}"...`)
      );
      console.log(
        chalk.green("Initializing project. This might take a few minutes...")
      );
      execSync(createProjectCommand, { stdio: "inherit" });
      
      console.log(chalk.green("\n✅ Base project created successfully!"));

      // --- STEP 2: Install Web Dependencies BY DEFAULT ---
      const installWebDepsCommand = 'npx expo install react-dom react-native-web @expo/metro-runtime';
      console.log(chalk.blue("\nInstalling dependencies for web support..."));
      
      // This is the most important part:
      // The `cwd` (Current Working Directory) option tells the command
      // to run inside the newly created project folder.
      execSync(installWebDepsCommand, {
        cwd: projectPath,
        stdio: 'inherit'
      });
      console.log(chalk.green("✅ Web dependencies installed!"));


      // --- STEP 3: Final Success Message ---
      console.log(chalk.bold.magenta("\n🚀 Project setup complete! 🚀\n"));
      console.log(chalk.cyan(`Your project with web support is ready!`));
      console.log(chalk.cyan(`To get started:`));
      console.log(chalk.yellow(`  cd ${projectName}`));
      console.log(chalk.yellow("  npm run android"));
      console.log(chalk.yellow("  npm run ios"));
      console.log(chalk.yellow("  npm run web\n")); // Added the web command here

    } catch (error) {
      console.error(chalk.red("\nAn error occurred during project setup."));
      console.error(chalk.red("Please check the output above for details."));
      process.exit(1);
    }
  });

// This starts the program
program.parse(process.argv);