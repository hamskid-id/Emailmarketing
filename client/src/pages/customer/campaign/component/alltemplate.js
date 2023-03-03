import { FaCartArrowDown, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { CreateTemplateView } from "./createCampaignTemplate";
import { EditTemplateView } from "./editCampaignTemplate";

export const GeneralList =({
    campaignParams,
    setCampaignparams,
    setCampaignSection
})=>{
    const navigate = useNavigate();
    const templates=[]
    return(
        <>         
            <div className="row justify-content-between wrap">
                {
                    templates?.map((tem,index)=>{
                        const{
                            head,
                            subHead,
                            img,
                        }=tem
                        return(
                            <div 
                                className="col-lg-2 col-md-3 col-sm-4 col-xs-6"                           
                                key={index}
                            >
                                <div className="d-flex flex-column m-3 border rounded"
                                >
                                    <img
                                        src={img}
                                        className="w-100 rounded"
                                        alt="object not found"
                                    />
                                    <div className="d-flex flex-column align-items-center justify-content-center pd-1">
                                        <p 
                                            className="fw-bold break"
                                        >
                                            {head}
                                        </p>
                                        <p 
                                            className="break"
                                        >
                                            {subHead}
                                        </p>
                                        <div className="dropdown">
                                        <button 
                                            className="btn btn-secondary dropdown-toggle b-gainsboro" 
                                            type="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            Actions
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li 
                                                className="dropdown-item"
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
                                                Edit
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                templates?.length === 0 &&(
                    <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5">
                       <div 
                            className="d-flex wrap align-items-center justify-content-center"
                            onClick={()=>{
                            setCampaignSection({
                                name:"Template", 
                                components:<CreateTemplateView
                                    campaignParams={campaignParams}
                                    setCampaignparams={setCampaignparams}
                                    setCampaignSection={setCampaignSection}
                                />
                            })
                            }} 
                        >
                            <span className="me-1">
                                <FaEdit
                                    color="grey"
                                    size="3rem"
                                />
                            </span>
                            <span className="fs-4 fw-bold" style={{color:"grey"}}>
                                Create
                            </span>
                        </div>                        
                        <p className="fw-bold">
                         No Template Available
                        </p>
                        <div>
                           You can build a new one from scratch 
                        </div>
                    </div>
                )
            }         
        </>
    )
}