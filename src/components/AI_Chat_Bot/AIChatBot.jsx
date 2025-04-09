import React from "react";

const AIChatBot = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[90vh]">
                <div className="my-16 flex flex-wrap justify-center items-center gap-8 bg-gray-200 w-full h-full p-8 border-24 border-white">
                    <div className="flex justify-center items-end border-3 rounded-2xl h-[90%] w-[90%]">
                        <div className="relative h-[3rem] w-full border-2 border-black rounded-[5rem] mb-4 mx-4">
                            <input
                                type="text"
                                placeholder="What do you want to know..."
                                className="relative h-full p-3 w-full focus:outline-none rounded-[5rem]"
                            />
                            <button className="absolute right-0 top-0 h-full bg-blue-500 text-white rounded-[5rem] px-4 py-2">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIChatBot;
