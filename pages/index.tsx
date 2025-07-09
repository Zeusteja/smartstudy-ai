"use client";
import GeneratedUI from "../components/GeneratedUI";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [subject, setSubject] = useState("general");
  const [response, setResponse] = useState("");
  const [imageName, setImageName] = useState("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", text);
    formData.append("subject", subject);
    if (image) formData.append("image", image);
    
    const res = await fetch("/api/chat", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResponse(data.response);
  };
  function isJSON(str: string) {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  }
  
  return (
    <main className="min-h-screen bg-[#1c1b1a] text-[#e7e3d8] px-6 py-12 font-serif">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center">SmartStudy.AI</h1>
        <p className="text-center text-[#aaa] italic">Your quirky, dark-academia EdTech tutor 🤓📚</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[#2c2b29] p-6 rounded-2xl shadow-xl"
          encType="multipart/form-data"
        >
          <label className="flex flex-col">
            <span className="mb-1">Choose Subject:</span>
            <select
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#1a1918] text-[#e7e3d8] p-2 rounded-md border border-[#555]"
            >
              <option value="general">🎓 General</option>
              <option value="math">➕ Math</option>
              <option value="physics">🌌 Physics</option>
              <option value="chemistry">⚗️ Chemistry</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="mb-1">Ask a Question:</span>
            <textarea
              name="text"
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-[#1a1918] text-[#e7e3d8] p-3 rounded-md border border-[#555] resize-none"
              placeholder="e.g., Can you explain the Pythagorean theorem?"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1">Upload an Image (optional):</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImage}
              className="file:bg-[#444] file:border-none file:text-white file:px-4 file:py-1 file:rounded-md"
            />
            {imageName && (
              <span className="text-sm mt-1 text-[#bbb]">Selected: {imageName}</span>
            )}
          </label>

          <button
            type="submit"
            className="bg-[#7f5af0] hover:bg-[#9c7ff9] text-white font-bold py-2 px-4 rounded-md transition-all"
          >
            Ask SmartStudy
          </button>
        </form>

        {response && (
          <div className="bg-[#292826] p-6 rounded-lg border border-[#444]">
           <h2 className="text-lg mb-2 font-semibold">📜 SmartStudy says:</h2>
           {isJSON(response) ? (
             <GeneratedUI json={JSON.parse(response)} />
           ) : (
             <p className="whitespace-pre-line text-[#d6d3cb] leading-relaxed">{response}</p>
           )}
          </div>
        )}

      </div>
    </main>
  );
}
