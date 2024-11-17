import React, { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";

const Navbar = () => {
    const [theme, setTheme] = useState('night'); // Default to "night"

    useEffect(() => {
        // Load saved theme or default to "night"
        const savedTheme = localStorage.getItem('theme') || 'night';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'night' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme in localStorage
    };

    return (
        <div className="navbar bg-base-100 text-lg">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li>
                        <details>
                            <summary>Coding</summary>
                            <ul className="p-2">
                                <li><a>Leetcode</a></li>
                                <li><a>Hackerrank</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Projects</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="m-5 text-xl" onClick={toggleTheme}>
                    <CiLight />
                </button>
                <a className="btn hover:bg-gray-400 hover:text-black">Contact Me</a>
            </div>
        </div>
    );
};

export default Navbar;
