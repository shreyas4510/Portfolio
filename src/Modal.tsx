// src/Modal.js
import React, { ReactElement, ReactHTML } from 'react';
// import './Modal.css'; // Optional for custom styles

interface TProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Modal = ({ isOpen, onClose, children, title }: TProps) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}></div>
            <div className="fixed inset-0 flex items-center justify-center z-50 min-w-40">
                <div className="bg-white max-h-90p overflow-auto py-5 rounded-3xl relative shadow-lg max-w-3xl mx-auto w-full">
                    <div className='h-18 flex py-8'>
                        <h1 className='my-auto ms-8 text-3xl font-bold'>{ title }</h1>
                        <button
                            className="text-gray-500 ms-auto me-5"
                            onClick={onClose}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className='m-4'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
