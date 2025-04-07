import React from "react";
import ProjectCard from "../components/ProjectCard";
import ChatIcon from "../assets/chat-icon.svg";

const HomePage = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[90vh]">
                <div className="my-16 grid 2xl:grid-cols-3 lg:grid-cols-2 gap-8 bg-gray-200 w-full h-full border-24 rounded-4xl border-white">
                    <ProjectCard
                        projectImg={ChatIcon}
                        name="Elemental Wars"
                        githubLink="https://github.com/Tarif24/Elemental_Wars"
                        liveLink="https://tarif24.itch.io/elementalwars"
                        tech="C#, Unity"
                        startDate="2024-1-24"
                        endDate="2024-4-15"
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;
