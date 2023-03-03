import { useState } from "react";
import { PieChart } from "../../../../../components/piechat";

export const EmailVerification =()=>{
    const piedata=[
        {
            name:"Deliverable",
            number:50
        },{
            name:"UnDeliverable",
            number:20
        },{
            name:"Risky",
            number:10
        },{
            name:"Unverified",
            number:5
        },{
            name:"UnKnown",
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
            label:"Subscribers",
            data:piedata?.map(
                (data)=>data.number
            )
        }]
    });
    return(
        <div className="row">
            <div className="col-md-8">
                <div className="p-2 m-3">
                    <div className="mb-5">
                        <p className="fs-3">List verification</p>
                        <p className="fs-6 mb-3">
                            Typically, email lists degrade at a rate of 22.5% each year. This means that a huge amount of your mailing list subscribers’ 
                            emails won’t be valid after a year, 
                            resulting in increased bounce rate, ruined domain reputation... 
                            Perdiv email validation before running a campaign helps protect your business reputation.
                        </p>
                        <div className="w-100 d-flex flex-column mb-2">
                            <label 
                                htmlFor="server">
                                Select Email Verification Server
                            </label>
                            <select 
                                name="server" 
                                id="server"
                                className="fs-5 p-2 rounded text-black w-100"
                                >
                                {
                                    []?.map((drop,index)=>{
                                        const {
                                            name,
                                            url
                                        }=drop
                                        return(
                                            <option 
                                                value={name}
                                                key={index}
                                            >{name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <button className="btn btn-md b-grey text-white">Start verification Process</button>
                    </div>
                    <div>
                        <p className="fs-3">Verification status</p>
                        <p className="fs-6 mb-3">
                            There is currently no verification process is running. 
                            Your list has 0 over a total of 1,945 email addresses that are verified. 
                            Run the verification process again to cover the remaining ones in your list. 
                            Or reset your list's verification results to have email addresses verified again.
                        </p>
                        <button className="btn btn-md b-grey text-white">Reset verification Data</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="my-3 rounded border p-2 chat-container me-3 w-100 m-3">
                    <PieChart data={subData}/>
                </div> 
            </div>
        </div>
    )
}