import {useSelector} from "react-redux";
import { Actions } from "./actions";
import { NoData } from "../../../../components/nodata";
import { Modal } from "../../../../components/modal/modal";
import { useRef } from "react";
import { CreateTag } from "../../list/components/tagcomponent/tagsmodalcontent";
import { ViewportList } from "react-viewport-list";

export const TrackedCampaign=()=>{
    const hidemodal = useRef(null)
    const campaign = useSelector(
        state => state.campaign
    )
    const listRef = useRef(null)
   

    return(
        <>
        <div className="w-overflow" ref={listRef}>
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3 w-overflow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Opened At</th>
                        <th scope="col">Mail Sent At</th>                       
                        <th scope="col">Phone</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody> 
                <ViewportList viewportRef={listRef} items={ campaign.sentCampaigns?.subscribers} margin={8}>
                    {
                        ((camp,index)=>{
                            const{
                                country,
                                email,
                                id,
                                mail_sent_at,
                                name,
                                opened_at,
                                phone
                            }=camp
                            return(
                                <tr key={index}>
                                    <th scope="row" className="fs-6">{index+1}</th>
                                    <td className="fs-6">{name}</td>
                                    <td className="fs-6">{email}</td>
                                    <td className="fs-6">{opened_at}</td>
                                    <td className="fs-6">{mail_sent_at}</td>
                                    <td className="fs-6">{phone}</td>
                                    <td className="fs-6">{country}</td>
                                    
                                </tr>
                            )
                        })
                        }
                        </ViewportList>
                    </tbody>
                </table>
                {
                   campaign.sentCampaigns?.subscribers?.length === 0 && <NoData/>
                }
            </div>
        </>
         
    )
}