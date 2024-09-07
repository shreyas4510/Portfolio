import { homeName, homePosition, resumeLink, summary } from "../utils/constants";
import photo from "../assets/images/shreyas.jpg";
import { TProps } from "../utils/types";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement, TProps>(({
    theme
}, ref) => {

    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-600';
    return (
        <div ref={ref} className="grid grid-cols-12 gap-4 mb-5 items-center">
            <div className="col-span-12 md:col-span-6 flex flex-col items-center mx-5">
                <h1 className="text-6xl font-bolder text-yellow-400">{homeName}</h1>
                <h1 className={`text-6xl mt-2 font-bolder ${textColor}`}>{homePosition}</h1>
                <p className={`font-sans text-xl mt-2 ${textColor}`}>{summary}</p>
                <a href={resumeLink} className="text-white text-xl mt-12">
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black px-4 py-2 rounded-lg"
                    >
                        Download Resume
                    </button>
                </a>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                <img src={photo} className='rounded-full h-80 md:h-144 my-5' />
            </div>
        </div>
    );
});
