import { AutoConnector } from "./autoConnector"
import Switch from "react-switch";
import { useState } from "react";
import { Settings } from "./settings";
import { Insight } from "./insight";
import { Stat } from "./statistics";
import { AutoDesignModalContent } from "./autodesinmodalcontent";
import { Modal } from "../../../../components/modal/modal";

export const AutoDesignContent=()=>{
    const [
        checked,
        setChecked
    ]=useState(true)

    const handleRunningStatus=(checked)=>{
        setChecked(checked)
    }
    const[
        Autosection,
        setAutoSection
    ]=useState({
        name:"Settings",
        components:<Settings/>
    })
    return(
        <>
            <div className="row">
                <div className="col-md-6 b-gainsboro">
                    <div className="p-2 automationEnv">
                        <p className="fs-5 text-center">Automation starts when the following trigger condition is met</p>
                        <AutoConnector/>
                    </div>
                </div>
                <div className="col-md-6 autoview">
                    <div className="pd-1">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div>
                                    <p className="fw-bold fs-5">Sample Automation</p>
                                    <h6 className="fs-6">Automated email marketing campaign which is triggered for new subscriber,
                                        applied for "80,000 Banking LEADS & Potentials #23093" mail list
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="d-flex align-items-center">
                                        <label 
                                            htmlFor="switch"
                                            className="me-2"
                                        >
                                            Running
                                        </label>
                                        <Switch 
                                            onChange={handleRunningStatus} 
                                            checked={checked} 
                                        />
                                    </div>                             
                                    <button className="btn btn-success btn-md text-white ms-3">settings</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between w-overflow mt-4">
                            {
                                [
                                    {
                                        name:"Settings",
                                        components:<Settings/>
                                    },
                                    {
                                        name:"Insight",
                                        components:<Insight/>
                                    },
                                    {
                                        name:"Statistics",
                                        components:<Stat/>
                                    },
                                ]?.map((section,index)=>{
                                    const{
                                        name,
                                        components
                                    }=section
                                    return(
                                        <div
                                            key={index}
                                        >
                                            <h6
                                                className={`fs-6 fw-bold 
                                                    ${
                                                        Autosection.name === name?
                                                        `border-bottom-slate-grey p-2`:
                                                        null
                                                    }`
                                                }
                                                onClick={
                                                    ()=>setAutoSection({
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
                        <hr className="mt-0"/>
                        <div>
                            {Autosection.components}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Add an Action"
                body={        
                    <AutoDesignModalContent/>
                }
            />
        </>
    )
}