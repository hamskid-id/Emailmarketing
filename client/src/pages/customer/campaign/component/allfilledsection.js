import { Recipient } from "./recipient"
import { Schedule } from "./schedule"
import { Setup } from "./setup"

export const AllFieldSection=({
    setCampaignSection,
    setCampaignparams,
    campaignParams
})=>{
    return(
        <div>
            {
                [
                    {
                        name:"Tag *",
                        content:campaignParams.tag_id?.name,
                        section:"Recipients",
                        components:<Recipient
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />,
                        active:0
                    },
                    {
                        name:"Name your campaign *",
                        content:campaignParams.NameYourCampaign,
                        section:"Setup",
                        components:<Setup
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />,
                        active:1
                    },
                    {
                        name:"Email subject *",
                        content:campaignParams.EmailSubject,
                        section:"Setup",
                        components:<Setup                            
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />,
                        active:1
                    },
                    {
                        name:"From name *",
                        content:campaignParams.FromName,
                        section:"Setup",
                        components:<Setup                            
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />,
                        active:1
                    },
                    {
                        name:"From email *",
                        content:campaignParams.FromEmail,
                        section:"Setup",
                        components:<Setup                            
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />,
                        active:1
                    },
                    {
                        name:"Reply To *",
                        content:campaignParams.ReplyTo,
                        section:"Setup",
                        components:<Setup                           
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />,
                        active:1
                    },
                    {
                        name:"Delivery date *",
                        content:campaignParams.DeliveryDate,
                        section:"Schedule",
                        components:<Schedule                            
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />,
                        active:3
                    }
                ]?.map((sect,index)=>{
                    const{
                        name,
                        content,
                        section,
                        components,
                        active
                    }=sect
                    return(
                        <div 
                            className="d-flex justify-content-between align-items-center"
                            key={index}
                        >
                            <div className="ellipsis pe-2">
                                <h6 className="fs-4 break">{name}</h6>
                                <h6 className="fs-6 break ellipsis">{content?content:"Unavailable"}</h6>
                            </div>
                            <div>
                                <button 
                                    className="btn btn-md b-grey"
                                    onClick={
                                        ()=>
                                        {
                                            setCampaignSection({
                                                name:section,
                                                components:components
                                            })
                                                setCampaignparams({
                                                ...campaignParams,
                                                sectionCompleted:active
                                            })
                                        }
                                    }
                                    >Edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}