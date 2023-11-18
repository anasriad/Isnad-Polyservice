import * as yup from 'yup'
import { useFormik } from 'formik'
import { axiosAPI } from '../api/axiosAPI'
import { toast } from 'react-toastify'
import Select from 'react-select'
import { GoogleLogin } from '@react-oauth/google'
export default function Signup() {
    const options = [
        { value: "Admin", label: "Admin" },
        { value: "CEO", label: "CEO" },
        { value: "Manager", label: "Manager" }]
    const Values = {
        firstName: '',
        MiddleName: '',
        lastName: '',
        Email: '',
        Password: '',
        passwordConfirmation: '',
        phone_number: '',
        role: 'Admin'
    }
    const SignupSchema = yup.object().shape({
        firstName: yup.string()
            .min(5)
            .max(20)
            .required('First Name is Required'),
        MiddleName: yup.string()
            .min(2)
            .max(20)
            .notRequired(),
        lastName: yup.string()
            .min(5)
            .max(20)
            .required('Last Name is Required'),
        Email: yup.string().email().required(),
        Password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
            'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character')
            .min(5)
            .max(10)
            .required('Password is Required'),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('Password')], 'Passwords must Match')
            .required('Password confirmatio is required'),
        phone_number: yup.string(),
        role: yup.string(),
    })
    const formik = useFormik({
        initialValues: Values,
        onSubmit: async () => {
            try {
                await axiosAPI.post('accounts/postAccount', Values)
                toast(`Account with email ${Values.Email} has been created`)
            } catch (error) {
                toast(`Could not Create Account due to ${error}`)
            }
        },
        validationSchema: SignupSchema
    })
    return <>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <form onSubmit={formik.handleSubmit}>
                        <h1 className="mb-8 text-3xl text-center font-extrabold">Inscrivez-Vous</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="firstName"
                            placeholder="Prénom" onChange={formik.handleChange} value={formik.values.firstName} />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="lastName"
                            placeholder="Nom " onChange={formik.handleChange} value={formik.values.lastName} />

                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Email"
                            placeholder="Adresse E-mail" onChange={formik.handleChange} value={formik.values.Email} />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Password"
                            placeholder="Mot de Passe" onChange={formik.handleChange} value={formik.values.Password} />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="passwordConfirmation"
                            placeholder="Mot de Passe Confirmation" onChange={formik.handleChange} value={formik.values.passwordConfirmation} />
                        <Select options={options}></Select>
                        <GoogleLogin onSuccess={() => alert('success')} onError={() => alert('failrue')}></GoogleLogin>
                        <input className="w-full text-center py-3 rounded bg-green bg-blue-600 text-white font-bold hover:bg-green-dark focus:outline-none my-1" type='submit' value="Créez"></input>
                    </form>
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