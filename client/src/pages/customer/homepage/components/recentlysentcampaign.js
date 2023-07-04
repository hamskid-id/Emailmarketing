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
            <div className="mt-3 mb-3">
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                     Recently sent campaigns
                </h2>
            </div>

            {/*Tags Created*/}

            {
                Tags?.Tags.length !==0 &&(
                    <div>
                        <select 
                            name="campains" 
                            id="campains"
                            className="btn rounded text-dark bg-ddd"
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
                                                        <span className="rounded text-dark bg-ddd px-2 py-1 me-3 btn">
                                                            {title}
                                                        </span>
                                                    </div>
                                                    <span className="text-dark break fs-6">
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
                    recentCampaigns.recentCampaigns?.length ===0 && <p className="fs-6 text-center c-grey">No campaign has being sent </p>
                }
            </div>
        </>
    )
}