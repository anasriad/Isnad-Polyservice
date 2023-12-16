import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { IoMdAnalytics } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
export default function ManagementSide() {
    const NavData = [
        {
            link: '/',
            icon: <FaHome/>,
            title:'Acceuil'
        },
        {
            link: '/manager/services',
            icon: <MdOutlineMiscellaneousServices />,
            title: 'Les Services',
        },
        {
            link: '/manager/accounts',
            icons: <FaUsers />,
            title: 'Les Comptes'
        },
        {
            link: '/analytics',
            icons: <IoMdAnalytics />,
            title: 'Statistics'
        }
    ]
    return <>
        <aside id="default-sidebar" className="fixed h-screen transition-transform -translate-x-full sm:translate-x-0 hover:cursor-pointer" aria-label="Sidebar">
            <div className="h-full p-20 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col gap-14">
                {NavData.map((nav) => {
                    return <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group gap-5">
                        <NavLink to={nav.link} style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>{nav.title}</NavLink>
                        <span>{nav.icon}</span>
                    </div>
                })}
            </div>
        </aside>
    </>
}