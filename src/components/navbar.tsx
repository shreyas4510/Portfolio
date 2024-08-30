import { IoMdMoon } from "react-icons/io";
import { navbarTabs } from "../utils/constants";
import { IoMdSunny } from "react-icons/io";
import { TProps } from "../utils/types";

export default ({
    theme,
    setTheme = () => {},
    scrollToComponent = () => {}
}: TProps) => {
    const handleTheme = (theme: string) => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    return (
        <nav className='py-4 z-50 bg-yellow-400 fixed right-0 left-0 top-0'>
            <div className="container mx-auto flex justify-center items-center">
                {
                    navbarTabs.map(({ title, icon: Icon }, index) => (
                        <a
                            key={`${title} ${new Date().getTime()}`}
                            className="tooltip h-12 w-12 mx-2 flex items-center justify-center hover:bg-white text-white hover:text-black rounded-full transition-all duration-300"
                            onClick={() => { scrollToComponent(index) }}
                        >
                            <Icon size={25} />
                            <div className="tooltip-text text-yellow-400 font-semibold">{title}</div>
                        </a>
                    ))
                }
                <div className='h-12 w-12 flex items-center justify-center right-10 absolute text-white hover:bg-white hover:text-black rounded-full transition-all duration-300'>
                    {
                        theme === 'dark' ?
                            <IoMdSunny onClick={() => handleTheme('light')} size={25} /> :
                            <IoMdMoon onClick={() => handleTheme('dark')} size={25} />
                    }
                </div>
            </div>
        </nav>
    );
};