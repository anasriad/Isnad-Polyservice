import * as yup from 'yup'
import { useFormik } from 'formik'
import { axiosAPI } from '../api/axiosAPI'
import { toast } from 'react-toastify'
export default function Contacts() {
    const formSchema = yup.object().shape({
        Report: yup.string()
            .required('Rapport est requis')
            .max(100)
    })
    const Value = {
        Report: ''
    }
    const formInputs = [
        {
            type: 'textarea',
            placeHolder: 'Ecrivez un rapport...',
        },
    ]
    const formik = useFormik({
        initialValues: Value,
        onSubmit: async () => {
            try {
                await axiosAPI.post('feedback/PostFeedback', Value)
                toast.success('Votre Rapport est Envoyé avec succés')
            } catch (error) {
                toast.error("échec d'envoyer le rapport")
            }
        },
        validationSchema: formSchema
    })
    return <>
        <div className=" bg-slate-200 h-screen">
            <div className=' flex flex-col gap-6'>
                <div className=" flex justify-center mt-14">
                    <a href='mailto: mymail@gmail.com' className='bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-800 hover:cursor-pointer hover:duration-300'>Envoyez un Mail</a>
                </div>
                <div className=' px-24'>
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <form onSubmit={formik.handleSubmit}>
                            <h1 className="mb-8 text-3xl text-center font-extrabold">Envoyez un Rapport</h1>
                            {formInputs.map((inputs) => {
                                return <textarea className="block border border-black w-full p-3 rounded mb-4 h-48" onChange={formik.handleChange} placeholder={inputs.placeHolder}>
                                </textarea>
                            })}
                            <input type='submit' value="Envoyez" className=' bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-800 hover:cursor-pointer hover:duration-300'></input>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </>
}