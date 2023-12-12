import { Pie, PieChart, Tooltip, Legend, BarChart, CartesianGrid, YAxis, XAxis, Bar } from 'recharts'
import ManageSide from '../../components/StatsSide'
export default function Sales() {
    const data1 = [{ name: 'service1', value: 89 }, { name: 'service2', value: 20 }, { name: 'service3', value: 100 }]
    return <>
        <div className=' flex justify-between'>
            <div>
                <ManageSide />
            </div>
            <div className=' flex flex-col mr-20 gap-32 mt-9 items-center'>
                <div className=' flex gap-72 items-center'>
                    <div className=' flex flex-col gap-4 items-center'>
                        <h1 className=' text-4xl font-bold'>Achats Total</h1>
                        <h4 className=' text-green-700 text-3xl font-extrabold'>180</h4>
                    </div>
                    <PieChart width={200} height={200}>
                        <Pie data={data1} dataKey='value' nameKey="name" outerRadius={100} fill="#897643" />
                    </PieChart>
                </div>
                <div>
                    <div>
                        <BarChart width={730} height={250} data={data1}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                            <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
            </div>

        </div>
    </>
}