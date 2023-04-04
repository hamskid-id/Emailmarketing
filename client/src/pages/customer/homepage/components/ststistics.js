import { useState } from "react"
import { FaCircleNotch } from "react-icons/fa";
import { LineChart } from "../../../../components/linechart";
import { userdata } from "../../campaign/component/userdata";

export const CamapaignMetrics=()=>{
    const [
        userData
    ] = useState({
        labels:userdata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Email marketing metrics of your campaign",
            fill: true,
            borderColor: 'lemonchiffon',
            backgroundColor: 'lemonchiffon',
            data:userdata?.map(
                (data)=>data.number
            )
        }]
    });
    return(
        <>
            <div className="d-flex align-items-center mt-3 mb-3">
                <span className="me-3">
                   <FaCircleNotch
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                    Statistics
                </h2>
            </div>
            <div className="chat-flex align-items-end wrap">
                <div className="my-3 rounded border p-3 bar-container me-3 w-100">
                    <LineChart data={userData}/> 
                </div>
            </div>
        </>
    )
}