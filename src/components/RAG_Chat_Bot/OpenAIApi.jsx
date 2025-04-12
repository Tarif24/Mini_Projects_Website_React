import OpenAI from "openai";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const OpenAIApiCall = async (chatHistory) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: chatHistory,
        n: 1,
    });

    return response.choices[0].message;
};

export default OpenAIApiCall;
