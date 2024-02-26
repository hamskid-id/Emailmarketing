import { AiTwotoneMail } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { TemplateForm } from "./createTemplateForm";
import { AiMessage } from "../../../../components/Aimessage";

export const CreateNav =({
    handleSave,
    saveEditedTemplate,
    EditedInfo,
    hidemodal,
    edit,
    setModalContent
})=>{
    const navigate = useNavigate();
    const template = useSelector(
        state => state.template
    )
    return(
        <div className="d-flex justify-content-between align-items-center bg-slate-grey text-white px-3  py-3">
            <span>
                <div className="d-flex align-items-center">
                    <AiTwotoneMail
                        size="2.5rem"
                        color="#3B3C36"
                        onClick={
                            ()=>navigate("/")
                        }
                        className="p-2 rounded-circle brandBg btn me-1"
                    />
                    <h4 className="text-white"
                    >
                    Untitled
                    </h4>
                </div>
            </span>
            <span>
                <div>
                    {
                        edit?(
                            <div className="btn-group fl-r" role="group" aria-label="Basic example">
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-md text-white"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    onClick={()=>{
                                        setModalContent(()=>{
                                            return{
                                                title:"Ai Assistant",
                                                body:<AiMessage/>
                                            }
                                        })
                                    }}
                                >
                                    Ask
                                    <span 
                                        className="ms-1"
                                    >
                                        <BsStars 
                                            size="1.5rem"
                                            color="white"
                                        />
                                    </span>
                                </button>
                                <button 
                                    className="btn btn-primary btn-md text-white fl-r"
                                    type="button"                
                                    onClick={()=>{
                                        saveEditedTemplate()
                                        setModalContent(()=>{
                                            return{
                                                title:"Template Information",
                                                body:<TemplateForm
                                                        EditedInfo={EditedInfo}
                                                        hidemodal={hidemodal}
                                                    />
                                            }
                                        })
                                    }}
                                >
                                    {
                                        template.CreateTemplateStatus &&(
                                            <span 
                                                className="spinner-border spinner-border-sm me-1" 
                                                role="status" 
                                                aria-hidden="true">
                                            </span>
                                        )
                                    }
                                    save
                                </button>
                            </div>
                            
                        ):(
                            <div className="btn-group fl-r" role="group" aria-label="Basic example">
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-md text-white"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    onClick={()=>{
                                        setModalContent(()=>{
                                            return{
                                                title:"Ai Assistant",
                                                body:<AiMessage/>
                                            }
                                        })
                                    }}
                                >
                                    Ask
                                    <span 
                                        className="ms-1"
                                    >
                                        <BsStars 
                                            size="1.5rem"
                                            color="white"
                                        />
                                    </span>
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-md text-white"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    onClick={()=>{
                                        handleSave()
                                        setModalContent(()=>{
                                            return{
                                                title:"Template Information",
                                                body:<TemplateForm
                                                        EditedInfo={EditedInfo}
                                                        hidemodal={hidemodal}
                                                    />
                                            }
                                        })
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        )
                    }
                </div>               
            </span>          
        </div>
    )
}