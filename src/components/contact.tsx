import { forwardRef, useState } from "react";
import { TProps } from "../utils/types";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { details, links } from "../utils/constants";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import Loader from "./loader";

export default forwardRef<HTMLDivElement, TProps>(({
    theme
}, ref) => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID as string,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
                e.target,
                { publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY }
            ).then(
                () => {
                    setIsLoading(false);
                    setFormData({ name: '', email: '', message: '' });
                    toast.success('Thanks for contacting will get back to you shortly');
                },
                (error) => {
                    setIsLoading(false);
                    toast.success('Failed to contact');
                },
            );
    };

    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-600';
    const iconColor = theme === 'dark' ? 'white' : 'black';

    return (
        <div ref={ref}>
            <h1 className="text-high font-bolder text-yellow-400 my-5">GET IN TOUCH !</h1>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-6 flex flex-col justify-center'>
                    <p className={`font-sans text-xl ${textColor} py-8`}>
                        Feel free to get in touch with me.<br />
                        I am always open to discussing new projects,<br />
                        creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className='flex items-center justify-center my-4'>
                        <span><FaPhoneAlt size={20} color={iconColor} /></span>
                        <span className='ms-5'>
                            <p className={`font-sans text-xl ${textColor}`}>{details.phoneNumber}</p>
                        </span>
                    </div>
                    <div className='flex items-center justify-center my-4'>
                        <span><IoIosMail color={iconColor} size={20} /></span>
                        <span className='ms-5'>
                            <p className={`font-sans text-xl ${textColor}`}>{details.email}</p>
                        </span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a
                            className="tooltip h-12 w-12 mx-2 flex items-center justify-center hover:bg-black text-black hover:text-yellow-400 rounded-full transition-all duration-300"
                            href={links.twitter}
                            target="_blank"
                        >
                            <FaXTwitter size={25} color={iconColor} />
                            <div className="tooltip-text text-yellow-400 font-semibold">{'Twitter'}</div>
                        </a>
                        <a
                            className="tooltip h-12 w-12 mx-2 flex items-center justify-center hover:bg-black text-black hover:text-yellow-400 rounded-full transition-all duration-300"
                            href={links.linkedln}
                            target="_blank"
                        >
                            <FaLinkedinIn size={25} color={iconColor} />
                            <div className="tooltip-text text-yellow-400 font-semibold">{'Linkedln'}</div>
                        </a>
                        <a
                            className="tooltip h-12 w-12 mx-2 flex items-center justify-center hover:bg-black text-black hover:text-yellow-400 rounded-full transition-all duration-300"
                            href={links.github}
                            target="_blank"
                        >
                            <TbBrandGithubFilled size={25} color={iconColor} />
                            <div className="tooltip-text text-yellow-400 font-semibold">{'Github'}</div>
                        </a>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6'>
                    <div className="w-full bg-yellow-400 rounded-lg shadow-lg">
                        <p className='font-sans text-xl text-gray-600 py-8'>
                            I would like to make your ideas come to live.<br />
                            Feel free to contact me at anytime
                        </p>
                        <form className='px-9 py-8' onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-4">
                                <label className="text-left text-gray-700 text-lg font-sans">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-left text-gray-700 text-lg font-sans">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Your Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-left text-gray-700 text-lg font-sans">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder='Your Message'
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-white text-black px-4 py-2 rounded-lg"
                                >
                                    { isLoading ? <Loader /> : 'Send Message' }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
});
