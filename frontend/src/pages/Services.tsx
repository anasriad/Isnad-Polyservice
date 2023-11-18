import { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/SideBar"
import { BsFillPlusSquareFill } from 'react-icons/bs'
import Modal from 'react-modal'
import * as yup from 'yup'
import { useFormik } from "formik"
import { IoIosArrowForward } from 'react-icons/io'
import { toast } from "react-toastify"
import { axiosAPI } from "../api/axiosAPI"
export default function Services() {
    const [isOpenFlag, setOpen] = useState(false)
    const SchemaValidation = yup.object().shape({
        file: yup.mixed().required()
    })
    const Values = { file: null }
    const formik = useFormik({
        validationSchema: SchemaValidation,
        initialValues: Values,
        onSubmit: async () => {
            try {
                await axiosAPI.post('/services/postOrder', Values)
                console.log(Values)
                toast.success('Votre Commande est bien envoyée')
            } catch (error) {
                console.log('hello')
                toast.error("Votre Commande n'est pas envoyée")
            }
        },
    })
    return <>
        <div>
            <Header />
            <Modal isOpen={isOpenFlag}>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className=" flex gap-5 mb-6">
                            <label>Téléchargez Cahier de Charge</label>
                            <input type="file" name="file" onChange={formik.handleChange}></input>
                        </div>
                        <button className=" bg-blue-500 rounded-2xl p-2 font-bold hover:bg-orange-400 text-white hover:duration-300 flex items-center hover:gap-6" type="submit">Commandez<IoIosArrowForward /></button>
                    </form>
                </div>
            </Modal>
            <div className="flex gap-80">
                <div>
                    <Sidebar />
                </div>
                <div className="flex flex-col mt-12 gap-7">
                    <div>
                        <h1 className=" font-bold shadow-md">Manufacturation Mécanique</h1>
                    </div>
                    <div className=" flex flex-col gap-7">
                        <div className=" w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Automobile</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className=" flex justify-between">
                                <div className="flex gap-5">
                                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen(true)}>
                                        Téléchargez Cahier de charge
                                    </button>
                                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Commandez par Text</button>
                                </div>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-4">
                                    Ajoutez au Panier <BsFillPlusSquareFill />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}