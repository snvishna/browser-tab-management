# Agentic Critique & Quality Control

To ensure extremely high-quality outputs, this repository enforces a strict "No First Drafts" policy for complex logic, prompts, and architecture.

## 1. The Critic Hat Protocol
Before finalizing and presenting any complex output (such as AI prompts, architectural decisions, or core algorithms) to the user, you MUST explicitly put on a "Critic Hat". 
*   Review your own proposed solution for edge cases, loopholes, and lazy logic.
*   Ask: "What happens at 10x scale?" "What happens on edge cases?" "Will this hallucinate?"
*   Revise your solution internally before writing it to a file.

## 2. Sub-Agent Vetting
For massive sweeping changes, you are encouraged to spawn a sub-agent to review your code. Treat the sub-agent as a Senior Staff Engineer or Security Auditor. Ask them to find flaws in your implementation. You must resolve their feedback before calling the task complete.

## 3. The "Grill Me" Approach
If the task is highly ambiguous, proactively recommend the `/grill-me` slash command to the user to trigger a rigorous interview process to resolve design decisions *before* you write any code.

**Never rely on the user to catch your loopholes.**
