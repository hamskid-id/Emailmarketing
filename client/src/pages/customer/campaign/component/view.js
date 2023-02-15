import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { FaCartArrowDown, FaPencilAlt } from "react-icons/fa";
import { GetCampaigns } from "../../../../store/campaignSlice";
import { Actions } from "../../../../components/actions";

export const AllcampaignView =()=>{
    const campaign = useSelector(
        state => state.campaign
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetCampaigns(null));
    },[dispatch])
    return(
        <>
        <Actions
            actionName="Create Campaign"
        />
        <div className="d-flex flex-column">
            {
                campaign
                    .Campaigns?.length ===0 &&(
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
            {
                campaign
                    .Campaigns?.map((camp,index)=>{
                        const{
                            title,
                            recipient,
                            from,
                            subject,
                            content
                        }=camp
                        return(
                            <div className="row bg-fade p-3" key={index}>
                                <div className="col-md-6 mb-2">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-3 fw-bold fs-5">
                                                Title :
                                            </span>
                                            <span>
                                                {title}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-3 fw-bold fs-5">
                                                From :
                                            </span>
                                            <span>
                                                {from}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-3 fw-bold fs-5">
                                                Subject :
                                            </span>
                                            <span>
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
                                            <span>
                                                {recipient}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-3 fw-bold fs-5">
                                                Content :
                                            </span>
                                            <span>
                                                {content}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center me-2 text-white bg bg-success rounded p-2">
                                                <span className="me-1">
                                                    <FaPencilAlt/>
                                                </span>
                                                <span>
                                                    Edit
                                                </span>
                                            </div>
                                            <div className="dropdown">
                                                <button 
                                                    className="btn btn-secondary dropdown-toggle" 
                                                    type="button" 
                                                    data-bs-toggle="dropdown" 
                                                    aria-expanded="false"
                                                >
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li
                                                        className="dropdown-item"
                                                    >
                                                        Delete
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>                      
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
        </>
         
    )
}