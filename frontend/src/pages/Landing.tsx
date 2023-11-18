import Header from "../components/Header"
import Poly from '../assets/poly.jpeg'
import man from '../assets/man.jpeg'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { useNavigate } from "react-router-dom"
export default function Landing() {
    const Navigate = useNavigate()
    return <>
        <div>
            <Header />
            <div className=" flex flex-col mt-20 gap-14">
                <div className="flex justify-between items-center">
                    <div className=" flex flex-col items-center gap-7 ml-16">
                        <h1 className=' font-extrabold tracking-widest'>ISNAD, à Votre Service</h1>
                        <button className=" p-4 rounded-2xl font-extrabold text-white bg-blue-500 hover:bg-orange-400 hover:duration-300" onClick={() => Navigate('/services')}>Décourvrir</button>
                    </div>
                    <div>
                        <img src={Poly} width={700}></img>
                    </div>
                </div>
                <div className=" flex flex-col items-center">
                    {/*at integration phase, the following will be modified by partners fetched from database */}
                    <h1 className=" font-extrabold">Notre Partenaires</h1>
                    <div className=" flex justify-between w-full p-10">
                        <div>Partner One</div>
                        <div>Partner Two</div>
                        <div>Partner Three</div>
                        <div>Partner Four</div>
                        <div>Partner Five</div>
                    </div>
                </div>
                <div className=" flex justify-between">
                    <div>
                        <img src={man} width={500}></img>
                    </div>
                    <div className=" flex flex-col items-center gap-7 justify-center mr-40">
                        <div>
                            <h1>Rendre le processus de fabrication trés simple</h1>
                        </div>
                        <button className=" btransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white p-4 rounded-3xl flex items-center gap-2"><IoIosArrowDroprightCircle />Découvrir</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}