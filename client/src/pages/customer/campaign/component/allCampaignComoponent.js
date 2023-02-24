import { FaSlidersH } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "../../../../components/modal/modal"
import { CreateCampaignModal } from "./createCampaginmodal"
import { AllcampaignView } from "./view"
import Spinner from "../../../../components/spinner/spinner";
import { GetCampaigns } from "../../../../store/campaignSlice"
import { useEffect } from "react"

export const AllCampaignComponent =()=>{
    const dispatch = useDispatch();
    const campaign = useSelector(
        state => state.campaign
    )

    useEffect(()=>{
        dispatch(GetCampaigns());
    },[dispatch])
    return(
        <div className="py-3">
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Campaigns
                </div>
            </div>
            {
                campaign.GetCampaignsStatus ==='pending'?
                <Spinner/>:(
                    <div className="w-overflow">
                        <AllcampaignView/>
                    </div>
                )
            }          
            <Modal
                title="Create Campaign"
                body={<CreateCampaignModal/>}
            />
        </div>
    )
}