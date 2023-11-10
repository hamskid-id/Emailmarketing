import {useSelector} from "react-redux";
import { NoData } from "../../../../components/nodata";
import { ViewportList } from "react-viewport-list";
import {useParams} from "react-router-dom";
import {useRef} from "react";
import { useState } from "react";
import { useEffect } from "react";
export const User_Campaign_sub_list=()=>{
    const campaign = useSelector(
        state => state.campaign
    )
    const [
        subscribers,
        setSubscribers
    ]=useState({});
     const listRef = useRef(null);
     const{
        id
     }=useParams();
     console.log(id)
     useEffect(()=>{
        const newCampaignSubscribers = campaign?.sentCampaigns?.data?.find((camp)=>camp.id == id);
        setSubscribers(newCampaignSubscribers);
     },[campaign?.sentCampaigns?.data])
    return(
        <>
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3 w-overflow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Country</th>
                        <th scope="col">MaiL Sent At</th>                      
                        <th scope="col">Created At</th>
                    </tr>
                </thead>
                <tbody> 
                <ViewportList viewportRef={listRef} items={subscribers?.subscribers} margin={8}>
                    {
                        ((camp,index)=>{
                            const{
                                name,
                               email,
                               phone,
                                country,
                                created_at,
                                mail_sent_at
                            }=camp
                            return(
                                <tr key={index}>
                                    <th scope="row" className="fs-6">{index+1}</th>
                                    <td className="fs-6">{name}</td>
                                    <td className="fs-6">{email}</td>
                                    <td className="fs-6">{phone}</td>
                                    <td className="fs-6">{country}</td>
                                    <td className="fs-6">{mail_sent_at == null?"null":mail_sent_at}</td>
                                    <td className="fs-6">{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                    </td>
                                </tr>
                            )
                        })
                        }
                        </ViewportList>
                    </tbody>
                </table>
                {
                   subscribers?.subscribers?.length === 0 && <NoData/>
                }
            </div>
        </>
         
    )
}