import { Pie, PieChart, RadialBarChart, RadialBar, Tooltip, Legend, BarChart, CartesianGrid, YAxis, XAxis, Bar } from 'recharts'
import StatsSide from '../../components/StatsSide'
import { useEffect, useState } from 'react'
import { axiosAPI } from '../../api/axiosAPI'
import { toast } from 'react-toastify'
export default function ServiceAnalytics() {
    const [Data, setData] = useState()
    useEffect(() => {
        async function getStatistics() {
            try {
                const { data } = await axiosAPI.get('/getServiceStats')
                setData(data)
                toast.success('Services Statistcs')
            } catch (error) {
                toast.error('Erreur')
            }
        }
        getStatistics()
    })
    const data1 = [{ name: 'service1', value: 89 }, { name: 'service2', value: 20 }, { name: 'service3', value: 100 }]
    return <>
        <div className=' flex justify-between'>
            <div>
                <StatsSide />
            </div>
            <div className=' flex flex-col items-end mr-20 gap-32 mt-9'>
                <div className=' flex gap-72 items-center'>
                    <div className=' flex flex-col gap-4 items-center'>
                        <h1 className=' text-4xl font-bold'>Services Complet?</h1>
                        <h4 className=' text-green-700 text-3xl font-extrabold'>154</h4>
                    </div>
                    <PieChart width={200} height={200}>
                        <Pie data={data1} dataKey='value' nameKey="name" outerRadius={100} fill="#8884d8" />
                    </PieChart>
                </div>
                <div className=' flex'>
                    <RadialBarChart
                        width={300}
                        height={300}
                        innerRadius="10%"
                        outerRadius="%"
                        data={data1}
                        startAngle={180}
                        endAngle={0}
                    >
                        <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey='value' />
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                        <Tooltip />
                    </RadialBarChart>
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
    </>
}