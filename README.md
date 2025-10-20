# RSVP-JP

Rapid Serial Visual Presentation (RSVP) viewer tailored for Japanese text. This repository contains the
specification and development workflow for building a browser-based RSVP system that supports both
plain text input and PDF uploads, performs morphological analysis, and offers configurable presentation
controls designed for comfortable reading in Japanese.

## Project Overview

- **Platform**: Web browser application.
- **Inputs**:
  - Direct text entry.
  - PDF upload with text extraction.
- **Japanese Morphological Analysis**: Required for tokenizing Japanese sentences into words.
  - Utilize a state-of-the-art tokenizer (e.g., SudachiPy, MeCab with UniDic, or similar modern tools).
- **Display Configuration**:
  - Adjustable context window showing the target word plus 0–3 preceding/following words.
  - Maintain a fixed focal point: the word to read should stay aligned at the same horizontal position.
  - Adjustable presentation speed (words per minute / interval).
- **Themes**: Provide both light and dark modes, with user-selectable preference.

## Development Principles

1. **Test-Driven Development (TDD)**: Implement features by writing tests first, then the minimal code to
   satisfy the tests.
2. **Incremental Delivery**: Add tests and features one at a time, ensuring each change is well-scoped
   and passes the full test suite.
3. **Clarifications**: If requirements are unclear, ask for guidance when opening a pull request.

## Initial Milestones

1. Establish project structure with build tooling (frontend framework, bundler, testing frameworks).
2. Implement text input support with morphological analysis pipeline.
3. Add PDF upload and text extraction.
4. Create RSVP display component with configurable context window and alignment.
5. Add playback controls for speed, pause/resume, and navigation.
6. Implement light/dark theme toggle and persist preference.
7. Polish UX, accessibility, and add documentation.

## Testing Strategy

- Unit tests for tokenizer integration, text segmentation, and RSVP rendering logic.
- Component tests (e.g., with Jest + Testing Library or Vitest + Vue Test Utils) for UI behavior.
- End-to-end tests to validate full RSVP flow from input to playback.

## Getting Started

1. Clone the repository and install dependencies (tooling TBD during implementation).
2. Run the test suite to ensure the environment is working.
3. Follow the TDD workflow when adding new features.

Project status: specification phase. Implementation will be guided by this README and the Codex system
instructions located in `codex/SYSTEM.md`.
