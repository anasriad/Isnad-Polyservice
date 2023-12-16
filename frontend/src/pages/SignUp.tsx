import * as yup from 'yup'
import { Formik, Field, ErrorMessage } from 'formik'
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
        Email: '',
        Password: '',
        passwordConfirmation: '',
        phone_number: '',
        role: 'Company'
    }
    const handleSubmit = async () => {
        try {
            await axiosAPI.post('accounts/postAccount', Values)
            toast(`Account with has been created`)
        } catch (error) {
            toast(`Could not Create Account due to ${error}`)
        }
    }
    const SignupSchema = yup.object().shape({
        firstName: yup.string()
            .required('Le prénom est requis'),
        MiddleName: yup.string()
            .notRequired(),
        lastName: yup.string()
            .required('Le nom de famille est requis'),
        city: yup.string()
            .required('Ville est requise'),
        street: yup.string()
            .required('Avenue est requis'),
        companyName: yup.string()
            .required("Nom d'entreprise est requis"),
        Email: yup.string().email().required('adresse e-mail est requise'),
        Password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
            'Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial')
            .min(5, 'Trop court')
            .max(10, 'Trop long')
            .required('Le mot de passe est requis'),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('Password')], 'Les mots de passe doivent correspondre')
            .required('La confirmation du mot de passe est requise'),
        phone_number: yup.string(),
        role: yup.string(),
    })
    return <>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <Formik onSubmit={handleSubmit} initialValues={Values} validationSchema={SignupSchema}>
                        <div>
                            <h1 className="mb-8 text-3xl text-center font-extrabold">Inscrivez-Vous</h1>
                            {!company && <><Field
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="firstName"
                                placeholder="Prénom" />
                                <div className=' text-sm text-red-500 mb-3'>
                                    <ErrorMessage name="firstName" />
                                </div>

                                <Field
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded"
                                    name="lastName"
                                    placeholder="Nom " />
                                <div className=' text-sm text-red-500 mb-3'>
                                    <ErrorMessage name="lastName" />
                                </div>
                            </>}
                            {
                                company && <>
                                    <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="companyName"
                                        placeholder="Nom d'entreprise" />
                                    <div className=' text-sm text-red-500 mb-3'>
                                        <ErrorMessage name="companyName" />
                                    </div>
                                    <div className=' flex flex-row gap-5'>
                                        <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="city"
                                            placeholder="Ville" />
                                        <div className=' text-sm text-red-500 mb-3'>
                                            <ErrorMessage name="city" />
                                        </div>
                                        <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="postcode"
                                            placeholder="Code Postale" />
                                        <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="region"
                                            placeholder="Region" />
                                    </div>
                                    <Field type='text' className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="street"
                                        placeholder="Avenue" />
                                    <div className=' text-sm text-red-500 mb-3'>
                                        <ErrorMessage name="street" />
                                    </div>
                                </>
                            }
                            <Field
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="Email"
                                placeholder="Adresse E-mail" />
                            <div className=' text-sm text-red-500 mb-3'>
                                <ErrorMessage name="Email" />
                            </div>
                            <Field
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="Password"
                                placeholder="Mot de Passe" />
                            <div className=' text-sm text-red-500 mb-3'>
                                <ErrorMessage name="password" />
                            </div>
                            <Field
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="passwordConfirmation"
                                placeholder="Mot de Passe Confirmation" />
                            <div className=' text-sm text-red-500 mb-3'>
                                <ErrorMessage name="passwordConfirmation" />
                            </div>
                            <Select options={options} onChange={(e) => {
                                e?.label == 'Company' ? setcompany(true) : setcompany(false)
                            }}></Select>
                            <input className="w-full text-center py-3 rounded bg-green bg-blue-600 text-white font-bold hover:bg-green-dark focus:outline-none my-1" type='submit' value="Créez"></input>
                        </div>

                    </Formik>
                </div>
                <div className="text-grey-dark mt-6">
                    Vous avez déja un compte?
                    <a className="no-underline border-b border-blue text-blue text-blue-600" href="/login">
                        Connectez-vous
                    </a>.
                </div>
            </div>
        </div>
    </>
}