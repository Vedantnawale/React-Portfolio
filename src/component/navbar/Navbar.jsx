import React from 'react'
import { CiLight } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 text-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li>
                            <a>Blogs</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
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
                <button className='m-5 text-xl'><CiLight /></button>
                <a className="btn hover:bg-gray-400 hover:text-black">Contact Me</a>
            </div>
        </div>
    )
}

export default Navbar