import { FaFileUpload, FaLaptopMedical } from "react-icons/fa"
import {GeneralTemplateList } from "./alltemplate"

export const TemplateChoice =({
    campaignParams,
    setCampaignparams,
    setCampaignSection
})=>{
    // const handleChange=(e)=>{
    //     setCampaignparams({
    //         ...campaignParams,
    //         template:e.target.files[0]
    //     })
    // }
    return(
        <>
            <p className="fs-1 mb-3">Content Management</p>
            <h6 className="fs-3 mb-1">Email Content</h6>
            <h6 className="fs-6  wt-50 mb-5">Create your email from scratch or start from our pre-built templates / themes. 
                Customize the content the way you desire with our powerful but easy-to-use HTML email builder.
            </h6>
            <div>
                <div className="d-flex align-items-start mb-4 rounded wt-50 dotted pdw-1"
                    onClick={()=>{
                        setCampaignSection({
                            name:"Template",
                            components:<GeneralTemplateList
                                campaignParams={campaignParams}
                                setCampaignparams={setCampaignparams}
                                setCampaignSection={setCampaignSection}
                            />
                        })
                    }}
                >
                    <span className="me-3">
                        <FaLaptopMedical
                            size="3rem"
                            color="grey"
                        />
                    </span>
                    <span className="fs-1">
                        <h6 className="fs-5 text-primary wt-50">Create From An Existing template</h6>
                        <h6 className="fs-5 wt-50">Craft your beutiful email based off a prebuild template we made for you</h6>
                    </span>
                </div>
                {/* <div>
                    <label 
                        className="d-flex align-items-start rounded wt-50 dotted pdw-1"
                        htmlFor="upload"
                        >
                        <span className="me-3">
                            <FaFileUpload
                                size="3rem"
                                color="grey"
                            />
                        </span>
                        <span className="fs-1">
                            <h6 className="fs-5 text-primary">Upload a template you have</h6>
                            <h6 className="fs-5">Upload your own template in zip format</h6>
                        </span>
                    </label>
                    <input 
                        type="file" 
                        id="upload" 
                        accept=".zip,.rar,.7z,.gz" 
                        onChange={handleChange}
                    />
                </div> */}
            </div>
        </>
    )
}