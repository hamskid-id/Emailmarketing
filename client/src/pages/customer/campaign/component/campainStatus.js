import {useSelector} from "react-redux";
import { NoData } from "../../../../components/nodata";
import { ViewportList } from "react-viewport-list";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
export const CampaignStatus =()=>{
    const campaign = useSelector(
        state => state.campaign
    )
     const listRef = useRef(null)
     const navigate = useNavigate()
     console.log(campaign?.sentCampaigns?.data)
    return(
        <>
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3 w-overflow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Sender Name</th>
                        <th scope="col">Sender Email</th>
                        <th scope="col">Recipient</th>                   
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Subcribers</th>
                    </tr>
                </thead>
                <tbody> 
                <ViewportList viewportRef={listRef} items={ campaign?.sentCampaigns?.data} margin={8}>
                    {
                        ((camp,index)=>{
                            const{
                                id,
                                name,
                                sender_name,
                                sender_email,
                                reply_to,
                                created_at,
                                updated_at,
                                subscribers
                            }=camp
                            return(
                                <tr key={index}>
                                    <th scope="row" className="fs-6">{index+1}</th>
                                    <td className="fs-6">{name}</td>
                                    <td className="fs-6">{sender_name}</td>
                                    <td className="fs-6">{sender_email}</td>
                                    <td className="fs-6">{reply_to}</td>
                                    <td className="fs-6">{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                    </td>
                                    <td className="fs-6">{
                                                new Date(updated_at)
                                                .toLocaleString()
                                    }</td>
                                    <td 
                                        className="fs-6 text-success"
                                        onClick={()=>window.location.replace(`/campaign_list/${name}/${id}`)}

                                    >see all</td>
                                </tr>
                            )
                        })
                        }
                        </ViewportList>
                    </tbody>
                </table>
                {
                   campaign.sentCampaigns?.length === 0 && <NoData/>
                }
            </div>
        </>
         
    )
}