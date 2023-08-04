import { useState } from "react"
import { BounceLog } from "./bouncelog"
import { ClickLog } from "./clicklog"
import { DeliveryLog } from "./delievrylog"
import { FeedbackLog } from "./feedbacklog"
import { Links } from "./links"
import { OpenLog } from "./openlog"
import { Overview } from "./overview"
import { SubTable } from "./subscribers"
import { UnsubscribeLog } from "./unsubscribelog"

export const CampaignStatisticsContent =()=>{
        const[
            ListSection,
            setListSection
        ]=useState({
            name:"Overview",
            components:""
        })
    return(
        <>
            <div className="pdx-4 bg-lightBlue">
            <p className="fs-1">Special offer!</p>
            {
                <div className="d-flex align-items-start w-overflow mt-4 mb-3">
                    {
                        [
                            {
                                name:"Overview",
                                components:<Overview
                                    setListSection={setListSection}
                                />
                            },
                            {
                                name:"Links",
                                components:<Links/>
                            },
                            {
                                name:"Subscribers",
                                components:<SubTable
                                    setListSection={setListSection}
                                />
                            },
                            {
                                name:"Sending Logs",
                                components:<Overview/>
                            }
                        ]?.map((section,index)=>{
                            const{
                                name,
                                components
                            }=section
                            if(index ===3){
                                return(
                                    <div
                                        key={index}
                                        className="me-4"
                                    >
                                        <h6
                                            className={`fs-6
                                                ${
                                                    ListSection.name === name?
                                                    `border-bottom-slate-grey px-2 pb-2`:
                                                    null
                                                }`
                                            }
                                            data-bs-toggle="collapse" 
                                            href="#collapseExample" 
                                            role="button" 
                                            aria-expanded="false" 
                                            aria-controls="collapseExample"
                                            onClick={
                                                ()=>setListSection({
                                                        ...ListSection,
                                                        name:name
                                                })
                                            }
                                        >
                                            {name}
                                        </h6>
                                        <ul 
                                            className="collapse rounded border bg bg-white ps-0 pb-2" 
                                            id="collapseExample"
                                            >
                                            <li 
                                                className="dropdown-item"
                                                onClick={
                                                    ()=>setListSection({
                                                            ...ListSection,
                                                            components:<DeliveryLog/>
                                                    })
                                                }
                                                >Delivery Log</li>
                                            <li 
                                                className="dropdown-item"
                                                onClick={
                                                    ()=>setListSection({
                                                            ...ListSection,
                                                            components:<BounceLog/>
                                                    })
                                                }
                                                >Bounce Log</li>
                                            <li 
                                                className="dropdown-item"
                                                onClick={
                                                    ()=>setListSection({
                                                            ...ListSection,
                                                            components:<FeedbackLog/>
                                                    })
                                                }
                                                >Feedback Log</li>
                                            <li 
                                                className="dropdown-item"
                                                onClick={
                                                    ()=>setListSection({
                                                            ...ListSection,
                                                            components:<OpenLog/>
                                                    })
                                                }
                                                >Open Log</li>
                                            <li 
                                                className="dropdown-item"
                                                onClick={
                                                    ()=>setListSection({
                                                            ...ListSection,
                                                            components:<ClickLog/>
                                                    })
                                                }
                                                >Click Log</li>
                                            <li 
                                                className="dropdown-item"
                                                onClick={
                                                    ()=>setListSection({
                                                            ...ListSection,
                                                            components:<UnsubscribeLog/>
                                                    })
                                                }
                                                >Unsubscribe Log</li>
                                        </ul>
                                    </div>
                                )
                            }
                            return(
                                <div
                                    key={index}
                                    className="me-4"
                                >
                                    <h6
                                        className={`fs-6
                                            ${
                                                ListSection.name === name?
                                                `border-bottom-slate-grey ps-0 pb-2`:
                                                null
                                            }`
                                        }
                                        onClick={
                                            ()=>setListSection({
                                                    name:name,
                                                    components:components
                                            })
                                    }
                                    >
                                        {name}
                                    </h6>
                                </div>
                            )
                        })
                    }
                </div>
            }
            </div>
            <div className="pdx-4">
                {
                    ListSection.components?ListSection.components:<Overview 
                        ListSection={ListSection}
                        setListSection={setListSection}
                    />
                }
            </div>
        </>

    )
}