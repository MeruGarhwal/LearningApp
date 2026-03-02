import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are a friendly tutor for CBSE Class 6 students. 
- Use very simple vocabulary.
- Keep your answer to a maximum of 150 words.
- Use a warm, friendly tone.
- Include exactly one simple example when helpful.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const question = typeof body?.question === "string" ? body.question.trim() : "";
    const preferHindi = Boolean(body?.preferHindi);

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 503 }
      );
    }

    const openai = new OpenAI({ apiKey });

    const langHint = preferHindi ? " Respond in Hindi (हिंदी में)." : "";
    const userPrompt = `Explain this to a CBSE Class 6 student in very simple language with one example: ${question}${langHint}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 200,
    });

    const content = completion.choices[0]?.message?.content?.trim();

    if (!content) {
      return NextResponse.json(
        { error: "No response from the assistant" },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer: content });
  } catch (error) {
    console.error("[ask-doubt]", error);

    if (error instanceof OpenAI.APIError) {
      const status = error.status ?? 500;
      // Friendly message for quota/billing (429)
      if (status === 429) {
        return NextResponse.json(
          {
            error: "Ask Doubt is temporarily unavailable. The AI service has reached its usage limit. Please try again later or contact your teacher.",
            code: "QUOTA_EXCEEDED",
          },
          { status: 503 }
        );
      }
      const message = error.message ?? "OpenAI request failed";
      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
