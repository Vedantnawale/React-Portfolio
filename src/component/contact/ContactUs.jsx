import React from 'react'
import FormInput from '../reusable/FormInput';
import Button from '../reusable/Button';
import ContactDetails from './ContactDetails';

const ContactUs = () => {
    return (
        <div className='mt-12 px-4'>
            <h1 className="text-4xl font-bold text-center mb-8">
                Contact <span className="text-indigo-600">Me</span>
            </h1>
            <div className='flex flex-col lg:flex-row justify-center gap-6'>
                {/* Form section */}
                <div className="w-full lg:w-1/2">
                    <div className="leading-loose">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            className="max-w-xl mx-auto lg:mx-0 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                        >
                            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                                Contact Form
                            </p>
                            <FormInput
                                inputLabel="Full Name"
                                labelFor="name"
                                inputType="text"
                                inputId="name"
                                inputName="name"
                                placeholderText="Your Name"
                                ariaLabelName="Name"
                            />
                            <FormInput
                                inputLabel="Email"
                                labelFor="email"
                                inputType="email"
                                inputId="email"
                                inputName="email"
                                placeholderText="Your email"
                                ariaLabelName="Email"
                            />
                            <FormInput
                                inputLabel="Subject"
                                labelFor="subject"
                                inputType="text"
                                inputId="subject"
                                inputName="subject"
                                placeholderText="Subject"
                                ariaLabelName="Subject"
                            />

                            <div className="mt-6">
                                <label
                                    className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                                    id="message"
                                    name="message"
                                    cols="14"
                                    rows="6"
                                    aria-label="Message"
                                ></textarea>
                            </div>

                            <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                                <Button
                                    title="Send Message"
                                    type="submit"
                                    aria-label="Send Message"
                                />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Contact details section */}
                <div className="w-full lg:w-1/2">
                    <ContactDetails />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
