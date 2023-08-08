import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Spinner from "./spinner/spinner";
import { DeleteTemplate, GetUserTemplate } from "../store/templateSlice";
import { EditTemplateView } from "../pages/customer/campaign/component/editCampaignTemplate";
import { Actions } from "./templateActions"
import { DeleteBtn } from "../pages/customer/template/components/deleteBtn";

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
    const action = "edit";
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetUserTemplate(null));
    },[dispatch])
    
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
                view="myTemplate"
            />
            <div className="w-overflow">
                <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Thumbnail</th>
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
                                        <th scope="row" className="fs-6">{index+1}</th>
                                        <td>
                                            <img 
                                                src="https://res.cloudinary.com/hamskid/image/upload/v1675956824/thumb_ymavb0.svg"
                                                alt="object not found"
                                                className="w-50"
                                            />
                                        </td>
                                        <td className="fs-6">{template_name}</td>
                                        <td className="fs-6">{template_describ}</td>
                                        <td className="fs-6">
                                            {
                                                new Date(created_at)
                                                    .toLocaleString()
                                            }
                                            </td>
                                            <td className="fs-6">{
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
                                                        <li
                                                            className="dropdown-item fs-6"
                                                            onClick={
                                                                ()=>{
                                                                    if(campaign){
                                                                        setCampaignSection({
                                                                            name:"Template",
                                                                            components:<EditTemplateView 
                                                                                id={id}
                                                                                campaignParams={campaignParams}
                                                                                setCampaignparams={setCampaignparams}
                                                                                setCampaignSection={setCampaignSection}
                                                                            />
                                                                        })
                                                                    }else{
                                                                        navigate(`/edit/template/${category}/${id}/${action}`)
                                                                    }
                                                                    
                                                                }
                                                            }
                                                        >
                                                        select
                                                        </li>
                                                        <DeleteBtn
                                                            status = {template.deleteStatus}
                                                            deleteFunc ={DeleteTemplate({id})}

                                                        />
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