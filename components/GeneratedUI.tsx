// components/GeneratedUI.tsx
import React from "react";

export default function GeneratedUI({ json }: { json: any }) {
  if (!json?.type) return null;

  switch (json.type) {
    case "planner":
      return (
        <div className="space-y-3 w-full max-w-lg">
          {json.blocks.map((b: any, i: number) => (
            <div key={i} className="bg-[#1e1e1e] text-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
              <p className="text-sm opacity-70">{b.time}</p>
              <p className="text-md font-semibold">{b.task}</p>
            </div>
          ))}
        </div>
      );

    case "flashcards":
      return (
        <div className="grid gap-4 w-full max-w-lg">
          {json.cards.map((c: any, i: number) => (
            <div key={i} className="bg-[#27272a] text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold mb-2">Q: {c.question}</p>
              <p className="opacity-70">A: {c.answer}</p>
            </div>
          ))}
        </div>
      );

    case "labtips":
      return (
        <div className="grid gap-3 w-full max-w-lg">
          {json.tips.map((t: string, i: number) => (
            <div key={i} className="bg-[#1f2937] text-white p-3 rounded-md shadow">
              💡 {t}
            </div>
          ))}
        </div>
      );

    default:
      return <div className="text-white">Unknown UI type</div>;
  }
}
