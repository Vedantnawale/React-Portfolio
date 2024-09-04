import React from 'react';
import img from '../../assets/img/om.jpg'; // Adjust the path to your image file

const AboutMe = () => {
    return (
        <section className="about-me mt-12 px-4" id="about-me">
            <h1 className="text-4xl font-bold text-center mb-8">
                About <span className="text-indigo-600">Me</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">

                {/* Profile Image */}
                <div className="profile flex justify-center md:justify-start">
                    <img
                        src={img}
                        alt="MyProfile"
                        className="hidden md:block  shadow-slate-400 w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg"
                    />
                </div>

                {/* About Me Text */}
                <div className="about-me-right text-center md:text-left max-w-xl">
                    <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                        Full Stack Javascript Developer
                    </h3>
                    <p className="text-gray-400 text-justify text-lg mb-6">
                        I am a recent graduate in Computer Engineering from the Government College of Engineering,
                        Yavatmal. I have a strong interest in web development, databases, and learning new programming
                        languages. I am actively seeking exciting opportunities in these areas. Additionally,
                        I am looking forward to exploring Android development in the coming years.
                        As an open-source enthusiast, I am passionate about contributing to the community.
                        I also freelance on various platforms as a side hustle, gaining practical experience
                        and honing my skills.
                    </p>
                    <a href="Vedant_A_Nawale_Resume_Main.pdf" download>
                        <button className="btn-2 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
                            Check My CV
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
