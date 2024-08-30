import { forwardRef } from "react"
import { resumeLink } from "../utils/constants"
import { TProps } from "../utils/types"

export default forwardRef<HTMLDivElement, TProps>(({}, ref) => {
    return (
        <div ref={ref} className='container mx-auto'>
            <h1 className="text-high font-bolder text-yellow-400">RESUME</h1>
            <iframe
                src={resumeLink}
                className='w-full h-180'
                title="Shreyas Deshmukh Resume"
            />
        </div>
    )
});
