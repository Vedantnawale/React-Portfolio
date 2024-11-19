import React from 'react';
import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
import js from '../../assets/img/javascript.png';
import java from '../../assets/img/java.png'; 
import bootstrap from '../../assets/img/bootstrap.png';
import tailwind from '../../assets/img/tailwindcss.png';
import react from '../../assets/img/react.png';
import mongo from '../../assets/img/mongodb.png';
import express from '../../assets/img/express.png';
import node from '../../assets/img/node.png';
import git from '../../assets/img/git.png';
import github from '../../assets/img/github.png';

const skillsData = [
  { name: 'HTML', image: html, proficiency: 'Expert', color: 'text-orange-500', borderColor: 'border-orange-500' },
  { name: 'CSS', image: css, proficiency: 'Expert', color: 'text-blue-500', borderColor: 'border-blue-500' },
  { name: 'JavaScript', image: js, proficiency: 'Expert', color: 'text-yellow-500', borderColor: 'border-yellow-500' },
  { name: 'Java', image: java, proficiency: 'Advanced', color: 'text-red-600', borderColor: 'border-red-600' },
  { name: 'Bootstrap', image: bootstrap, proficiency: 'Advanced', color: 'text-purple-500', borderColor: 'border-purple-500' },
  { name: 'TailwindCSS', image: tailwind, proficiency: 'Advanced', color: 'text-teal-500', borderColor: 'border-teal-500' },
  { name: 'ReactJS', image: react, proficiency: 'Advanced', color: 'text-blue-400', borderColor: 'border-blue-400' },
  { name: 'MongoDB', image: mongo, proficiency: 'Intermediate', color: 'text-green-500', borderColor: 'border-green-500' },
  { name: 'ExpressJS', image: express, proficiency: 'Intermediate', color: 'text-yellow-500', borderColor: 'border-yellow-500' },
  { name: 'NodeJS', image: node, proficiency: 'Intermediate', color: 'text-green-700', borderColor: 'border-green-700' },
  { name: 'Git', image: git, proficiency: 'Advanced', color: 'text-red-500', borderColor: 'border-red-500' },
  { name: 'GitHub', image: github, proficiency: 'Advanced', color: 'text-slate-300', borderColor: 'border-slate-300' },
];

const Skills = () => {
  return (
    <div className="container mt-5 mx-auto px-4 py-10 " id="skills">
      <h1 className="text-4xl font-bold text-center mb-8">
        Ski<span className="text-indigo-600">lls</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`card bg-base-100 shadow-xl flex flex-col items-center p-6 rounded-lg border-2 ${skill.borderColor} transform hover:scale-105 hover:shadow-2xl transition duration-300`}
          >
            <div className="relative group">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 transition duration-300 rounded-full"></div>
            </div>
            <h2 className={`text-xl font-semibold ${skill.color} transition duration-300`}>
              {skill.name}
            </h2>
            <p className="mt-2 text-sm text-gray-500">Proficiency: {skill.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
