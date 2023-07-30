import { AiTwotoneMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const CreateNav =({
    handleSave
})=>{
    const navigate = useNavigate();
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
                        className="p-2 rounded-circle brandBg btn"
                    />
                    <h4 className="text-white"
                    >
                    Untitled
                    </h4>
                </div>
            </span>
            <span>
                <div>
                    <button 
                        className="btn btn-success btn-md text-white fl-r"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        onClick={handleSave}
                    >
                        save
                    </button>
                </div>               
            </span>          
        </div>
    )
}