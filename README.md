# 🧠 SmartStudy.AI

> A quirky, multimodal, RAG-powered EdTech chatbot built with Next.js, Vercel AI SDK, and OpenRouter — designed to assist students in Math, Physics, and Chemistry with tool-calling magic and a dark academia aesthetic.

---

## 📦 Features

- 🗣️ **Text + Image Input**
- 📚 **RAG Integration** (subject-based context from local `.txt` files)
- 🧪 **Tool Calling** for Math, Physics, Chemistry
- 🎨 **Dark Academia UI** (Creative & Quirky design)
- 🧱 **Next.js App Router** using TypeScript
- 🧠 **OpenRouter AI (Mixtral)** for smart completions
- 🌐 **Vercel Deployed** (publicly accessible link)
- 📂 Modular folder structure with clean code and documentation

---

## 🧰 Tools & Tech Stack


Framework: Next.js (App Router)
Styling: Tailwind CSS
AI Backend: OpenRouter (Mixtral 8x7b)
Deployment: Vercel
Image Upload: Formidable (multipart handling)
RAG: Custom local `.txt` loader per subject
Tool-Calling: Inbuilt EdTech utilities (see below)
GeneratedUI

Tool-Calling
Math:
  - solve:expression
  - calculate:equation
  - math roast
  - random theorem
  - graph:function

Physics:
  - constant:constant_name
  - simulate:concept
  - ask einstein
  - random paradox

Chemistry:
  - molecular weight:compound
  - bond:bond_type
  - chem joke
  - lab tip

General:
  - recommend topic
  - today's study plan

📦 smartstudy-ai
 ┣ 📂 app
 ┃ ┗ 📜 page.tsx         // Frontend UI
 ┣ 📂 pages/api
 ┃ ┗ 📜 chat.ts          // API handler with RAG + tool calling
 ┣ 📂 lib
 ┃ ┗ 📜 toolbox.ts       // All tool-calling logic
 ┣ 📂 rag-data
 ┃ ┣ 📜 math.txt
 ┃ ┣ 📜 physics.txt
 ┃ ┗ 📜 chemistry.txt
 ┣ 📜 README.md
 ┣ 📜 .env.local         // (OPENROUTER_API_KEY=...)


To run after cloning, just replace your api key in the environment variables file. Then you can run the Dev.