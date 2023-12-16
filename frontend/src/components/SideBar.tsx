import { useEffect, useState } from "react"
import { axiosAPI } from "../api/axiosAPI"
import { toast } from "react-toastify"
export default function Sidebar() {
    const [services, setServices] = useState([])
    useEffect(() => {
        async function FetchServices() {
            try {
                const { data } = await axiosAPI.get('/getService')
                setServices(data)
                toast.success('Fabriquez ce que vous voulez')
            } catch (error) {
                toast.error(`${error}`)
            }
        }
        FetchServices()
    })
    return <>
        <aside id="default-sidebar" className="fixed h-screen transition-transform -translate-x-full sm:translate-x-0 hover:cursor-pointer" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                {services?.map((service) => {
                    return <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group gap-5">
                        <span>{service?.name}</span>
                    </div>
                })}
            </div>
        </aside>
    </>
}