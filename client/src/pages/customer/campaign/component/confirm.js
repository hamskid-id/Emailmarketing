import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { CreateCampaigns } from "../../../../store/campaignSlice"
import { AllFieldSection } from "./allfilledsection"


export const Confirm =({
    setCampaignSection,
    setCampaignparams,
    campaignParams
})=>{

    const campaign = useSelector(
        state => state.campaign
    )
    const dispatch = useDispatch()
    const handleSend=()=>{
        let filledRequired = false;

        //check if all field has being filled
        const allParameters =[
            campaignParams.NameYourCampaign,
            campaignParams.EmailSubject,
            campaignParams.content,
            campaignParams.FromEmail,
            campaignParams.FromName,
            campaignParams.ReplyTo,
            campaignParams.DeliveryDate,
            // campaignParams.DeliveryTime,
            campaignParams.tag_id?.id,
            campaignParams.campaignType
        ]

        allParameters.map((camp)=>{
            if(!camp){
                filledRequired= true;
            }
        })
        if(filledRequired){
                toast.error('Please fill in all the required information')
        }else{
            
            dispatch(
                CreateCampaigns({
                    title:campaignParams.NameYourCampaign,
                    reply_to:campaignParams.ReplyTo,
                    from_email:campaignParams.FromEmail,
                    from_name:campaignParams.FromName,
                    subject:campaignParams.EmailSubject,
                    content:campaignParams.content,
                    tag_id:campaignParams.tag_id?.id,
                    content_type: campaignParams.campaignType,
                    schedule_date:campaignParams.DeliveryDate,
                    status:campaignParams.status
                })
            )
        }
    }

    return(
        <div className="d-flex flex-column justify-content-center m-auto wt-75">
            <p className="fs-2 text-center fw-bold">You're all set to send!</p>
            <p className="fs-6 text-center">Review the feedback below before sending your Campaign.</p>
            <AllFieldSection
                 setCampaignSection={setCampaignSection}
                 setCampaignparams={setCampaignparams}
                 campaignParams={campaignParams}
            />
            <hr className="b-grey mb-0 mt-0"/>
            {
                campaign.CreateCampaignsStatus === "pending"?(
                    <button 
                        className="btn btn-md btn-success mt-0 fl-r mb-5 mt-2 me-2 w-fit-content"
                    >
                        <span 
                            className="spinner-border spinner-border-sm" 
                            role="status" 
                            aria-hidden="true">
                        </span>
                            Please wait...
                    </button>
                ):(
                    <button 
                        className="btn btn-md btn-success mt-0 fl-r mb-5 mt-2 me-2 w-fit-content"
                        onClick={handleSend}
                    >
                        Send Now
                    </button>
                )
            }
            
        </div>
    )
}