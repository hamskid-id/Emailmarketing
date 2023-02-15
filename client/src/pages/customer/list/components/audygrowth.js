import { useState } from "react"
import { FaCircleNotch } from "react-icons/fa";
import { LineChart } from "../../../../components/linechart";

export const Audygrowth =()=>{
    const piedata=[
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

    const [
        subData
    ] = useState({
        labels:piedata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Email marketting growth metrics",
            data:piedata?.map(
                (data)=>data.number
            )
        }]
    });
    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaCircleNotch
                        size="2rem"
                    />
                </span>
                <h2 
                    className="fs-3 w-100 mb-0"
                >
                   Your audience growth
                </h2>
            </div>
            <h2 className="fs-5">
                How your audience growth over time
            </h2>
            <div className="w-100 rounded pd-1 border chat-flex">
                <LineChart data={subData}/>               
            </div>
        </>
    )
}