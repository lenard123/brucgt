import { useState } from "react"


export default function Dropdown({ label, icon, children }) {

    const [active, setActive] = useState(false)

    return (
        <div className='relative overflow-hidden'>
            <a onClick={() => setActive(active => !active)} className="dropdown-toggler transition-all text-sm flex hover:bg-[#181827] text-[#a2a3b7] hover:text-white py-2" href="#">
                <span className="inline-flex justify-center items-center w-12 h-5 flex-none">
                    {icon}
                </span>
                <span className="flex-grow">{label}</span>
                <div className="mr-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className={'h-3 w-3 transition-transform ' + (active ? '-rotate-[90deg]': '')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </a>
            <div className={"overflow-hidden transition-all " + (active ? 'max-h-screen': 'max-h-0')}>
                {children}
            </div>
        </div>
    )
}