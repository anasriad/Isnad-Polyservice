import * as yup from 'yup'
import { Formik,Field, ErrorMessage} from 'formik'
import { axiosAPI } from '../api/axiosAPI'
import { toast } from 'react-toastify'
import Select from 'react-select'
import { useState } from 'react'
export default function Signup() {
    const options = [
        { value: "Company", label: "Company" },
        { value: "Super User", label: "Super User" },
        { value: "Normal User", label: "Normal User" },
        { value: "Manager", label: "Manager" }]
    const [company, setcompany] = useState(false)
    const Values = {
        firstName: '',
        MiddleName: '',
        lastName: '',
        companyName: '',
        city: '',
        postCode: '',
        region: '',
        street: '',
        category:'',
        Email: '',
        Password: '',
        passwordConfirmation: '',
        phone_number: '',
        role: 'Company'
    }
    const handleSubmit = async()=>{
        try {
            await axiosAPI.post('accounts/postAccount', Values)
            toast(`Account with has been created`)
        } catch (error) {
            toast(`Could not Create Account due to ${error}`)
        }
    }
    const SignupSchema = yup.object().shape({
        firstName: yup.string()
            .required('First Name is Required'),
        MiddleName: yup.string()
            .notRequired(),
        lastName: yup.string()
            .required('Last Name is Required'),
        Email: yup.string().email().required('Email is Required'),
        Password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
            'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character')
            .min(5, 'Too short')
            .max(10, 'Too long')
            .required('Password is Required'),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('Password')], 'Passwords must Match')
            .required('Password confirmatio is required'),
        phone_number: yup.string(),
        role: yup.string(),
    })
    return <>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <Formik onSubmit={handleSubmit} initialValues={Values} validationSchema={SignupSchema}>
                        <h1 className="mb-8 text-3xl text-center font-extrabold">Inscrivez-Vous</h1>
                        {!company && <><Field
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="firstName"
                            placeholder="Prénom" />
                            <ErrorMessage name="firstName"/>

                        <Field
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="lastName"
                            placeholder="Nom " />
                            <ErrorMessage name="lastName"/>
                        </>}
                        {
                            company && <>
                            <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="companyName"
                            placeholder="Nom d'entreprise"  />
                            <ErrorMessage name="companyName"/>
                            <div className=' flex flex-row gap-5'>
                            <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="city"
                            placeholder="Ville"/>
                            <ErrorMessage name="city"/>
                            <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="postcode"
                            placeholder="Code Postale"/>
                            <ErrorMessage name="postCode"/>
                            <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="region"
                            placeholder="Region"/>
                            <ErrorMessage name="region"/>
                            </div>
                            <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="street"
                            placeholder="Avenue"/>
                            <ErrorMessage name="street"/>
                            </>
                        }
                        <Field
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Email"
                            placeholder="Adresse E-mail" />
                            <ErrorMessage name="Email"/>
                        <Field
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Password"
                            placeholder="Mot de Passe" />
                            <ErrorMessage name="Password"/>
                        <Field
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="passwordConfirmation"
                            placeholder="Mot de Passe Confirmation" />
                            <ErrorMessage name="passwordConfirmation"/>
                        <Select options={options} onChange={(e)=>{
                            e?.label=='Company' ? setcompany(true) : setcompany(false)
                            }}></Select>
                        <input className="w-full text-center py-3 rounded bg-green bg-blue-600 text-white font-bold hover:bg-green-dark focus:outline-none my-1" type='submit' value="Créez"></input>
                    </Formik>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <a className="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </>
}