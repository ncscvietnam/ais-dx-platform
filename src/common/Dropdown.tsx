import Link from 'next/link'

type DropdownElement = {
    name: string
    link: string
}

type DropdownProps = {
    title: string
    element: DropdownElement[]
}

const Dropdown = ({ title, element }: DropdownProps) => {
    return (
        <div className="dropdown">
            <span className="hover:text-primary-400 font-base flex cursor-pointer items-center space-x-2">
                {title}
                <svg
                    className="ml-1 block h-4 w-4 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </span>
            <div className="dropdown-menu invisible absolute z-10 w-56 translate-y-4 rounded bg-white shadow">
                <ul className="text-left">
                    {element.map((element, index) => (
                        <li key={index} className="mx-2 my-4">
                            <div className="hover:text-primary-400">
                                <Link href={element.link}>
                                    {element.link.includes('http') ? (
                                        <Link
                                            href={element.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {element.name}
                                        </Link>
                                    ) : (
                                        <Link href={element.link}>
                                            {element.name}{' '}
                                        </Link>
                                    )}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
