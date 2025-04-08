import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="relative flex justify-center items-center h-[10vh] w-full bg-gray-800 text-white p-4">
                <h1 className="text-4xl">MINI PROJECTS</h1>
                <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="absolute right-8 flex items-center hover:cursor-pointer"
                >
                    <IoHomeSharp size="3rem" />
                </Link>
            </nav>
        </>
    );
};

export default NavBar;
