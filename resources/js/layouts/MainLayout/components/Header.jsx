import { useAuth, useLogoutModal } from "@/services/Auth";
import { Link } from "react-router-dom";


export default function Header() {

    const user = undefined
    // const { user } = useAuth()
    const { showLogoutModal } = useLogoutModal()

    return (
        <header className="bg-gray-900 text-white text-sm font-light p-2">
            <div className="container mx-auto max-w-screen-xl flex justify-between">
                {/* Left */}
                <div className="flex gap-4">
                    <a href="tel:(02) 88015025" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>(02) 88015025</span>
                    </a>

                    <a href="mailto:info@brucgt.com" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>info@brucgt.com</span>
                    </a>

                </div>
                {/* Right */}
                <div className="flex gap-4">
                    {user
                        ? (
                            <>
                                <Link to='/profile'>Account</Link>
                                <Link onClick={showLogoutModal} to='#'>Logout</Link>
                            </>
                        )
                        : (
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    )
}