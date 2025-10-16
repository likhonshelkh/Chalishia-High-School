# Copilot.md - Guidelines for GitHub Copilot

This document provides specific guidelines for developers using **GitHub Copilot** within the **Chalishia High School Management System** project. Copilot should be used as a productivity tool to assist in writing boilerplate code, generating functions, and suggesting implementations, while adhering to the project's standards.

## 1. Copilot's Primary Role

Copilot's role is to act as an **AI pair programmer**. It should be used to accelerate development by generating code snippets, completing repetitive patterns, and providing implementation ideas. However, the developer is ultimately responsible for the quality, correctness, and security of the code.

## 2. Best Practices for Using Copilot

*   **Review All Suggestions:** Never accept a Copilot suggestion without carefully reviewing it. Ensure it aligns with the project's architecture, coding style, and security requirements outlined in `AGENTS.md`.
*   **Write Clear Comments and Function Signatures:** Guide Copilot by writing descriptive comments and clear function signatures. This will help it generate more accurate and relevant code.
    *   **Example:**
        ```javascript
        // Fetches a student's profile from the API by their ID
        // and handles potential errors.
        async function getStudentProfile(studentId) {
          // Copilot will likely generate a fetch call here
        }
        ```
*   **Use for Boilerplate:** Copilot is excellent for generating boilerplate code, such as creating new components, writing test stubs, or setting up API fetch calls.
*   **Security is Your Responsibility:** Copilot may suggest code with security vulnerabilities (e.g., unsanitized inputs, hardcoded secrets). It is the developer's duty to identify and fix these issues. **Do not trust Copilot with security-sensitive code.**

## 3. Specific Instructions for Copilot

*   **UI Components:** When generating UI components, ensure the suggestions use the project's color palette and the `Kalpurush` font as specified in `AGENTS.md`.
*   **API Calls:** When generating code for API calls, ensure it includes proper error handling (e.g., `try...catch` blocks) and handles different HTTP status codes.
*   **Database Queries:** Do not use Copilot to generate raw SQL queries. If using an ORM, you can use Copilot to help structure the ORM queries, but always validate the final query.

## 4. Overrides

*   There are no overrides. All code generated or suggested by Copilot must strictly adhere to the guidelines in `AGENTS.md`.