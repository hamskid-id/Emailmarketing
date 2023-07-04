import {Pie} from "react-chartjs-2"
import 'chart.js/auto';
export const PieChart =({
    data
})=>{
    const options = {
        responsive: true,
        maintainAspectRatio: false
      };
      
    return(
        <Pie data={data} options={options}/>
    )
}