import React, { useState, useRef, useEffect } from "react";
import OpenAIApiCall from "./OpenAIApi";
import { PulseLoader } from "react-spinners";

const RAGChatBot = () => {
    const [inputText, setInputText] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    // Submit form handler
    const submitForm = async (e) => {
        e.preventDefault();

        if (inputText.trim() === "") return;

        setChatHistory((prev) => [
            ...prev,
            { role: "user", content: `${inputText}` },
        ]);

        try {
            setIsTyping(true);
            const response = await OpenAIApiCall([
                ...chatHistory,
                { role: "user", content: `${inputText}` },
            ]);

            setChatHistory((prev) => [
                ...prev,
                { role: response.role, content: response.content },
            ]);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setIsTyping(false);
        }

        setInputText("");
    };

    // Scroll to the bottom of the chat history when a new message is added
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);

    return (
        <>
            <div className="flex justify-center items-center h-[90vh]">
                <div className="flex justify-center items-center gap-8 bg-gray-200 w-full h-full p-8 border-24 border-white">
                    <div className="flex flex-col justify-end border-3 rounded-2xl w-[90%] h-[90%] bg-white">
                        <div className="flex flex-grow flex-col overflow-y-auto px-10 mb-4 h-fit max-h-fit">
                            {chatHistory.map(({ role, content }, index) => (
                                <div
                                    className={`w-fit mb-2 border-2 ${
                                        role === "user"
                                            ? "self-end"
                                            : "self-start"
                                    }`}
                                    key={index}
                                >
                                    <h1 className="">{`${content}`}</h1>
                                </div>
                            ))}
                            <div ref={chatEndRef}></div>
                            <PulseLoader
                                color="#000000"
                                loading={isTyping}
                                size={12}
                                speedMultiplier={1}
                            />
                        </div>
                        <form
                            className="flex justify-center items-end h-fit"
                            onSubmit={submitForm}
                        >
                            <div className="relative h-[3rem] w-full border-2 border-black rounded-[5rem] m-4">
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

export default RAGChatBot;
