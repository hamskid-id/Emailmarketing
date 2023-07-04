import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Actions } from "./actions";
import Spinner from "../../../../components/spinner/spinner";
import { NoData } from "../../../../components/nodata";
import { DeleteCampaigns } from "../../../../store/campaignSlice";

export const AllcampaignView =()=>{
    const navigate = useNavigate();
    const campaign = useSelector(
        state => state.campaign
    )
    const dispatch = useDispatch()

    if(campaign.deleteStatus ==='pending'){
        return <Spinner/>
    }

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
                                    <th scope="row" className="fs-6">{index+1}</th>
                                    <td className="fs-6">{title}</td>
                                    <td className="fs-6">{from_email}</td>
                                    <td className="fs-6">{reply_to}</td>
                                    <td className="fs-6">{subject}</td>
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
                                                        onClick={()=>navigate(`/campaigns/stat/${id}`)}
                                                    >
                                                        Statistics
                                                    </li>
                                                    {/* <li 
                                                        className="dropdown-item"
                                                    >
                                                        Email verification
                                                    </li> */}
                                                    <li
                                                        className="dropdown-item fs-6"
                                                        onClick={()=>dispatch(DeleteCampaigns({id}))}
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
                   campaign.Campaigns?.length === 0 && <NoData/>
                }
            </div>
        </>
         
    )
}