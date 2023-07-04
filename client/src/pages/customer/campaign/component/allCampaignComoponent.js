import { FaPaperPlane} from "react-icons/fa"
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
        <div className="pb-3">
            <div className="d-flex align-items-center pb-3 pt-2 mb-3 bg-lightBlue pdx-4">
                <span className="me-3">
                    <FaPaperPlane
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <div className="fs-4">
                    Campaigns
                </div>
            </div>
            {
                campaign.GetCampaignsStatus ==='pending'?
                <Spinner/>:(
                    <div className="w-overflow pdx-4">
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