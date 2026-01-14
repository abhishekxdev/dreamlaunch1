
import { GoogleGenAI, Type } from "@google/genai";
import { CRMRecord } from "../types";

export const analyzeCRMData = async (data: CRMRecord[]) => {
  // Always use a named parameter and direct process.env.API_KEY reference
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Analyze the following CRM data and provide 3 key business insights in a JSON format.
  Data: ${JSON.stringify(data)}
  
  The response should follow this schema:
  {
    "insights": [
      {
        "title": "string",
        "description": "string",
        "type": "positive" | "negative" | "neutral"
      }
    ]
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            insights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  type: { type: Type.STRING }
                },
                required: ["title", "description", "type"]
              }
            }
          },
          required: ["insights"]
        }
      }
    });

    // Access .text property directly and trim whitespace
    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return null;
  }
};
