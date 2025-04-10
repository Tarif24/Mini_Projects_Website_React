import React, { useState, useEffect } from "react";
import OpenAIApiCall from "./OpenAIApi";

const AIChatBot = () => {
    const [inputText, setInputText] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();

        setChatHistory((prev) => [
            ...prev,
            { type: "user", content: `${inputText}` },
        ]);
        const response = await OpenAIApiCall(chatHistory);

        setChatHistory((prev) => [
            ...prev,
            { type: response.role, content: response.content },
        ]);
        setInputText("");
    };

    return (
        <>
            <div className="flex justify-center items-center h-[90vh]">
                <div className="flex justify-center items-center gap-8 bg-gray-200 w-full h-full p-8 border-24 border-white">
                    <div className="flex flex-col justify-center border-3 rounded-2xl h-[90%] w-[90%] bg-white">
                        <div className="flex flex-col justify-end items-left h-full w-full px-10 mb-4 overflow-y-scroll ">
                            {chatHistory.map(({ type, content }, index) => (
                                <h1
                                    key={index}
                                    className="text-left text-2xl mb-2 w-[100%]"
                                >
                                    {`${type.toUpperCase()}: ${content}`}
                                </h1>
                            ))}
                        </div>
                        <form
                            className="flex flex-1 justify-center items-end w-full h-full"
                            onSubmit={submitForm}
                        >
                            <div className="relative h-[3rem] w-full border-2 border-black rounded-[5rem] mb-4 mx-4">
                                <input
                                    type="text"
                                    placeholder="What do you want to know..."
                                    className="relative h-full px-5 w-full focus:outline-none rounded-[5rem]"
                                    value={inputText}
                                    onChange={(e) =>
                                        setInputText(e.target.value)
                                    }
                                />
                                <button
                                    className="absolute right-0 top-0 h-full bg-blue-500 text-white rounded-[5rem] px-4 py-2 hover:cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIChatBot;
