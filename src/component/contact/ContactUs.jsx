import React, { useRef, useState } from 'react';
import FormInput from '../reusable/FormInput';
import Button from '../reusable/Button';
import ContactDetails from './ContactDetails';
import emailjs from '@emailjs/browser';
import conf from '../../conf/conf';


const ContactUs = () => {
    const form = useRef();
    const [alertMessage, setAlertMessage] = useState(null); // State for alert message
    const [alertType, setAlertType] = useState(null); // State for alert type (success/error)

    const emailService = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const emailTemp = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    const emailKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


    const validateForm = () => {
        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !message) {
            setAlertMessage("All fields are required.");
            setAlertType("error");
            return false;
        }
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setAlertMessage("Please enter a valid email address.");
            setAlertType("error");
            return false;
        }
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate the form before sending the email
        if (!validateForm()) return;

        emailjs
            .sendForm(
                emailService, emailTemp, form.current, emailKey,
                console.log(conf.emailService)
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setAlertMessage("Message Sent Successfully!");
                    setAlertType("success");
                    e.target.reset(); // Reset form after success
                },
                (error) => {
                    console.log(error.text);
                    setAlertMessage("Failed to send message. Please try again.");
                    setAlertType("error");
                }
            );
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertType(null);
    };

    return (
        <div className='mt-12 px-4' id='contact-me'>
            <h1 className="text-4xl font-bold text-center mb-8">
                Contact <span className="text-indigo-600">Me</span>
            </h1>
            <div className='flex flex-col lg:flex-row justify-center gap-6'>
                {/* Form section */}
                <div className="w-full lg:w-1/2 relative">
                    {/* Alert Message */}
                    {alertMessage && (
                        <div
                            className={`absolute top-0 left-0 w-full px-4 py-3 mb-4 rounded-lg text-white ${
                                alertType === "success"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <span>{alertMessage}</span>
                                <button
                                    className="text-white font-bold"
                                    onClick={closeAlert}
                                    aria-label="Close Alert"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="leading-loose mt-10">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
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
                                inputName="user_name"
                                placeholderText="Your Name"
                                ariaLabelName="Name"
                            />
                            <FormInput
                                inputLabel="Email"
                                labelFor="email"
                                inputType="email"
                                inputId="email"
                                inputName="user_email"
                                placeholderText="Your email"
                                ariaLabelName="Email"
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
                                    value="Send"
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
