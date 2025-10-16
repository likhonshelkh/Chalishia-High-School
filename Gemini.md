# Gemini.md - Guidelines for Google Gemini

This document provides specific guidelines for using the **Google Gemini** AI model in the **Chalishiya High School Management System** project. Gemini's primary use is for architectural planning, problem-solving, documentation, and generating complex code logic.

## 1. Gemini's Primary Role

Gemini should be used as a **high-level technical consultant and-problem solver**. Its strengths in understanding broad context and generating detailed explanations make it ideal for:

*   **Architectural Design:** Planning the structure of new modules or features.
*   **Complex Logic:** Generating algorithms or business logic (e.g., the GPA calculation logic for the Bangladeshi grading system).
*   **Documentation:** Writing technical documentation, user stories, and API specifications.
*   **Refactoring:** Suggesting ways to refactor and improve existing code for better performance or readability.

## 2. Best Practices for Using Gemini

*   **Provide Detailed Context:** When prompting Gemini, provide as much context as possible. Include relevant code snippets, database schemas, and the specific requirements from `PROJECT_SPECIFICATION.md`.
*   **Iterate on Prompts:** Start with a broad prompt and then refine it based on Gemini's output. Ask follow-up questions to drill down into the details.
*   **Verify Technical Accuracy:** While powerful, Gemini can make mistakes. Always verify its suggestions, especially for technical details like database schema designs or complex security implementations.
*   **Use for Learning:** Leverage Gemini's explanatory power to understand new concepts or explore different solutions to a problem before implementing.

## 3. Specific Instructions for Gemini

*   **Database Schema:** When asked to design a database schema, ensure the design is normalized and includes appropriate data types and relationships for a relational database like PostgreSQL.
*   **Bengali Language Content:** When generating user-facing text (e.g., for UI elements or notifications), ensure the Bengali is natural and grammatically correct. The tone should be professional and appropriate for an educational institution.
*   **Security Logic:** When prompted for security-related logic (e.g., authentication middleware), the generated code should follow modern best practices, such as using established libraries for authentication and password hashing.

## 4. Overrides

*   **Architectural Decisions:** Gemini can be used to propose architectural patterns that may not be explicitly mentioned in `AGENTS.md`, but any significant deviation must be reviewed and approved by a human developer before implementation.