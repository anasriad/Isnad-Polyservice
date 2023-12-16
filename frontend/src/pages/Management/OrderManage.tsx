import { useEffect, useState } from "react";
import ManagementSide from "../../components/ManageSide";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { axiosAPI } from "../../api/axiosAPI";
import { toast } from "react-toastify";

export default function ServicesManagement() {
    const [Services, setServices] = useState([])
    const [SelectedDate, setdate] = useState<Date | null>(new Date())
    useEffect(() => {
        async function FetchServices() {
            try {
                const { data } = await axiosAPI.get('/getServices')
                setServices(data)
                toast.success('Votre éspace Manageriel')
            } catch (error) {
                toast.error("un error s'est produit")
            }
        }
        FetchServices()
    })
    return <>
        <div className=" flex gap-96">
            <div>
                <ManagementSide />
            </div>
            <div className=" flex flex-col mt-10 w-screen gap-14">
                <div className=" flex justify-between">
                    <div>
                        <h1 className=" font-extrabold text-3xl">Services</h1>
                    </div>
                    <div className=" flex flex-row items-center gap-6 mr-20">
                        <div>
                            <h3 className=" font-extrabold">Filtrez par Date</h3>
                        </div>
                        <div>
                            <DatePicker onChange={(date) => setdate(date)} selected={SelectedDate} className=" border-2 rounded-2xl p-2 hover:cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row flex-wrap gap-7">
                    {Services?.map((service) => {
                        return <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.name}</h5>
                            </div>
                            <div>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}