import { forwardRef } from "react";
import { skills } from "../utils/constants";
import { TProps } from "../utils/types";

export default forwardRef<HTMLDivElement, TProps>(({
    theme
}, ref) => {

    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-600';
    return (
        <div ref={ref}>
            <h1 className="text-high font-bolder text-yellow-400">SKILLS</h1>
            <div className="grid grid-cols-12 gap-4 items-center my-5">
                {
                    skills.map(({ icon, label }) => (
                        <div
                            key={`${label} ${new Date().getTime()}`}
                            className='border-2 flex items-center justify-center border-gray-200 rounded-3xl col-span-12 md:col-span-3 relative'
                        >
                            <img className='p-9' src={icon} />
                            <h1
                                className={`w-1/2 font-sans absolute text-2xl font-bolder ml-auto mr-auto ${textColor}`}
                            >{label}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
});
