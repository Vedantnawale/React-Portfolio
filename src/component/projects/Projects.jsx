import React from 'react'
import ecommerce from '../../assets/img/ecommerce.jpg'
import omgram from '../../assets/img/OmGram.png'
import lokation from '../../assets/img/lokation.avif'
import { FaExternalLinkAlt } from "react-icons/fa";
import studiobook from "../../assets/img/studiobook.png"
import blog from "../../assets/img/blog.png"
import pokedex from "../../assets/img/pokedex.avif"

const Projects = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mt-10 mb-8">
                Pro<span className="text-indigo-600">jects</span>
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-48 object-cover'
                            src={omgram}
                            alt="OmGram" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <h2 className="card-title text-slate-100">
                                Omgram
                            </h2>
                            <button className="badge badge-ghost"><FaExternalLinkAlt /></button>
                        </div>

                        <div className="card-actions mt-2 justify-start">
                            <div className="badge badge-primary text-slate-100">ReactJS</div>
                            <div className="badge badge-primary text-slate-100">Typescript</div>
                            <div className="badge badge-primary text-slate-100">Appwrite</div>
                            <div className="badge badge-primary text-slate-100">TailwindCSS</div>
                            <div className="badge badge-primary text-slate-100">ShadCN</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-48 object-cover'
                            src={studiobook}
                            alt="Studiobook" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <h2 className="card-title text-slate-100">
                                StudioBook
                            </h2>
                            <button className="badge badge-ghost"><FaExternalLinkAlt /></button>
                        </div>
                        <div className="card-actions mt-2 justify-start">
                            <div className="badge badge-primary text-slate-100">ReactJS</div>
                            <div className="badge badge-primary text-slate-100">Javascript</div>
                            <div className="badge badge-primary text-slate-100">TailwindCSS</div>
                            <div className="badge badge-primary text-slate-100">DaisyUI</div>
                            <div className="badge badge-primary text-slate-100">ExpressJS</div>
                            <div className="badge badge-primary text-slate-100">MongoDB</div>
                            <div className="badge badge-primary text-slate-100">Razorpay</div>
                            <div className="badge badge-primary text-slate-100">Cloudinary</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-48 object-cover'
                            src={blog}
                            alt="Blog" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <h2 className="card-title text-slate-100">
                                Vedant's Blog
                            </h2>
                            <button className="badge badge-ghost"><FaExternalLinkAlt /></button>
                        </div>
                        <div className="card-actions mt-2 justify-start">
                            <div className="badge badge-primary text-slate-100">ReactJS</div>
                            <div className="badge badge-primary text-slate-100">Javascript</div>
                            <div className="badge badge-primary text-slate-100">React-Hooks</div>
                            <div className="badge badge-primary text-slate-100">Redux</div>
                            <div className="badge badge-primary text-slate-100">TailwindCSS</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-48 object-cover'
                            src={ecommerce}
                            alt="Ecommerce" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <h2 className="card-title text-slate-100">
                                Ecommerce Website
                            </h2>
                            <button className="badge badge-ghost"><FaExternalLinkAlt /></button>
                        </div>
                        <div className="card-actions mt-2 justify-start">
                            <div className="badge badge-primary text-slate-100">HTML</div>
                            <div className="badge badge-primary text-slate-100">CSS</div>
                            <div className="badge badge-primary text-slate-100">PHP</div>
                            <div className="badge badge-primary text-slate-100">Javascript</div>
                            <div className="badge badge-primary text-slate-100">MySQL</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-48 object-cover'
                            src={lokation}
                            alt="Lokation" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <h2 className="card-title text-slate-100">
                                Lokation
                            </h2>
                            <button className="badge badge-ghost"><FaExternalLinkAlt /></button>
                        </div>
                        <div className="card-actions mt-2 justify-start">
                            <div className="badge badge-primary text-slate-100">HTML</div>
                            <div className="badge badge-primary text-slate-100">CSS</div>
                            <div className="badge badge-primary text-slate-100">PHP</div>
                            <div className="badge badge-primary text-slate-100">Javascript</div>
                            <div className="badge badge-primary text-slate-100">MySQL</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-48 object-cover'
                            src={pokedex}
                            alt="Pokedex" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <h2 className="card-title text-slate-100">
                                Pokedex
                            </h2>
                            <button className="badge badge-ghost"><FaExternalLinkAlt /></button>
                        </div>
                        <div className="card-actions mt-2 justify-start">
                            <div className="badge badge-primary text-slate-100">ReactJS</div>
                            <div className="badge badge-primary text-slate-100">Javascript</div>
                            <div className="badge badge-primary text-slate-100">API-Fetch</div>
                            <div className="badge badge-primary text-slate-100">Axios</div>
                            <div className="badge badge-primary text-slate-100">Pagination</div>
                        </div>
                    </div>
                </div>
            </div>
            <a target='_blank' href="#about-me" className="flex justify-center mt-4">
                <button className="btn btn-primary text-slate-100 hover:shadow-slate-400 hover:shadow-lg shadow-md mt-6">
                    More Projects...
                </button>
            </a>
        </div>
    )
}

export default Projects
