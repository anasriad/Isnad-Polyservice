import { NavLink } from "react-router-dom"
import { MdPrecisionManufacturing } from 'react-icons/md'
export default function Sidebar() {
    const NavData = [
        {
            header: "Manufacturation Mécanique",
            link: '#',
            icon: <MdPrecisionManufacturing />
        },
        {
            header: "Produits Prets",
            link: '#',
            icon: <MdPrecisionManufacturing />
        },
        {
            header: "Autres Services",
            link: '#',
            icon: <MdPrecisionManufacturing />
        }
    ]
    return <>
        <aside id="default-sidebar" className="fixed h-screen transition-transform -translate-x-full sm:translate-x-0 hover:cursor-pointer" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                {NavData.map((nav) => {
                    return <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group gap-5">
                        <NavLink to={nav.link} style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}></NavLink>
                        {nav.header}
                        <span>{nav.icon}</span>
                    </div>
                })}
            </div>
        </aside>
    </>
}