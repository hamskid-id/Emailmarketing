import { FaCartArrowDown, FaCircleNotch } from "react-icons/fa"
import { recentDropdown } from "./recentcampaindropdown"

export const RecentlySent=()=>{
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
                   <FaCircleNotch
                        size="2rem"
                    />
                </span>
                <h2 
                    className="fs-3 w-100 mb-0"
                >
                     Recently sent campaigns
                </h2>
            </div>
            <div className="w-100">
                <select 
                    name="campains" 
                    id="campains"
                    className="fs-5 p-2 rounded text-white b-grey campains-select"
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
            
                <div className="d-flex flex-column">
                    {
                        campaign
                           ?.length ===0 &&(
                            <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5">
                                <FaCartArrowDown
                                    color="grey"
                                    size="7rem"
                                />
                                <p className="fw-bold">
                                    Your campaign list is presently empty
                                </p>
                                <div>
                                    Dont worry click on create campaign to get started. 
                                </div>
                            </div>
                        )
                    }
                    <div className="mt-3">
                    {
                        campaign
                            ?.map((camp,index)=>{
                                const{
                                    title,
                                    recipient,
                                    from,
                                    subject,
                                    content
                                }=camp
                                return(
                                    <div className="row mb-2" key={index}>
                                        <div className="col-md-6 mb-2">
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 fw-bold fs-5">
                                                        Title :
                                                    </span>
                                                    <span className="fs-5">
                                                        {title}
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 fw-bold fs-5">
                                                        From :
                                                    </span>
                                                    <span className="fs-5">
                                                        {from}
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 fw-bold fs-5">
                                                        Subject :
                                                    </span>
                                                    <span className="fs-5">
                                                    {subject}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 fw-bold fs-5" >
                                                    Recipient :
                                                    </span>
                                                    <span className="fs-5">
                                                        {recipient}
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 fw-bold fs-5">
                                                        Content :
                                                    </span>
                                                    <span className="fs-5">
                                                        {content}
                                                    </span>
                                                </div>                      
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                    </div>
                </div>
        </>
    )
}