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
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">From</th>
                        <th scope="col">Recipient</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Content</th>                       
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody> 
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
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{title}</td>
                                    <td>{recipient}</td>
                                    <td>{from}</td>
                                    <td>{subject}</td>
                                    <td>{content}</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div 
                                                className="d-flex align-items-center me-2 text-white bg bg-success rounded p-2"
                                                onClick={()=>navigate("/campaigns/stat")}>
                                                <span className="me-1">
                                                    <FaBacon/>
                                                </span>
                                                <span>
                                                    Statistics
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
                        <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5">
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