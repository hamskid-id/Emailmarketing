import { useState } from "react";
import { LineChart } from "../../../../../components/linechart"
import { PieChart } from "../../../../../components/piechat";
import { userdata } from "../../../campaign/component/userdata";

export const IndividualListGrowth =()=>{
    const subscribers=[
        {
            name:"21 Nov",
            number:50
        },{
            name:"22 Dec",
            number:20
        },{
            name:"23 Jan",
            number:10
        },{
            name:"24 Feb",
            number:5
        },{
            name:"25 mar",
            number:50
        },{
            name:"26 april",
            number:20
        },{
            name:"27 may",
            number:10
        },{
            name:"28 june",
            number:5
        }
    ]
    const Unsubscribed=[
        {
            name:"21 Nov",
            number:1
        },{
            name:"22 Dec",
            number:2
        },{
            name:"23 Jan",
            number:4
        },{
            name:"24 Feb",
            number:0
        },{
            name:"25 mar",
            number:0
        },{
            name:"26 april",
            number:2
        },{
            name:"27 may",
            number:0
        },{
            name:"28 june",
            number:1
        }
    ]

    const [
        subData
    ] = useState({
        labels:subscribers?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Subscribers Growth in the past month",
            data:subscribers?.map(
                (data)=>data.number
            )
        }]
    });

    const [
        unsubData
    ] = useState({
        labels:Unsubscribed?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Unsubscribe",
            data:Unsubscribed?.map(
                (data)=>data.number
            )
        }]
    });

    return(
        <>
            <p className="fs-4">
                List Growth
            </p>
            <div className="chat-flex align-items-end wrap">
                <div className="my-3 rounded border p-1 bar-container me-3 w-63">
                    <LineChart data={subData}/> 
                </div>                  
                <div className="my-3 rounded border p-1 chat-container me-3 w-32">
                    <PieChart data={unsubData}/>
                </div>                  
            </div>
        </>
        
    )
}