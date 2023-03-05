import {FaPaperPlane } from "react-icons/fa"
import { useSelector } from "react-redux"
import { recentDropdown } from "./recentcampaindropdown"

export const RecentlySent=()=>{
    const recentCampaigns = useSelector(
        state => state.campaign
    )
    const campaign=[{
        title:"title",
        recipient:"recipient",
        from:"hamzat",
        subject:"hellow orld",
        content:"greetins to the wolrd"
    }]
    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaPaperPlane
                        size="1.5rem"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                     Recently sent campaigns
                </h2>
            </div>
            <div className="w-100">
                <select 
                    name="campains" 
                    id="campains"
                    className="fs-6 p-2 rounded text-white b-grey campains-select"
                    >
                    {
                        recentDropdown?.map((drop,index)=>{
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
            <div className="mt-5">
                {
                    recentCampaigns.recentCampaigns?.map((camp,index)=>{
                        const{
                            content,
                            from_email,
                            receipient,
                            subject,
                            title,
                        }=camp
                        return(
                            <div 
                                key={index}
                                className="d-flex wrap justify-content-between">
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <span className="rounded border px-2 py-1 me-3">
                                        Title
                                    </span>
                                    <span className="text-primary">
                                        {title}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <span className="rounded border px-2 py-1 me-3">
                                        From
                                    </span>
                                    <span className="text-primary">
                                        {from_email}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <span className="rounded border px-2 py-1 me-3">
                                        Subject
                                    </span>
                                    <span className="text-primary break">
                                        {subject}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <span className="rounded border px-2 py-1 me-3">
                                        Recipient
                                    </span>
                                    <span className="text-primary">
                                        {receipient}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <span className="rounded border px-2 py-1 me-3 break">
                                        Content
                                    </span>
                                    <span className="text-primary">
                                        {content}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    recentCampaigns.recentCampaigns?.length ===0 && <p className="fs-5 text-center c-grey">No campaign has being sent </p>
                }
            </div>
        </>
    )
}