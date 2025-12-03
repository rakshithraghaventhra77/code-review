# Code Review - AI LeetCode Solution Analyzer

AI-powered code reviewer for technical interview preparation. Analyzes your LeetCode solutions and provides feedback on complexity, edge cases, optimizations, and interview tips.

---

## Tech Stack

**Frontend:** React, Vite, react-simple-code-editor, Prism.js, react-markdown  
**Backend:** Node.js, Express, Google Gemini AI

---

## Installation

### Prerequisites
- Node.js v18+
- Google Gemini API key ([Get one here](https://ai.google.dev/))

### Setup

**Backend:**
```bash
cd Backend
npm install
```

Create `.env` file:
```env
GOOGLE_GEMINI_KEY=your_api_key_here
```

Start server:
```bash
npx nodemon server.js
```

**Frontend:**
```bash
cd Frontend
npm install
npm run dev
```

Backend runs at `http://localhost:3000`  
Frontend runs at `http://localhost:5173`

---

## Usage

1. Paste your code in the editor
2. Click "Review"
3. Get AI feedback on:
   - Time/space complexity
   - Edge cases
   - Optimization suggestions
   - Alternative approaches
   - Interview tips

---

## API

**POST** `/ai/get-response`
```json
{
  "code": "your code here"
}
```

Returns Markdown-formatted review.

---

## Project Structure
```
code-review/
├── Backend/
│   ├── src/
│   │   ├── controllers/ai.controller.js
│   │   ├── routes/ai.routes.js
│   │   └── services/ai.service.js
│   └── server.js
└── Frontend/
    └── src/
        ├── App.jsx
        └── main.jsx
```


## Author

Rakshith Raghaventhra  
GitHub: [@rakshithraghaventhra77](https://github.com/rakshithraghaventhra77)