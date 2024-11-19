import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import Typed from 'typed.js';
import img from '../../assets/img/om.jpg';

const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack JS Developer", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    typedRef.current = new Typed(".text", options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="about px-4 py-10" id="about">
      <div className="container pt-20 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left About Section */}
        <div className="left-about text-center md:text-left px-4 md:px-8 md:w-1/2">
          <h3 className="text-lg font-semibold text-gray-400">Hello, It's Me</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-400 mt-2 animate-fadeInSlideUp">
            Vedant A. Nawale!
          </h1>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            I'm an aspiring <strong className="text text-indigo-600"></strong>
            <br />
            who is currently working as a <span className="text-indigo-600">Freelancer</span> for <span className="text-indigo-600">National and International Clients.</span>
          </p>

          {/* Social Icons */}
          <ul className="icons text-lg flex justify-center md:justify-start mt-6">
            <li>
              <a
                href="https://www.linkedin.com/in/vedant-nawale-9a31ab215/"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-indigo-400 rounded-full text-xl text-indigo-400 m-2.5 shadow-lg shadow-slate-400 hover:shadow-slate-800 hover:shadow-lg animate-fadeInSlideUp"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Vedantnawale"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-indigo-400 rounded-full text-xl text-indigo-400 m-2.5 shadow-lg shadow-slate-400 hover:shadow-slate-800 hover:shadow-lg animate-fadeInSlideUp"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/vedantashokrao.nawale/"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-indigo-400 rounded-full text-xl text-indigo-400 m-2.5 shadow-lg shadow-slate-400 hover:shadow-slate-800 hover:shadow-lg animate-fadeInSlideUp"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vedant_dz/"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-indigo-400 rounded-full text-xl text-indigo-400 m-2.5 shadow-lg shadow-slate-400 hover:shadow-slate-800 hover:shadow-lg animate-fadeInSlideUp"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>

          {/* More About Me Button */}
          <a href="#about-me" className="mt-8">
            <button className="btn btn-primary bg-indigo-600 hover:shadow-slate-400 hover:shadow-lg shadow-md text-slate-100 mt-6">
              More About Me
            </button>
          </a>
        </div>

        {/* Right About Section */}
        <div className="right-about md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img 
            src={img} 
            alt="MyProfile" 
            className="w-40 sm:w-52 md:w-80 rounded-full shadow-slate-400 shadow-lg animate-fadeInSlideUp object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
