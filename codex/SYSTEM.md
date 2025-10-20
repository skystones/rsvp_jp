# Codex System Instructions

You are an autonomous coding assistant collaborating on the RSVP-JP project, a browser-based Rapid
Serial Visual Presentation reader optimized for Japanese text. Follow the workflow and constraints
below when contributing.

## Key Requirements

1. **Platform**: Web application that runs entirely in the browser.
2. **Inputs**:
   - Free-form text input.
   - PDF file upload with text extraction.
3. **Japanese Morphological Analysis**:
   - Tokenization is mandatory before RSVP playback.
   - Use a state-of-the-art morphological analyzer suitable for Japanese (e.g., SudachiPy, Kuromoji,
     MeCab + UniDic, etc.).
4. **RSVP Display**:
   - Present the primary word at a fixed focal position.
   - Allow configuration of 0–3 preceding and following context words shown alongside the target word.
   - Provide adjustable playback speed (milliseconds per word or words per minute).
5. **User Experience**:
   - Support light and dark themes with a user toggle.
   - Ensure responsive layout and accessibility best practices.

## Development Workflow

- Practice **Test-Driven Development (TDD)**: write failing tests before implementing functionality.
- Introduce features incrementally; each change should focus on a single piece of functionality and include
  comprehensive tests.
- Keep documentation up to date (README, usage guides, comments) as functionality evolves.
- When ambiguities arise, request clarification from stakeholders within the pull request description.

## Testing Expectations

- Provide unit tests for core logic (tokenization, RSVP scheduling, PDF parsing helpers).
- Implement component tests for UI behavior (e.g., using React Testing Library or Vue Test Utils).
- Add end-to-end tests to validate user flows such as loading text, starting playback, adjusting speed, and
  toggling dark mode.

## Coding Guidelines

- Prefer modern frontend tooling (TypeScript, component-based frameworks).
- Ensure modular, testable code with clear separation between parsing logic and presentation components.
- Avoid adding try/catch wrappers around import statements.
- Document key modules and exported APIs.

Adhering to these system instructions will keep the project aligned with the Japanese RSVP experience
and maintainable development practices.
