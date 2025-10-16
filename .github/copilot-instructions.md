# Copilot Instructions for Chalishiya High School Management System

This document provides essential instructions for any AI coding agent to work effectively on this repository. **Please trust these instructions and only perform a search if the information is incomplete or found to be in error.**

## High-Level Details

*   **Repository Summary:** This repository contains the project files for the **Chalishiya High School Management System**. The goal is to build a comprehensive, web-based application to manage the school's administrative and academic operations, including student information, attendance, grades, and fees.
*   **Project Type:** This is a web application project, currently in the initial planning and documentation phase. The backend will likely be built with a framework like Django or Laravel, and the frontend will be standard HTML/CSS/JavaScript.
*   **Languages:** The primary languages will be a backend language (e.g., Python, PHP) and frontend languages (HTML, CSS, JavaScript). All documentation is in Markdown.
*   **Repository Size:** The repository is currently small and consists only of documentation files.

## Build Instructions

**IMPORTANT:** As of the last update, this project is in the **documentation phase**. No actual application code has been written yet. Therefore, there is no functional build system. The commands listed below are placeholders for when the project is initialized.

*   **Bootstrap:**
    ```bash
    # This command will install dependencies once a package.json is created.
    # It will FAIL until then.
    pnpm install
    ```
*   **Build:**
    ```bash
    # This command will build the project for production.
    # It will FAIL until a build script is configured.
    pnpm build
    ```
*   **Test:**
    ```bash
    # This command will run the test suite.
    # It will FAIL until a test runner is configured.
    pnpm test
    ```
*   **Run:**
    ```bash
    # This command will start the development server.
    # It will FAIL until a dev script is configured.
    pnpm dev
    ```
*   **Lint:**
    ```bash
    # This command will check for code style issues.
    # It will FAIL until a linter is configured.
    pnpm lint
    ```

**Agent Directive:** Do not attempt to run these commands until you are tasked with initializing the project and creating the necessary configuration files (e.g., `package.json`). **Always assume these commands will fail in the current state.**

## Project Layout

The repository currently contains only documentation that defines the project's scope and guidelines.

*   **`PROJECT_SPECIFICATION.md`:** This is the most important file. It contains the complete requirements for the application, including core modules, technical specifications, and user stories. **Always consult this file before implementing any new feature.**
*   **`README.md`:** The main entry point for the repository, providing a high-level overview and links to other key documents.
*   **`AGENTS.md`:** Contains general guidelines for all contributors (AI and human). It specifies the UI/UX rules, including the color palette and mandatory Bengali fonts (`Kalpurush`, `Mukti`, etc.). **Adherence to these design rules is critical.**
*   **`Copilot.md`, `Gemini.md`, `Claude.md`:** These files contain specific instructions for different AI models. Consult the relevant file for role-specific guidance.
*   **`.github/copilot-instructions.md` (this file):** The central source of truth for AI agent instructions.

### Key Architectural Elements

*   **Architecture:** The proposed architecture is a standard monolithic web application (e.g., Django, Laravel). The code will likely be structured into frontend and backend directories once development begins.
*   **Configuration:** All configuration files (linting, testing, etc.) will be located in the root directory once they are created.
*   **Validation:** There are currently no automated checks or CI pipelines. Validation is a manual process based on the `PROJECT_SPECIFICATION.md`.