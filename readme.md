# Agent Marketing – Real Estate AI Sales Assistant

A Node.js web application that simulates a human-like AI sales agent for the real estate industry. The assistant interacts with users, gathers requirements, classifies leads (Hot, Cold, Invalid), and logs conversations and metadata to MongoDB.

## Features

- **Conversational AI**: Engages users with context-aware questions about location, property type, budget, timeline, and purpose.
- **Lead Classification**: Automatically classifies leads as Hot, Cold, or Invalid based on user responses.
- **Logging**: Stores conversation transcripts and extracted metadata in MongoDB.
- **Web Interface**: Simple chat UI built with HTML, CSS, and vanilla JS.
- **OpenAI Integration**: Uses GPT-4o for natural language understanding and response generation.
- **Extensible Tools**: Modular tool system for logging and future expansion.

## Project Structure

- **index.js**: Main server file (Express app, OpenAI integration, chat endpoint).
- **systemPrompts.js**: System prompt and classification logic for the AI agent.
- **tools.js**: Tool definitions (currently logging to MongoDB).
- **lib/connect.js**: MongoDB connection helper.
- **public/**: Static assets (chat UI, CSS, avatars).
- **log.txt**: Example of logged lead data (for reference).

## Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/debajoti/marketing-lead-classification-agent.git
   cd marketing-lead-classification-agent
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**

   - Copy `.env.local` to `.env` and fill in your credentials:
     ```
     OPENAI_API_KEY=your-openai-api-key
     MONGO_URI=your-mongodb-uri
     INDUSTRY=real estate
     ```

4. **Start the server**

   ```sh
   npm start
   ```

   The app will run at [http://localhost:8000](http://localhost:8000).

## Usage

- Open [http://localhost:8000](http://localhost:8000) in your browser.
- Chat with the AI assistant about your real estate needs.
- The assistant will ask follow-up questions, classify your lead, and log the conversation.

## Customization

- **Industry**: Change the `INDUSTRY` variable in `.env` to adapt the assistant for other domains.
- **Prompts & Logic**: Edit [`systemPrompts.js`](systemPrompts.js) for prompt engineering and classification rules.
- **Tools**: Add new tools in [`tools.js`](tools.js) and reference them in the system prompt.


## Dependencies

- [express](https://www.npmjs.com/package/express)
- [openai](https://www.npmjs.com/package/openai)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)
