import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Spinner from "./spinner/spinner";
import { GetUserTemplate } from "../store/templateSlice";
import { EditTemplateView } from "../pages/customer/campaign/component/editCampaignTemplate";
import { Actions } from "./templateActions"

export const MyTemplateList =({
    campaign,
    setCampaignSection,
    setCampaignparams,
    campaignParams
})=>{
    const navigate = useNavigate();
    const template = useSelector(
        state => state.template
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetUserTemplate(null));
    },[dispatch])
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
    
    if(template.GetUserTemplateStatus ==='pending'){
        return <Spinner/>
    }
    return(
        <>
            <Actions
                campaign={campaign}
                setCampaignSection={setCampaignSection}
                setCampaignparams={setCampaignparams}
                campaignParams={campaignParams}
                deleteArray={itemToDelete}
            />
            <div className="w-overflow">
                <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            template.template?.map((temp,index)=>{
                                const{
                                    template_name,
                                    id,
                                    template_describ,
                                    created_at,
                                    updated_at,
                                }=temp
                                const category="personal"
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
                                        <td>{template_name}</td>
                                        <td>{template_describ}</td>
                                        <td>
                                            {
                                                new Date(created_at)
                                                    .toLocaleString()
                                            }
                                            </td>
                                            <td>{
                                                new Date(updated_at)
                                                    .toLocaleString()
                                            }</td>
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
                                                        {
                                                            campaign?(
                                                                <li
                                                                    className="dropdown-item"
                                                                    onClick={
                                                                        ()=>{
                                                                            setCampaignSection({
                                                                                name:"Template",
                                                                                components:<EditTemplateView 
                                                                                    id={id}
                                                                                    campaignParams={campaignParams}
                                                                                    setCampaignparams={setCampaignparams}
                                                                                    setCampaignSection={setCampaignSection}
                                                                                />
                                                                            })
                                                                        }
                                                                    }
                                                                >
                                                                Edit
                                                                </li>
                                                            ):(
                                                                <li 
                                                                    className="dropdown-item"
                                                                    onClick={
                                                                        ()=>navigate(`/edit/template/${category}/${id}`)
                                                                    }
                                                                >
                                                                    Edit
                                                                </li>
                                                            )
                                                        }
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

            </div>
            
        </>
    )
}