import { useState } from "react";
import { BarChart } from "../../../../../components/barchat";
import { userdata } from "../../component/userdata";
import { BounceLog } from "./bouncelog";
import { ClickLog } from "./clicklog";
import { FeedbackLog } from "./feedbacklog";
import { OpenLog } from "./openlog";
import { UnsubscribeLog } from "./unsubscribelog";

export const Statistics =({setListSection})=>{
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
        <div className="py-2">
            <p className="fs-3">Statistics</p>
            <h6 className="fs-6">
                The key email marketing metrics of your campaign are visualized in the tables/charts below.
                You can look at those metrics to assess the overall success of your email marketing campaigns.
            </h6>
            <div className="chat-flex align-items-end wrap">
                <div className="my-3 rounded border p-1 bar-container me-3 wt-50">
                    <BarChart data={userData}/>
                </div>                  
                <div 
                    className="my-3 p-1 me-3"
                    style={{lineHeight: "40px"}}
                >
                    {
                        [
                            {
                                name:"Opened",
                                amount:0,
                                log:<OpenLog/>
                            },
                            {
                                name:"Not opened",
                                amount:0,
                                log:<OpenLog/>
                            },
                            {
                                name:"Unique clicks",
                                amount:0,
                                log:<ClickLog/>
                            },
                            {
                                name:" Unsubscribed",
                                amount:0,
                                log:<UnsubscribeLog/>
                            },
                            {
                                name:"Bounced",
                                amount:0,
                                log:<BounceLog/>
                            },
                            {
                                name:"Reported",
                                amount:0,
                                log:<FeedbackLog/>
                            }

                        ]?.map((activ,index)=>{
                            const{
                                name,
                                amount,
                                log
                            }=activ
                            return(
                                <div key={index}>
                                    <span className="fs-6 me-2">
                                        {name}
                                    </span> 
                                    <span className="fs-6 fw-bold me-2">
                                        {amount} {name} .
                                    </span>
                                    <span 
                                        className="fs-6 text-primary"
                                        onClick={
                                            ()=>setListSection({
                                                name:"Sending Logs",
                                                components:log
                                            })
                                        }
                                    >View Log</span>
                                </div>
                            )
                        })
                    }
                    
                </div>                  
            </div>
        </div>
    )
}