import {FaPaperPlane } from "react-icons/fa"
import { useSelector } from "react-redux"

export const RecentlySent=()=>{
    const recentCampaigns = useSelector(
        state => state.campaign
    )
    const Tags = useSelector(
        state => state.tag
    )

    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaPaperPlane
                        size="1.5rem"
                        color="grey"
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
                         Tags?.Tags?.map((drop,index)=>{
                            const {
                                name
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
                            reply_to,
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
                                    <div>
                                        <span className="rounded border px-2 py-1 me-3">
                                            Title
                                        </span>
                                    </div>
                                    <span className="text-primary break">
                                        {title}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <div>
                                        <span className="rounded border px-2 py-1 me-3">
                                            From
                                        </span>
                                    </div>
                                    <span className="text-primary break">
                                        {from_email}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <div>
                                        <span className="rounded border px-2 py-1 me-3">
                                            Subject
                                        </span>
                                    </div>
                                    <span className="text-primary break">
                                        {subject}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <div>
                                        <span className="rounded border px-2 py-1 me-3">
                                            Recipient
                                        </span>
                                    </div>
                                    <span className="text-primary break">
                                        {reply_to}
                                    </span>
                                </div>
                                <div 
                                    className="d-flex wt-50 mb-3"
                                    >
                                    <div>
                                        <span className="rounded border px-2 py-1 me-3">
                                            Content
                                        </span>
                                    </div>
                                    <span className="text-primary break">
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