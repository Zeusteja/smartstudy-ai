import {
    smartCalculator,
    randomTheorem,
    mathRoast,
    plotFunction,
    getPhysicsConstant,
    randomPhysicsParadox,
    askEinstein,
    molecularWeight,
    bondExplain,
    chemistryJoke,
    randomLabTip,
    topicRecommender,
    dailyPlanner,
  } from "@/lib/toolbox";
  
  import type { NextApiRequest, NextApiResponse } from "next";
  import formidable from "formidable";
  import fs from "fs";
  import path from "path";
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  function parseForm(
    req: NextApiRequest
  ): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
    const form = formidable({ multiples: false });
  
    return new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });
  }
  
  function getSubjectContext(subject: string): string {
    try {
      const filePath = path.resolve(process.cwd(), "rag-data", `${subject}.txt`);
      return fs.readFileSync(filePath, "utf8").slice(0, 2000); // Max 2KB
    } catch {
      return "";
    }
  }
  
  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("✅ /api/chat called");
  
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
      const { fields, files } = await parseForm(req);
  
      const textField = Array.isArray(fields.text) ? fields.text[0] : fields.text || "";
      const subjectField = Array.isArray(fields.subject) ? fields.subject[0] : fields.subject || "general";
      const lower = textField.toLowerCase();
  
      // ✅ TOOL CALLING LOGIC
      if (lower.startsWith("solve:") || lower.startsWith("calculate:")) {
        return res.status(200).json({ response: smartCalculator(textField.split(":")[1]) });
      }
  
      if (lower.startsWith("graph:")) {
        return res.status(200).json({ response: plotFunction(textField.split(":")[1]) });
      }
  
      if (lower.includes("math roast")) {
        return res.status(200).json({ response: mathRoast() });
      }
  
      if (lower.includes("random theorem")) {
        return res.status(200).json({ response: randomTheorem() });
      }
  
      if (lower.includes("recommend topic")) {
        return res.status(200).json({ response: JSON.stringify(topicRecommender()) });
      }
  
      if (lower.includes("today's study plan")) {
        return res.status(200).json({ response: JSON.stringify(dailyPlanner()) });
      }
  
      if (lower.startsWith("constant:")) {
        return res.status(200).json({ response: getPhysicsConstant(textField.split(":")[1]) });
      }
  
      if (lower.startsWith("simulate:")) {
        return res.status(200).json({ response: `🧪 I'd simulate: ${textField.split(":")[1]} — just imagine it!` });
      }
  
      if (lower.includes("random paradox")) {
        return res.status(200).json({ response: randomPhysicsParadox() });
      }
  
      if (lower.includes("ask einstein")) {
        return res.status(200).json({ response: askEinstein() });
      }
  
      if (lower.startsWith("molecular weight:")) {
        return res.status(200).json({ response: molecularWeight(textField.split(":")[1]) });
      }
  
      if (lower.startsWith("bond:")) {
        return res.status(200).json({ response: bondExplain(textField.split(":")[1]) });
      }
  
      if (lower.includes("chem joke")) {
        return res.status(200).json({ response: chemistryJoke() });
      }
  
      if (lower.includes("lab tip")) {
        return res.status(200).json({ response: randomLabTip() });
      }
  
      // 📚 RAG CONTEXT
      const context = getSubjectContext(subjectField);
      let prompt = context
        ? `You are SmartStudy AI. Here is some background for the subject "${subjectField}":\n\n${context}\n\nNow answer this:\n${textField}`
        : textField;
  
      // 🖼️ IMAGE HANDLING
      const image = Array.isArray(files.image) ? files.image[0] : files.image;
      if (image && image.filepath) {
        const buffer = fs.readFileSync(image.filepath);
        const base64 = buffer.toString("base64");
        prompt += `\n\nAlso interpret this image (base64 partial): data:image;base64,${base64.slice(0, 100)}...`;
      }
  
      // 🤖 MIXTRAL CALL
      const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistralai/mixtral-8x7b-instruct",
          messages: [
            {
              role: "system",
              content: "You are SmartStudy.AI, a helpful, slightly quirky EdTech tutor.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });
  
      const json = await aiRes.json();
      const reply = json?.choices?.[0]?.message?.content || "🧠 No response from AI.";
  
      return res.status(200).json({ response: reply });
    } catch (err: any) {
      console.error("❌ Error in /api/chat:", err);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  }
  