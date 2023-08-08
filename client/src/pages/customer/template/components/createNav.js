import { AiTwotoneMail } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateNav =({
    handleSave,
    saveEditedTemplate,
    edit
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
                            <button 
                                className="btn btn-success btn-md text-white fl-r"
                                type="button"                
                                onClick={saveEditedTemplate}
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
                        ):(
                            <button 
                                className="btn btn-success btn-md text-white fl-r"
                                type="button"                            
                                data-bs-toggle="modal" 
                                data-bs-target="#staticBackdrop"
                                onClick={handleSave}
                            >
                                save
                            </button>
                        )
                    }
                </div>               
            </span>          
        </div>
    )
}