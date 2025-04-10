import OpenAI from "openai";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const OpenAIApiCall = async (message) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
        n: 1,
    });

    console.log(response.choices[0].message.content);
    console.log("hey");
};

export default OpenAIApiCall;
