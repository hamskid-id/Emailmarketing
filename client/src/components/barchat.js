import {Bar} from "react-chartjs-2"
import 'chart.js/auto';
export const BarChart =({
    data
})=>{
    return(
        <Bar data={data}/>
    )
}