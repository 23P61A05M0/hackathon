# Hackathon Chatbot Project

This repository contains a simple AI chatbot web application built with Node.js, Express, and Google's Gemini API. The server serves static HTML and handles chat requests to the Gemini model.

## 📁 Project Structure

- `gemini-server.js` - Main Express server powered by Node.js. Handles HTTP routes and communicates with the Gemini API. Default port: **5000**.
- `index.html` - Frontend page with a basic chat interface that sends user messages to the backend.
- `package.json` - Defines project metadata and dependencies.
- `README.md` - Project documentation (this file).

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   cd hackathon
   npm install
   ```

2. **Configure API key**

   Open `gemini-server.js` and replace the placeholder `GEMINI_API_KEY` value with your actual API key.

3. **Start the server**

   ```bash
   npm start
   ```

   The server listens on port **5000** by default. You should see a message:
   ```
   ✅ Gemini chatbot running at http://localhost:5000
   ```

4. **Open the chat interface**

   Navigate to [http://localhost:5000](http://localhost:5000) in your browser. Type a message and hit "Send" to interact with the AI.

## 💡 Notes

- The frontend sends POST requests to `http://localhost:5000/chat`.
- Port numbers used:
  - Backend API: **5000**
  - Frontend: served from the same origin (localhost:5000)

## 📦 Dependencies

- `express` - Web framework for handling HTTP requests.
- `cors` - Enables Cross-Origin Resource Sharing.
- `body-parser` - Parses JSON request bodies.
- `axios` - HTTP client used to call the Gemini API.

## 🛠️ Customization

- You can modify `index.html` to change the UI or redirect the chat requests to a different port/host if you alter the server configuration.
- To run on a different port, update the `PORT` constant in `gemini-server.js` and adjust any client-side URLs accordingly.

---
