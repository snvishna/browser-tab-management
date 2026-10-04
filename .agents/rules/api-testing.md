# API Testing and Implementation Standards

When implementing or modifying third-party API integrations, you MUST NOT write "vibe code" or make blind assumptions about API schemas. You must adhere to the highest engineering standards as a tech lead.

1. **Verify the Spec**: Always pull and verify the official API schema (e.g., OpenAPI JSON/YAML, official docs) using tools like `read_url_content` or `run_command` with `curl` BEFORE writing the integration code.
2. **Never Hallucinate Configuration**: Do NOT invent or guess model names (e.g., `fast`, `latest`). You must extract the valid enums from the OpenAPI schema or API documentation. If the endpoint requires auth to list models and you don't have a key, explicitly use a documented example from the schema (e.g., `jev-latest` instead of a guessed `jev-fast`).
3. **Execute Live Tests**: You must execute a live test against the endpoint. If you do not have an API key, construct a test payload that will trigger a `401 Unauthorized`. If it triggers a `422 Unprocessable Entity` or `400 Bad Request`, your payload is wrong and you MUST fix it before committing.
4. **Error Handling**: You must intercept non-200 responses and parse their exact error structure (`{"detail": ...}` vs `{"error": {"message": ...}}`) so the end user sees a clean, actionable error in the logs.
5. **Parse Accurately**: Ensure you are parsing the success response object correctly according to the strict JSON path provided by the API specification.
