import OpenAI from "openai";

// Create an instance of the OpenAI class with the API key
const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

// Function is called with the chat history and returns the response from OpenAI
const OpenAIApiCall = async (chatHistory) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: chatHistory,
        n: 1,
    });

    return response.choices[0].message;
};

export default OpenAIApiCall;
