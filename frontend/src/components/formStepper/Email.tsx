export const Email = (pagination: (arg0: number) => void) => {
    return <>
        <div className=" flex flex-col">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Adresse Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
            </div>
            <button className=" bg-blue-500 p-3 rounded-2xl text-white font-bold hover:bg-orange-400 hover:duration-300 float-right" onClick={() => pagination(1)}>Next</button>
        </div>
    </>
}