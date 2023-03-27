import { useState } from "react"
import { FaCircleNotch } from "react-icons/fa";
import { LineChart } from "../../../../../components/linechart";

export const Audygrowth =()=>{
    const subscribers=[
        {
            name:"21 Nov",
            number:50
        },{
            name:"22 Dec",
            number:40
        },{
            name:"23 Jan",
            number:50
        },{
            name:"24 Feb",
            number:50
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

    const [
        subData
    ] = useState({
        labels:subscribers?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"How your audience hs grown over time",
            fill: true,
            borderColor: 'lemonchiffon',
            backgroundColor: 'lemonchiffon',
            data:subscribers?.map(
                (data)=>data.number
            )
        }]
    });

    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaCircleNotch
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                   Your audience growth
                </h2>
            </div>
            <div className="chat-flex align-items-end wrap">
                <div className="my-3 rounded border p-3 bar-container me-3 w-100">
                    <LineChart data={subData}/> 
                </div>
            </div>
        </>
    )
}