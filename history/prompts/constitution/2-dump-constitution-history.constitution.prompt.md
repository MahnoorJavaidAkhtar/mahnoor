---
ID: 2
TITLE: Dump Constitution History
STAGE: constitution
DATE_ISO: 2025-12-07
SURFACE: agent
MODEL: claude-sonnet-4-5-20250929
FEATURE: none
BRANCH: 001-rag-chatbot-backend
USER: --dump-history
COMMAND: /sp.constitution --dump-history
LABELS: ["constitution", "history"]
LINKS:
  SPEC: null
  TICKET: null
  ADR: null
  PR: null
FILES_YAML:
  - history/prompts/constitution/1-show-and-dump-constitution.constitution.prompt.md
TESTS_YAML: []
---
PROMPT_TEXT:
```
sp constitution --dump-history
```
RESPONSE_TEXT:
The history for the constitution has been displayed.
