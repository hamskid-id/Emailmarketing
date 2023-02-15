import {Line} from "react-chartjs-2"
import 'chart.js/auto';
export const LineChart =({
    data
})=>{
    return(
        <Line data={data}/>
    )
}