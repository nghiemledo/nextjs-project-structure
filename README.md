# Next.js Project Structure Guide

This repository provides a comprehensive guide on structuring a Next.js project. The structure is designed to promote scalability, maintainability, and easy navigation, making it ideal for both small and large applications.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This guide outlines a recommended project structure for Next.js applications. It covers the organization of components, pages, styles, and other essential aspects of a Next.js project to ensure code quality and maintainability.

## Project Structure

Here's an overview of the project's folder structure:

```
nextjs-structure/
├── .env/             # Contains environment variables for local development.
├── .env.prod/        # Contains environment variables for the production environment.
├── .next/            # Build output directory generated by Next.js. Contains compiled files.
├── node_modules/     # Directory where npm packages are installed.
├── public/           # Contains static files such as images, fonts, and other assets accessible directly via URL.
├── src/              # Source code of the application.
│   ├── app/          # Contains routing of pages.
│   ├── components/   # Contains reusable UI components.
│   ├── constants/    # Contains constants.
│   ├── config/       # Contains configurations like API url, ...
│   ├── enums/        # Contains enumerated data type values (enumerations).
│   ├── hooks/        # Contains custom hooks.
│   ├── locales/      # Language switch.
│   ├── models/       # Contains templates or entities such as user.
│   ├── redux/        # Contains redux configuration.
│   ├── resources/    # Contains the application's static contents.
│   ├── services/     # Contains services that retrieve data from the API.
│   ├── styles/       # Contains styles for the project files.
│   ├── uploads/      # Contains configurations for uploading files, images.
│   └── utils/        # Contains functions that are common to the entire project.
├── .eslintrc         # ESLint configuration.
├── .gitignore        # Git ignore file.
├── package.json      # Project configuration and dependencies.
└── README.md         # Project documentation.
```

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have Node.js and npm installed on your system.

- Node.js: [Download](https://nodejs.org/)
- npm: [Download](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nghiemledo/nextjs-project-structure.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs-structure
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out:

- Nghiem Le Do - [nghiemledo@gmail.com](mailto:nghiemledo@gmail.com)
