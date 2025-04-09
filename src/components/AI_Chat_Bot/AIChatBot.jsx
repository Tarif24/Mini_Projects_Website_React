import React, { useState } from "react";

const AIChatBot = () => {
    const [inputText, setInputText] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        console.log("Input Text:", inputText);
    };

    return (
        <>
            <div className="flex justify-center items-center h-[90vh]">
                <div className="flex justify-center items-center gap-8 bg-gray-200 w-full h-full p-8 border-24 border-white">
                    <form
                        className="flex justify-center items-center w-full h-full"
                        onSubmit={submitForm}
                    >
                        <div className="flex justify-center items-end border-3 rounded-2xl h-[90%] w-[90%] bg-white">
                            <div className="relative h-[3rem] w-full border-2 border-black rounded-[5rem] mb-4 mx-4">
                                <input
                                    type="text"
                                    placeholder="What do you want to know..."
                                    className="relative h-full px-5 w-full focus:outline-none rounded-[5rem]"
                                    onChange={(e) =>
                                        setInputText(e.target.value)
                                    }
                                />
                                <button
                                    className="absolute right-0 top-0 h-full bg-blue-500 text-white rounded-[5rem] px-4 py-2"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AIChatBot;
