import { useEffect, useState } from "react"
import { FaRegEnvelope } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Confirm } from "./confirm"
import { Recipient } from "./recipient"
import { Schedule } from "./schedule"
import { Setup } from "./setup"
import { TemplateChoice } from "./templatechoice"

export const CreateCampaignContent =()=>{
    const auth = useSelector(
        state => state.auth
    )
    const[
        campaignSection,
        setCampaignSection
    ] = useState({
        name:"Recipients",
        components:""
    })

    const[
        campaignParams,
        setCampaignparams
    ]=useState({
        campaignType:localStorage.getItem("campaigns") ? localStorage.getItem("campaigns"):"",
        default:false,
        ToWhichListShallWeSend:"",
        NameYourCampaign:"",
        EmailSubject :"",
        FromName:auth.userdata?.user?.name,
        FromEmail:auth.userdata?.user?.email,
        ReplyTo:"",
        template:"",
        DeliveryDate:"",
        ADS:false,
        CTD:false,
        SDV:false,
        DeliveryTime:"",
        tag_id:null,
        content_type:"",
        status:1,
        TemplateName:"",
        templateDesign:{},
        TempalateDesc:"",
        sectionCompleted:0
    })

    const sections =[
        {
            name:"Recipients",
            components:<Recipient 
                campaignParams={campaignParams}
                setCampaignparams={setCampaignparams}
            />
        },
        {
            name:"Setup",
            components:<Setup
                campaignParams={campaignParams}
                setCampaignparams={setCampaignparams}
            />
        },
        {
            name:"Template",
            components:<TemplateChoice
                campaignParams={campaignParams}
                setCampaignparams={setCampaignparams}
                setCampaignSection={setCampaignSection}
            />
        },
        {
            name:"Schedule",
            components:<Schedule
                campaignParams={campaignParams}
                setCampaignparams={setCampaignparams}
            />
        },
        {
            name:"Confirm",
            components:<Confirm 
                campaignParams={campaignParams}
                setCampaignparams={setCampaignparams}
                setCampaignSection={setCampaignSection}
            />
        },
    ]

    useEffect(()=>{
        sections?.map((sec,index)=>{
            const{
                name,
                components
            }=sec   
            if(campaignParams?.sectionCompleted===index){
                setCampaignSection({
                    name:name,
                    components:components
                })
                console.log("set")
            }
        })      
    },[campaignParams])

    return(
            <div>
                <div className="d-flex align-items-center">
                    <span className="me-3">
                        <FaRegEnvelope
                            size="1.5rem"
                        />
                    </span>
                    <span className="fs-1">
                        Untitled
                    </span>
                </div>
                <div className="d-flex align-items-center w-overflow mt-4 mb-0">
                    {
                        sections?.map((section,index)=>{
                            const{
                                name,
                                components
                            }=section
                            return(
                                <div
                                    key={index}
                                >
                                    <h6
                                        className={`fs-6 pe-5 pb-1
                                        ${
                                            campaignParams?.sectionCompleted >= index ?
                                            `border-bottom-slate-grey`:
                                            `c-gainsboro`
                                        }`
                                    }
                                    
                                    onClick={()=>{
                                        setCampaignSection({
                                            name:name,
                                            components:components
                                        })
                                        setCampaignparams({
                                            ...campaignParams,
                                            sectionCompleted:index
                                        })
                                    }}
                                    >
                                        {name}
                                    </h6>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="b-grey mt-0"/>
                <div>
                    {
                        campaignSection.components                           
                    }
                </div>
            </div>
    )
}