import {Line} from "react-chartjs-2"
import 'chart.js/auto';
export const LineChart =({
    data
})=>{
    const options = {
        responsive: true,
        maintainAspectRatio: false
      };
    return(
        <Line data={data} options={options}/>
    )
}