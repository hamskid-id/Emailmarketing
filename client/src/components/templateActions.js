import { useNavigate } from "react-router-dom"
import { EditTemplateView } from "../pages/customer/campaign/component/editCampaignTemplate";

export const Actions =({
    campaign,
    setCampaignSection,
    setCampaignparams,
    campaignParams
})=>{
    const navigate = useNavigate();
    return(
        <div className="row">
            <div className="col-md-6 mb-2">
                <div className="d-flex wrap align-items-center">
                    <div  className="me-3 mb-2">
                        <label 
                            htmlFor="sort"
                            className="me-1">
                            Sort By:
                        </label>
                        <select 
                            name="sort" 
                            id="sort"
                            className="fs-5 p-2 rounded b-gainsboro"
                            >
                            {
                                [
                                    {
                                        name:"Created At",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Name",
                                        url:"https://hello"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name,
                                        url
                                    }=drop
                                    return(
                                        <option 
                                            value={name}
                                            key={index}
                                        >{name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input  
                        type="text"
                        placeholder="Type to search"
                        className="action-inpt rounded"
                    />
                </div>
            </div>
            <div className="col-md-6">
                {
                    campaign?(
                        <div>
                            <button 
                                type="button" 
                                className="btn b-grey btn-md my-2 fl-r"
                                onClick={()=>{
                                    setCampaignSection({
                                        name:"Template", 
                                        components:<EditTemplateView
                                            campaignParams={campaignParams}
                                            setCampaignparams={setCampaignparams}
                                            setCampaignSection={setCampaignSection}
                                        />
                                    })
                                }}
                            >
                                Create +
                            </button>
                        </div>
                    ):(
                        <div>
                            <button 
                                type="button" 
                                className="btn b-grey btn-md my-2 fl-r"
                                onClick={
                                    ()=>navigate("/create/template")
                                }
                            >
                                Create +
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}