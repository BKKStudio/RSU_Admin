import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const Rechart = ({ alllevel, bachelorsvalue, mastersvalue, doctorsvalue, intervalue }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOption, setChartOption] = useState({})

  useEffect(() => {
    setChartData({
      labels: ['ทั้งหมด', 'ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก', 'International'],
      datasets: [
        {
          label: 'นักศึกษา',
          data: [alllevel, bachelorsvalue, mastersvalue, doctorsvalue, intervalue],
        borderColor: ['#84cc16','#ec4899','#a855f7','#f43f5e','#0ea5e9'],
        backgroundColor: ['#84cc16','#ec4899','#a855f7','#f43f5e','#0ea5e9'],
        },
      ]
    })
    setChartOption({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'นักศึกษาใหม่ ประจำปีการศึกษา 2566',
        },
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [alllevel, bachelorsvalue, mastersvalue, doctorsvalue, intervalue])

  return (
    <div className='xl:w-3/4  md:col-span-2 relative w-full  lg:h-[70vh] h-[50vh]  w-full m-auto p-3 border  bg-white shadow-lg rounded-lg '>
      <Bar data={chartData} options={chartOption} />
    </div>
  )
}
export default Rechart;