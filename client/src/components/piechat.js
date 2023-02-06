import {Pie} from "react-chartjs-2"
import 'chart.js/auto';
export const PieChart =({
    data
})=>{
    return(
        <Pie data={data}/>
    )
}