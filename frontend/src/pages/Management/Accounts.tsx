
import { useEffect, useState } from "react";
import ManagementSide from "../../components/ManageSide";
import { axiosAPI } from "../../api/axiosAPI";
import { toast } from "react-toastify";
export default function Accounts() {
    const [Users, setUsers] = useState(null)
    useEffect(() => {
        async function FetchUsers() {
            try {
                const { data } = await axiosAPI.get('/api/fetchUsers')
                setUsers(data)
                toast.success('Les Comptes Disponible pour le moment')
            } catch (error) {
                toast.error('Aucun Compte est disponible')
            }
        }
        FetchUsers()
    })
    return <div className=" flex gap-96">
        <div>
            <ManagementSide />
        </div>
        <div className=" flex flex-col mt-10 w-screen gap-14">
            <div className=" flex justify-between">
                <div>
                    <h1 className=" font-extrabold text-3xl">Comptes</h1>
                </div>
            </div>
            <div className=" flex flex-row flex-wrap gap-7">
                {Users?.map((user) => {
                    return <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                        </div>
                        <div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}