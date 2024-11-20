import React, { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import velogo from "../../assets/img/velogo.png"

const Navbar = () => {
    const [theme, setTheme] = useState('night'); // Default to "night"
    const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

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

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            if (sidebarOpen) {
                setSidebarOpen(false); // Close sidebar after scrolling
            }
        }
    };

    return (
        <>
            <div className="navbar bg-base-100 text-lg fixed z-50 shadow-lg">
                <div className="navbar-start">
                    {/* Sidebar toggle button */}
                    <button className="lg:hidden btn btn-ghost" onClick={toggleSidebar}>
                        <FiMenu className="text-2xl" />
                    </button>

                        <img
                            src={velogo}
                            alt="Logo"
                            className="h-8 w-auto"
                        />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <button onClick={() => scrollToSection('about')} className="btn text-base  btn-link no-underline hover:no-underline hover:text-slate-100">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('skills')} className="btn text-base btn-link no-underline hover:no-underline hover:text-slate-100">
                                Skills
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className="btn text-base btn-link no-underline hover:no-underline hover:text-slate-100">
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('internships')} className="btn text-base btn-link no-underline hover:no-underline hover:text-slate-100">
                                Internships
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="m-5 text-xl" onClick={toggleTheme}>
                        <CiLight />
                    </button>
                    <button
                        onClick={() => scrollToSection('contact-me')}
                        className="btn hover:bg-gray-400 text-slate-100 bg-indigo-600 hover:text-black"
                    >
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Sidebar menu */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 mt-20 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                >
                    <div
                        className="bg-base-100 w-64 h-full shadow-lg z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="btn btn-ghost absolute right-36"
                            onClick={toggleSidebar}
                        >
                            ✕
                        </button>
                        <ul className="menu p-4 w-full">
                            <li>
                                <button onClick={() => scrollToSection('about')} className="btn text-base btn-link no-underline hover:no-underline hover:text-slate-100">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('skills')} className="btn text-base btn-link no-underline hover:no-underline hover:text-slate-100">
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('projects')} className="btn text-base btn-link no-underline hover:no-underline hover:text-slate-100">
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('internships')} className="btn text-base btn-link no-underline hover:no-underline hover:text-slate-100">
                                    Internships
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
