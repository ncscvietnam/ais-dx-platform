import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
const Accordion = ({ title, content }: any) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="">
            <div
                className="flex flex-row space-x-5 p-4 pl-0"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="font-bold md:text-2xl">{title}</div>
                <div className="ml-auto">
                    {isActive ? (
                        <ChevronDownIcon className="h-5 w-5" />
                    ) : (
                        <ChevronUpIcon className="h-5 w-5" />
                    )}
                </div>
            </div>
            {isActive && <p className="p-4 pl-0">{content}</p>}
        </div>
    )
}

export default Accordion
