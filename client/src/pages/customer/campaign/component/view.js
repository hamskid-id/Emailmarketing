import {useSelector} from "react-redux";
import { FaCartArrowDown} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Actions } from "./actions";

export const AllcampaignView =()=>{
    const navigate = useNavigate();
    const campaign = useSelector(
        state => state.campaign
    )
    const[
        itemToDelete,
        setItemToDelete
    ]=useState([])
    const handleChange=(e,{id})=>{
        if(e.target.checked){
            setItemToDelete((prevState)=>{
                return[
                ...prevState,
                    id
                ]
            })
        }else{
            const newArray = itemToDelete.filter(item=>item!==id)
            setItemToDelete(newArray)
        }
    }
    return(
        <>
        <Actions
            deleteArray={itemToDelete}
            actionName="Create Campaign"
        />
        <div>
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3 w-overflow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">From</th>
                        <th scope="col">Recipient</th>
                        <th scope="col">Subject</th>                       
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
                                subject
                            }=camp
                            return(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>
                                        <input 
                                            className="darkform-check-input p-2 border border-white rounded form-check-input me-1"
                                            type="checkbox"
                                            onChange={(e)=>handleChange(e,{id})}
                                        />
                                    </td>
                                    <td>{title}</td>
                                    <td>{from_email}</td>
                                    <td>{reply_to}</td>
                                    <td>{subject}</td>
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