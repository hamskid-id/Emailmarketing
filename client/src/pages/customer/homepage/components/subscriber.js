import { useState } from "react"
import {FcAreaChart } from "react-icons/fc";
import { PieChart } from "../../../../components/piechat";
import {BarChart} from "../../../../components/barchat";
import { subcriberdata  } from "../../campaign/component/userdata";

export const Subscribers=()=>{
    const piedata=[
        {
            name:"Subscribed",
            number:50
        },{
            name:"Unsubscribed",
            number:20
        },{
            name:"Spam Report",
            number:10
        },{
            name:"Blacklisted",
            number:5
        }
    ]
    const [
        userData
    ] = useState({
        labels:subcriberdata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Subscrbers growth chart",
            borderColor: '#c2e7ff',
            backgroundColor: '#c2e7ff',
            data:subcriberdata?.map(
                (data)=>data.number
            )
        }]
    });
    const [
        subData
    ] = useState({
        labels:piedata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Subscribers",
            borderColor: 'white',
            backgroundColor: ['#c2e7ff','mintcream'],
            data:piedata?.map(
                (data)=>data.number
            )
        }]
    });
    return(
        <>
            <div className="d-flex align-items-center mt-3 mb-3">
                <span className="me-3">
                   <FcAreaChart
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0 "
                >
                    List growth
                </h2>
            </div>
            <div className="chat-flex align-items-end wrap justify-content-between">
                <div className="my-3 rounded bg bg-white bar-container w-63 p-3">
                    <BarChart data={userData}/>
                </div>                  
                <div className="my-3 rounded bg bg-white chat-container w-32">
                    <PieChart data={subData}/>
                </div>                  
            </div>
        </>
    )
}