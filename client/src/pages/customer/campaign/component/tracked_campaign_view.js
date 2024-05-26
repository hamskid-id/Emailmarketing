import { useDispatch, useSelector } from "react-redux"
import Spinner from "../../../../components/spinner/spinner";
import { GetSentCampaigns } from "../../../../store/campaignSlice"
import { useEffect, useState } from "react"
import { AiOutlineFundView } from "react-icons/ai"
import { TrackedCampaign } from "./tracked_campaign"
import { useParams } from "react-router-dom";
import { Layout } from "../../layoute";
import ReactPaginate from "react-paginate";

export const Tracked_campaign_view =()=>{
    const campaign = useSelector(
        state => state.campaign
    )
    const[
        activePage,
        setActivePage
    ]=useState(1);
    const{
        id
    }=useParams();
    const dispatch = useDispatch();
    const handlePageClick = (event) => {
        let page_number=event.selected +1;
        setActivePage(page_number)
    };
    useEffect(()=>{
        dispatch(GetSentCampaigns({
            id:id,
            page_number:activePage
        }))
    },[dispatch,activePage,id])

    return(
        <>
            <Layout
                routeChildren={
                    <div className="pb-3">
                        <div className="d-flex align-items-center pb-3 pt-2 mb-3 bg-lightBlue pdx-4">
                            <span className="me-2">
                                <AiOutlineFundView
                                    size="1.5rem"
                                    color="grey"
                                />
                            </span>
                            <div className="fs-4">
                                Campaign tracks
                            </div>
                        </div>

                        {
                            campaign.GetSentCampaignsStatus ==='pending'?
                            <Spinner/>:(
                                <div className="w-overflow pdx-4">
                                    <p className="fs-[1rem] fw-bold">{`Name:${" "}${campaign.sentCampaigns?.name}`}</p>
                                    <p className="fs-[0.8rem] fw-medium">{`Reply To:${" "}${campaign.sentCampaigns?.reply_to}`}</p>
                                    <p className="fs-[1rem] fw-medium">{`Sender Email:${" "}${campaign.sentCampaigns?.sender_email}`}</p>
                                    <p className="fs-[0.8rem] fw-medium">{`Sender Name:${" "}${campaign.sentCampaigns?.sender_name}`}</p>
                                    <p className="fs-[0.8rem] fw-medium">{`Delivery date:${" "}${campaign.sentCampaigns?.delivery_date}`}</p>
                                    <p className="fs-[0.8rem] fw-medium">Subscribers List:</p>
                                    
                                    <div className="flex flex-col justify-center items-center m-auto w-fit my-4 ">
                                        {campaign.sentCampaigns &&(
                                            <ReactPaginate
                                                breakLabel="..."
                                                nextLabel=" >"
                                                onPageChange={handlePageClick}
                                                pageRangeDisplayed={4}
                                                pageCount={campaign.sentCampaigns?.pagination?.last_page}
                                                initialPage={campaign.sentCampaigns?.pagination?.current_page -1}
                                                disableInitialCallback={true}
                                                previousLabel="<"
                                                renderOnZeroPageCount={null}
                                                containerClassName="d-flex m-2 bg-white list-unstyled rounded"
                                                activeClassName="text-white bg-secondary border border-light"
                                                previousClassName="p-2 bg-light text-dark"
                                                nextClassName="p-2 bg-light text-dark"
                                                pageClassName="px-4 py-2"
                                            /> 
                                        )}
                                    </div>
                                    <TrackedCampaign/>
                                </div>
                            )
                        }   
                    </div>
                }
            />
        </>
        
    )
}