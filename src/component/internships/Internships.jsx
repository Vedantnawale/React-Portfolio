import React from 'react';
import iot from '../../assets/img/iot.jpg';
import physicsWalllah from '../../assets/img/pww.jpg';
import skillForge from '../../assets/img/skillforge.jpg';

const Internships = () => {
  return (
    <div className="container mx-auto" id="internships">
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">
        Intern<span className="text-indigo-600">Ships</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-2">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src={iot}
              alt="IOT"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              IOT
              <div className="badge badge-success">Offline</div>
            </h2>
            <p className='text-justify'>
              I Done an internship In Symphonix. IoT offers a valuable opportunity
              to bridge the gap between theoretical knowledge and practical implementation
              , preparing individuals for a future in a field that continues to revolutionize
              industries and the way we interact with technology & an amazing experience.
            </p>
            <div className="card-actions justify-end">
              <a target='blank' href="https://drive.google.com/file/d/1-gzPhRoDMg_P3OE6FWbGsdFjYwzioCZC/view?usp=sharing">
                <button className="badge badge-outline p-4 bg-indigo-600 text-slate-100">View</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src={physicsWalllah}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Web Development
              <div className="badge badge-ghost">Online</div>
            </h2>
            <p className='text-justify'>
              I Done an internship in PhysicsWallah an internship focused on web development
              with a calculator project offers a practical and structured learning experience.
              It equips interns with fundamental web development skills, problem-solving abilities.
              I focused on front end web development part & an amazing experience.
            </p>
            <div className="card-actions justify-end">
              <a target='blank' href="https://drive.google.com/file/d/1l3M_4IFcNs7wi9Pfau_QiJwYhIwyJNI8/view?usp=sharing">
                <button className="badge badge-outline p-4 bg-indigo-600 text-slate-100">View</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src={skillForge}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Full-Stack Web
              <div className="badge badge-ghost">Online</div>
            </h2>
            <p className='text-justify'>
              I Done an internship in SkillForge full-stack web development internship,
              It is useful for understanding of the end-to-end development process.
              This experience useful for a career in web development, whether we choose
              to specialize in front-end, back-end, or as a full-stack developer.
            </p>
            <div className="card-actions justify-end">
              <a target='blank' href="https://drive.google.com/file/d/1e1EK_PX3LceWzsaCG3lB-C488v8GQLe8/view?usp=sharing">
                <button className="badge badge-outline p-4 bg-indigo-600 text-slate-100">View</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;