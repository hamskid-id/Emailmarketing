import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { FaBacon, FaCartArrowDown, FaPencilAlt } from "react-icons/fa";
import { GetCampaigns} from "../../../../store/campaignSlice";
import { useNavigate } from "react-router-dom";
import { Actions } from "./actions";

export const AllcampaignView =()=>{
    const navigate = useNavigate();
    const campaign = useSelector(
        state => state.campaign
    )

    return(
        <>
        <Actions
            actionName="Create Campaign"
        />
        <div>
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3 w-overflow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">From</th>
                        <th scope="col">Recipient</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Content</th>
                         <th scope="col">Status</th>                       
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        campaign
                        .Campaigns?.map((camp,index)=>{
                            const{
                                id,
                                title,
                                reply_to,
                                from_email,
                                subject,
                                content,
                                status
                            }=camp
                            return(
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{title}</td>
                                    <td>{reply_to}</td>
                                    <td>{from_email}</td>
                                    <td>{subject}</td>
                                    <td>{content}</td>
                                     <td>{status}</td>
                                    <td>
                                        <div className="d-flex align-items-center">
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
                                                        onClick={()=>navigate(`/campaigns/stat/${id}`)}
                                                    >
                                                        Statistics
                                                    </li>
                                                    <li 
                                                        className="dropdown-item"
                                                    >
                                                        Email verification
                                                    </li>
                                                    <li
                                                        className="dropdown-item"
                                                    >
                                                        Delete
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                {
                   campaign
                   .Campaigns?.length === 0 &&(
                        <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5 px-2">
                            <FaCartArrowDown
                                color="grey"
                                size="7rem"
                            />
                            <p className="fw-bold">
                                Your Campaign List is presently empty
                            </p>
                            <div>
                                Dont worry click on Create  Campaign to get started. 
                            </div>
                        </div>
                    )
                }
            </div>
        </>
         
    )
}