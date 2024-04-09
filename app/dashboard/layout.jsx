import Navbar from "@/app/components/Navbar"

export default function Layout ({ children }) {
    return (
        <div className="bg-slate-50 h-screen">
            <Navbar/>
            {children}
        </div >
    )
}