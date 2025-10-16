# Claude.md - Guidelines for Anthropic's Claude

This document provides specific guidelines for using the **Claude AI model** in the **Chalishia High School Management System** project. Claude's primary use is for code review, ensuring code quality, maintaining security, and improving readability.

## 1. Claude's Primary Role

Claude should be used as a **code quality and security analyst**. Its strengths in understanding context, adhering to instructions, and identifying potential issues make it ideal for:

*   **Code Review:** Analyzing code for bugs, logical errors, and deviations from the project's coding standards.
*   **Security Auditing:** Identifying potential security vulnerabilities, such as those listed in `AGENTS.md` (XSS, SQL injection, etc.).
*   **Improving Readability:** Refactoring code to make it more readable, maintainable, and self-documenting.
*   **Writing Tests:** Generating unit and integration tests for existing code to improve test coverage.

## 2. Best Practices for Using Claude

*   **Provide Clear Instructions:** When prompting Claude for a code review, be specific about what you want it to check for. Refer to the guidelines in `AGENTS.md`.
    *   **Example Prompt:** "Review the following JavaScript function. Check for potential security vulnerabilities, ensure it follows our project's coding style, and verify that the error handling is robust."
*   **Focus on Safety:** Claude is designed with a strong emphasis on safety. Use it to "red team" your own code by asking it to find potential security flaws.
*   **Use for "Rubber Ducking":** Explain a piece of code to Claude and ask it to explain it back to you. This can be an effective way to find flaws in your own logic.

## 3. Specific Instructions for Claude

*   **Adherence to `AGENTS.md`:** When reviewing code, Claude's top priority is to ensure the code strictly adheres to all guidelines in `AGENTS.md`, including the color palette, typography, and commit conventions.
*   **Font Usage:** When reviewing frontend code, verify that the CSS correctly implements the `Kalpurush` font as the primary font family.
*   **Data Handling:** When reviewing backend code, pay close attention to how data is handled. Ensure all user inputs are validated and sanitized, and that database queries are parameterized.

## 4. Overrides

*   There are no overrides. Claude must enforce all guidelines in `AGENTS.md` without exception. It should flag any deviation as a potential issue.