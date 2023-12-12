import { GrServices } from 'react-icons/gr'
import { FcSalesPerformance } from 'react-icons/fc'
import { FaPeopleRobbery, FaCartShopping } from 'react-icons/fa6'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function StatsSide() {
    const NavData = [
        {
            header: "Home",
            link: '/',
            icon: <FaHome />
        },
        {
            header: "Services",
            link: '/analytics/services',
            icon: <GrServices />
        },
        {
            header: "Achats",
            link: '/analytics/sales',
            icon: <FcSalesPerformance />
        },
        {
            header: "Visits",
            link: '/',
            icon: <FaPeopleRobbery />
        },
        {
            header: "Les Ordres",
            link: '/',
            icon: <FaCartShopping />
        }
    ]
    return <>
            <aside className="fixed h-screen transition-transform -translate-x-full sm:translate-x-0 hover:cursor-pointer">
                <div className="h-full px-16 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 space-y-10">
                    {NavData.map((nav) => {
                        return <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group gap-5 text-xl">
                            <span>{nav.icon}</span>
                            <NavLink to={nav.link} style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>{nav.header}</NavLink>
                        </div>
                    })}
                </div>
            </aside>

    </>
}