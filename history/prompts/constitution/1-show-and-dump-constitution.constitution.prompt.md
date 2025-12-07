---
ID: 1
TITLE: Show and Dump Constitution
STAGE: constitution
DATE_ISO: 2025-12-07
SURFACE: agent
MODEL: claude-sonnet-4-5-20250929
FEATURE: none
BRANCH: 001-rag-chatbot-backend
USER: --show --dump
COMMAND: /sp.constitution --show --dump
LABELS: ["constitution", "show", "dump"]
LINKS:
  SPEC: null
  TICKET: null
  ADR: null
  PR: null
FILES_YAML:
  - .specify/memory/constitution.md
TESTS_YAML: []
---
PROMPT_TEXT:
```
sp constitution --show --dump
```
RESPONSE_TEXT:
The constitution was read from .specify/memory/constitution.md. Since the constitution is already complete, no modifications were made.

The current constitution:
```markdown
# RAG Chatbot Backend Constitution

## Core Principles

### Clear Architecture
The backend must have a modular and well-defined architecture, separating concerns for FastAPI endpoints, database interactions, Qdrant client, and OpenAI integrations.

### Data Integrity and Security
Data handling must prioritize integrity and security, ensuring proper validation, secure storage, and controlled access to sensitive information.

### Scalability and Performance
The design must consider scalability for handling increasing loads and optimize for performance in all critical operations, especially embedding generation and vector searches.

### Testability
All components must be designed for easy testing, with clear interfaces and minimal external dependencies within unit tests. Integration tests should cover interactions between components.

### Observability
The application must provide sufficient logging, metrics, and tracing to monitor its health, performance, and diagnose issues effectively in production.

### Reliability
The system must be resilient to failures, including proper error handling, retries for external services, and graceful degradation where possible.

## Technology Stack

This project will exclusively use FastAPI for the API, Neon for PostgreSQL database, Qdrant for vector database, and OpenAI for embeddings and language models. All dependencies must be explicitly listed in `requirements.txt`.

## Code Quality and Standards

Code must adhere to Python best practices, including PEP 8, clear variable naming, comprehensive docstrings for public functions/classes, and maintainable code structure. Code reviews are mandatory.

## Governance

This constitution outlines the fundamental principles guiding the RAG Chatbot Backend development. Any amendments must be proposed, reviewed, and approved by the project leads. Deviations from these principles require explicit justification and approval. Compliance will be reviewed during code reviews and architectural discussions.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
```
