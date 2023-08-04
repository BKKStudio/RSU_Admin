
import { Bar } from 'react-chartjs-2';
import React ,{useState , useEffect} from "react";
import { Chart as ChartJS, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js";

ChartJS.register(
    CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend 
)


const Rechart =  ({alllevel,bachelorsvalue,mastersvalue,doctorsvalue,intervalue}) =>{
  const bachelors =  bachelorsvalue
  const masters = mastersvalue
const doctors = doctorsvalue
const inters = intervalue
const alllevels = alllevel
  console.log(bachelors);

    const [chartData ,setChartData] = useState({
        datasets:[],
    })

    const [chartOption,setChartOption] = useState({})

    useEffect(()=>{
        setChartData({
            labels: ['ทั้งหมด', 'ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก', 'International'],
            datasets: [
                {
                    label: ['ทั้งหมด'],
                    data: [alllevels,bachelors,masters,doctors,inters],
                    borderColor: ['#84cc16','#ec4899','#a855f7','#f43f5e','#0ea5e9'],
                    backgroundColor: ['#84cc16','#ec4899','#a855f7','#f43f5e','#0ea5e9'],
                  }, 
            ]
            
        })
        setChartOption({
            plugins: {
                legend: {
                    position: 'left',
                },
                title: {
                    display: true,
                    text: 'นักศึกษาใหม่ ประจำปีการศึกษา 2566',
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])
    return(
        <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white shadow-lg'>
            <Bar data={chartData} options={chartOption}/>
        </div>
        </>
    )
  
}
export default Rechart