const generateContent = require('../services/ai.service');

// Handle POST /ai/get-review
async function getResponse(req, res) {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ error: 'Code is required' });
        }

        const prompt = `You are a senior software engineer conducting a thorough code review. Analyze the provided code and deliver a comprehensive review covering:

## Critical Issues
- Security vulnerabilities and potential exploits
- Performance bottlenecks and memory leaks
- Logic errors and bugs that could cause runtime failures
- Race conditions and concurrency issues

## Code Quality
- Code smells and anti-patterns
- Violations of SOLID principles or design patterns
- Overcomplicated logic that could be simplified
- Missing error handling and edge cases
- Potential null/undefined reference errors

## Best Practices
- Adherence to language-specific conventions and idioms
- Proper use of async/await, promises, or callbacks
- Resource management (file handles, database connections, etc.)
- Input validation and sanitization
- Logging and debugging considerations

## Maintainability
- Code readability and clarity
- Naming conventions (variables, functions, classes)
- Code duplication (DRY violations)
- Function/method length and complexity
- Missing or inadequate comments for complex logic

## Testing & Documentation
- Testability of the code
- Missing test cases or edge cases
- Documentation gaps (JSDoc, docstrings, etc.)
- API contract clarity

## Suggestions
- Specific refactoring recommendations with code examples
- Alternative approaches or algorithms
- Library or built-in functions that could simplify the code

Format your response in clear Markdown with:
- Severity indicators (🔴 Critical, 🟡 Warning, 🔵 Suggestion)
- Line number references when applicable
- Code snippets showing "before" and "after" for suggestions
- Brief explanations of WHY each issue matters

Be constructive, specific, and actionable. Prioritize issues by severity.\n\n${code}`;

        const review = await generateContent(prompt);

        // Frontend expects plain text in response.data
        return res.send(review);
    } catch (error) {
        console.error('Error generating review:', error);
        return res.status(500).json({ error: 'Failed to generate review' });
    }
}

module.exports = {
    getResponse,
};