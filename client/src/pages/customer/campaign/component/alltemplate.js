import {FaImages, FaTable, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { MyTemplateList } from "../../../../components/templateList";
import { GeneralList } from "../../../../components/generalTemplate";
import { useState } from "react";

export const GeneralTemplateList =({
    campaignParams,
    setCampaignparams,
    setCampaignSection
})=>{
    const navigate = useNavigate();
    const templates=[]
    const [
        activeView,
        SetActiveView
    ]=useState("myList");
    return(
        <>         
            <div className="py-3">
                <div className="d-flex align-items-center mb-3">
                    <span className="me-3">
                        <FaTable
                            size="1.5rem"
                        />
                    </span>
                    <div className="fs-1">
                        Templates
                    </div>
                </div>
                <div className="d-flex wrap justify-content-end mb-5">
                    <div 
                        className="d-flex align-items-center rounded py-2 px-4 fw-bold fs-5 border-drakslate-grey mrx-5 mbm-2"
                        onClick={
                            ()=>SetActiveView("myList")
                        }
                    >
                        <span className="me-2" >
                            <FaUserAlt/>
                        </span>
                        <span className="fs-6">
                            My Templates
                        </span>
                    </div>
                    <div 
                        className="d-flex align-items-center rounded py-2 px-4 fw-bold fs-5 b-gainsboro"
                        onClick={
                            ()=>SetActiveView("general")
                        }
                    >
                        <span className="me-2">
                            <FaImages/>
                        </span>
                        <span className="fs-6">
                            Base Template Gallary
                        </span>
                    </div>
                </div>
                <div>
                    {
                        activeView === 'myList'?
                        <MyTemplateList
                            campaign={true}
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />:
                        <GeneralList
                            campaign={true}
                            campaignParams={campaignParams}
                            setCampaignparams={setCampaignparams}
                            setCampaignSection={setCampaignSection}
                        />
                    }
                </div>
            </div>
        </>
    )
}