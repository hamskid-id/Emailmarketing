import { FaSlidersH } from "react-icons/fa"
import { Modal } from "../../../../components/modal/modal"
import { CreateCampaignModal } from "./createCampaginmodal"
import { AllcampaignView } from "./view"

export const AllCampaignComponent =()=>{
    return(
        <div className="py-3">
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1 cl-blue fw-bold">
                    Campaigns
                </div>
            </div>
            <div className="w-overflow">
                <AllcampaignView/>
            </div>
            <Modal
                title="Create Campaign"
                body={<CreateCampaignModal/>}
            />
        </div>
    )
}