import React from "react";
import ProjectCard from "../components/ProjectCard";
import ChatIcon from "../assets/chat-icon.svg";

const HomePage = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[90vh]">
                <div className="my-16 flex flex-wrap justify-left items-left gap-8 bg-gray-200 w-full h-full p-8 border-24 border-white">
                    <ProjectCard
                        projectImg={ChatIcon}
                        name="AI Chat Bot"
                        githubLink="https://github.com/Tarif24/Mini_Projects_Website_React/tree/main/src/components/AI_Chat_Bot"
                        liveLink="/aichatbot"
                        tech="React, OpenAI API, Tailwind CSS"
                        startDate="2025-4-8"
                        endDate="2025-4-10"
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;
