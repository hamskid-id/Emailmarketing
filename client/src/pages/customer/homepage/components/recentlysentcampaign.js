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
            <div className="d-flex align-items-center mt-3 mb-3">
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

            {/*Tags Created*/}

            {
                Tags?.Tags.length !==0 &&(
                    <div className="w-100">
                        <select 
                            name="campains" 
                            id="campains"
                            className="btn rounded text-white b-grey campains-select"
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
                )
            }

            {/*Recently sent campaign*/}

            <div className="mt-3">
                {
                    recentCampaigns.recentCampaigns?.map((camp,index)=>{
                        const{
                            from_email,
                            reply_to,
                            subject,
                            title,
                        }=camp
                        return(
                            <div 
                                key={index}
                                className="d-flex wrap justify-content-between">
                                    {
                                        [
                                            {
                                                "title":"Title",
                                                "value":title
                                            },
                                            {
                                                "title":"From",
                                                "value":from_email
                                            },
                                            {
                                                "title":"Subject",
                                                "value":subject
                                            },
                                            {
                                                "title":"Recipient",
                                                "value":reply_to
                                            },
                                        ].map((details,index)=>{
                                            const{
                                                title,
                                                value
                                            }=details;
                                            return(
                                                <div 
                                                    className="d-flex wt-50 mb-3"
                                                    key={index}
                                                    >
                                                    <div>
                                                        <span className="rounded bg-slate-grey text-white px-2 py-1 me-3">
                                                            {title}
                                                        </span>
                                                    </div>
                                                    <span className="text-dark break">
                                                        {value}
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
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