This test agent created by using below prompts on VScode integrated AI:

1. Command to install Playwright AI Agents: to generate .github/agent folder and 3 files
prompt: npx playwright init-agents --loop=vscode

2. Initialize Project: 
prompt: Initialize a new Playwright project with MCP agents for VS Code integration, install the necessary dependencies including @playwright/test and browsers, run the seed test to validate the setup, and start the MCP server for local testing tools.

3. Plan, Generate & Heal:
-Planner: analyze the DOM and test goal.
-Generator: write the playwright actions and assertions
-Healer: Execute the test, catch failures, and loops back to fix the code

Prompt: I need to write a new test for the OrangeHRM dashboard. Please act as the Orchestrator and follow this strict lifecycle:
First, read the rules in @playwright-test-planner.agent.md. Analyze the target page and output a step-by-step strategy for the test. Stop and wait for my approval.
Once I approve the plan, switch your context to @playwright-test-generator.agent.md. Use those specific guidelines to write the actual Playwright TypeScript code based on the plan.
After you write the code, I will execute the test locally. If the test fails and I paste an error log into this chat, immediately assume the role of @playwright-test-healer.agent.md to analyze the trace and patch the code. Before generating tests - Ensure a playwright.config.ts exists in the project root. If it does not, create one with testDir pointing to the test output directory. This is required for the VS Code Playwright Test Explorer to recognize test cases.

4. Run & Auto-Heal:
Please run this test file. If it fails, immediately switch your context to @playwright-test-healer.agent.md. Read the terminal error output, analyze what went wrong with the locator, and automatically patch the code with a resilient alternative.
--
Prompt to Test guide:
example: Login as admin, generate mock user data, and assert dashboard loads