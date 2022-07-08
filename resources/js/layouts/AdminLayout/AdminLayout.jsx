import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar/Sidebar"


export default function AdminLayout({ children }) {

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-grow h-screen flex flex-col">
                <Header />

                {/* content */}
                <div className="flex-grow flex flex-col overflow-auto">
                    <div className="flex-grow">{children}</div>
                    <Footer />
                </div>

            </div>
        </div>
    )
}