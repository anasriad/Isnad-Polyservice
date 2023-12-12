import { useEffect, useState } from "react";
import ManagementSide from "../../components/ManageSide";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { axiosAPI } from "../../api/axiosAPI";
import { toast } from "react-toastify";

export default function ServicesManagement() {
    interface Service {
        name: string,
        description: string, 
        id: number
    }
    interface deletion {
        id: number
    }
    const [editDialog, setEdit] = useState(false)
    const [deleteDialog, setDelete] = useState(false)
    const [Services, setServices] = useState([])
    const ServiceToEdit: Service = { name: '', description: '', id:0 }
    const serviceTodelete: deletion = { id: 0 }
    const handleEdit = async () => {
        try {
            await axiosAPI.post('/editService', ServiceToEdit)
            setEdit(false)
            const { data } = await axiosAPI.get('/getServices')
            setEdit(data)
            toast.success('Service Edité avec succées')
        } catch (error) {
            toast.error('Erreur')
        }
    }
    const handleDelete = async () => {
        try {
            await axiosAPI.delete('/deleteService', { params: { serviceId: serviceTodelete.id } })
            setDelete(false)
            toast.success('Service Supprimée')
        } catch (error) {
            toast.error('Erreur')
        }
    }
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
        {editDialog && <div id="authentication-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Editez {ServiceToEdit?.name}
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setEdit(false)}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={() => handleEdit()}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom de Service</label>
                                <input type="text" name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e) => { ServiceToEdit.name = e.target.value }} value={ServiceToEdit?.name} />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e) => { ServiceToEdit.description = e.target.value }} value={ServiceToEdit?.description} />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editez</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        }
        {deleteDialog && <div id="popup-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Voulez-vous vraiment supprimer ce service?</h3>
                        <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={() => handleDelete()}>
                            Oui
                        </button>
                        <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setDelete(false)}>Non</button>
                    </div>
                </div>
            </div>
        </div>
        }
        <div className=" flex gap-96">
            <div>
                <ManagementSide />
            </div>
            <div className=" flex flex-col mt-10 w-screen gap-14">
                <div className=" flex justify-between">
                    <div>
                        <h1 className=" font-extrabold text-3xl">Services</h1>
                    </div>
                    <div className=" flex flex-row">
                        <div>
                            <h3>Filtrez par Date</h3>
                        </div>
                        <div>
                            <DatePicker selected={new Date()} onChange={() => console.log('0')} startDate={new Date()} />
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
                            <div className=" flex flex-row gap-10">
                                <button className=" flex flex-row gap-2 bg-blue-700 text-white p-4 rounded-2xl items-center hover:bg-blue-500 hover:duration-300" onClick={() => {
                                    setEdit(true)
                                    ServiceToEdit.name = service.name
                                    ServiceToEdit.description = service.description
                                }}>Editer <FaEdit /></button>
                                <button className=" flex flex-row gap-2 bg-red-700 text-white p-4 rounded-2xl items-center hover:bg-red-500 hover:duration-300" onClick={() => {
                                    setDelete(true)
                                    serviceTodelete.id=service.id
                                    }}>Supprimer <MdDelete /></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}