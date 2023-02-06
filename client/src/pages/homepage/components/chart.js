import { useState } from "react"
import { LineChart } from "../../../components/linechart"; 
import { customerdata } from "./customerdata";

export const ChartStat =()=>{
    const [
        userData
    ] = useState({
        labels:customerdata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Customers growth for the last 6 months",
            data:customerdata?.map(
                (data)=>data.number
            )
        }]
    });
   
    return(
        <div className="wt-75 py-4 m-auto">
            <LineChart data={userData}/>
        </div>
    )
}