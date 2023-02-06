import { useState } from "react"
import { BarChart } from "../../../components/barchat"
import { userdata } from "./userdata";

export const ChartStat =()=>{
    const [
        userData
    ] = useState({
        labels:userdata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"key email marketing metrics",
            data:userdata?.map(
                (data)=>data.number
            )
        }]
    });
   
    return(
        <div 
            className="wt-75"
            style={{position: "relative", height:"100%", width:"fit-content"}}>
            <BarChart data={userData}/>
        </div>
    )
}