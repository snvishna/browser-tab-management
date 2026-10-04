# API Testing and Implementation Standards

When implementing or modifying third-party API integrations, you MUST NOT write "vibe code" or make blind assumptions about API schemas. You must adhere to the highest engineering standards as a tech lead.

1. **Verify the Spec**: Always pull and verify the official API schema (e.g., OpenAPI JSON/YAML, official docs) using tools like `read_url_content` or `run_command` with `curl` BEFORE writing the integration code.
2. **Execute Tests**: You must execute a live test against the endpoint (even if you expect a 401 Unauthorized) to ensure your HTTP payload structure is valid and does not throw 422 Unprocessable Entity or 400 Bad Request validation errors.
3. **Parse Accurately**: Ensure you are parsing the response object correctly according to the strict JSON path provided by the API specification.
4. **Resilience**: Implement proper error handling, logging, and timeouts to ensure the application does not crash silently when APIs fail.
