import { projects } from "../utils/constants"
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";
import { forwardRef, useState } from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { ProjectProps, TProps } from "../utils/types";
import Modal from "../Modal";

export default forwardRef<HTMLDivElement, TProps>(({
    theme
}, ref) => {

    const [projectData, setProjectData] = useState<ProjectProps | null>(null);
    const projectActions = [
        {
            icon: TbBrandGithubFilled,
            title: 'Source',
            handleOnClick: (item: ProjectProps) => {
                window.open(item.gitLink, '_blank', 'noopener,noreferrer');
            }
        },
        {
            icon: IoEyeSharp,
            title: 'Live',
            handleOnClick: (item: ProjectProps) => {
                window.open(item.live, '_blank', 'noopener,noreferrer');
            }
        },
        {
            icon: IoDocumentTextSharp,
            title: 'Details',
            handleOnClick: (item: ProjectProps) => {
                setProjectData(item)
            }
        }
    ]
    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-600';

    return (
        <div ref={ref}>
            <h1 className="text-high font-bolder text-yellow-400">PROJECTS</h1>
            <div className='grid grid-cols-12 my-5 gap-5'>
                {
                    projects.map((item) => (
                        <div
                            key={`${item.title} ${new Date().getTime()}`}
                            className='col-span-12 md:col-span-3 border border-yellow-500 rounded-xl'
                        >
                            <h1 className={`pt-5 text-3xl font-sans font-bold ${textColor}`}>{item.title}</h1>
                            <img src={item.img} className='w-full p-5' />
                            <div className='mb-5 flex justify-center'>
                                {
                                    projectActions.map(({
                                        icon: Icon,
                                        title,
                                        handleOnClick = () => { }
                                    }) => (
                                        <button
                                            key={`${title} ${new Date().getTime()}`}
                                            type="submit"
                                            className="bg-yellow-400 items-center hover:text-white font-bold flex mx-3 text-black px-4 py-2 rounded-lg"
                                            onClick={() => { handleOnClick(item) }}
                                        >
                                            <Icon size={20} className='mx-2' />
                                            {title}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <Modal
                isOpen={Boolean(projectData)}
                onClose={() => { setProjectData(null); }}
                title={projectData?.title as string}
            >
                <div className="bg-white px-6 flex flex-col justify-start">
                    <p className="text-black text-justify font-bold mb-4 text-lg">
                        {projectData?.description}
                    </p>
                    <div className='flex flex-col'>
                        <h3 className="text-2xl font-semibold my-6">Features</h3>
                        <ul className="list-disc list-inside text-justify text-black text-lg">
                            {projectData?.features.map((feature: Record<string, string>) => (
                                <li>
                                    <span><strong>{feature.label}{' : '}</strong></span>
                                    <span>{feature.des}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-2xl font-semibold my-6">Tech Stack</h3>
                        <div className="grid grid-cols-12 gap-4">
                            {
                                projectData?.skills.map((skill: string) => (
                                    <span className="col-span-3 bg-gray-300 text-black font-semibold p-2 rounded">{skill}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex'>
                        <button
                            className='ms-auto bg-yellow-500 px-6 py-3 text-black hover:text-white font-bolder rounded-2xl'
                            onClick={() => { setProjectData(null); }}
                        >Close</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
});
