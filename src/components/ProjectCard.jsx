import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const ProjectCard = ({
    projectImg,
    name,
    githubLink,
    liveLink,
    tech,
    startDate,
    endDate,
}) => {
    const [isAboutActive, setIsAboutActive] = useState(false);

    const onGitHubClicked = () => {
        window.open(githubLink);
    };

    const onLiveClicked = () => {
        window.open(liveLink);
    };

    const buttonStyle = `sm:text-[1rem] text-[0.9rem] font-medium border-2 rounded-[4rem] border-[#555555] align-text-center p-4 sm:w-[8rem] flex-1 transition duration-300 ease-in-out hover:text-white hover:bg-[#555555] hover:cursor-pointer ${
        isAboutActive ? "" : "z-1"
    }`;

    const infoIconStyle = isAboutActive ? "text-white" : "text-black";

    const aboutStyle = `absolute top-0 justify-self-center flex flex-col gap-4 justify-center items-center text-white w-full h-full bg-[#414141] border-4 rounded-4xl border-white transition duration-250 ease-in-out ${
        isAboutActive ? "opacity-100" : "opacity-0"
    }`;

    return (
        <div className="relative flex flex-1 flex-col gap-6 items-center p-6 bg-[#f7f7f7] border-2 rounded-4xl border-[#555555] lg:w-full md:w-[80%] justify-self-center pb-12 sm:pb-6">
            <div className={aboutStyle}>
                <h1 className="text-[2rem] sm:text-[3rem] font-bold mb-8">
                    About
                </h1>
                <h1 className="text-[1rem] sm:text-[1.5rem] text-center w-[70%]">
                    <b>Built With:</b> {tech}
                </h1>
                <h1 className="text-[1rem] sm:text-[1.5rem] text-center">
                    <b>Start Date:</b> {startDate}
                </h1>
                <h1 className="text-[1rem] sm:text-[1.5rem] text-center">
                    <b>End Date:</b> {endDate}
                </h1>
            </div>

            <img
                className="sm:size-[90%] size-[100%] rounded-4xl border-1 border-[#555555]"
                src={projectImg}
                alt="Project 1 Image"
            />
            <h1 className="font-bold sm:text-3xl text-1xl">{name}</h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:w-fit w-full">
                <button className={buttonStyle} onClick={onGitHubClicked}>
                    GitHub
                </button>
                <button className={buttonStyle} onClick={onLiveClicked}>
                    Live Demo
                </button>
            </div>
            <div
                className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 hover:cursor-pointer"
                onClick={() => {
                    isAboutActive
                        ? setIsAboutActive(false)
                        : setIsAboutActive(true);
                }}
            >
                <IoInformationCircleOutline
                    size="2rem"
                    className={infoIconStyle}
                />
            </div>
        </div>
    );
};

export default ProjectCard;
