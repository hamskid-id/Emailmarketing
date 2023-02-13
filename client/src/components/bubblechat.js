import {Bubble} from "react-chartjs-2"
import 'chart.js/auto';
export const BubbleChart =({
    data
})=>{
    return(
        <Bubble data={data}/>
    )
}