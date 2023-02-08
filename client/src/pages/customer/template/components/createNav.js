import {  FaMonero } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export const CreateNav =({
    handleSave
})=>{
    const navigate = useNavigate();
    return(
        <div className="row justify-content-between align-items-center bg-slate-grey text-white py-3 px-4">
            <span className="col-md-6">
                <div className="d-flex align-items-center">
                    < FaMonero
                        size="3rem"
                        color="white"
                        onClick={
                            ()=>navigate("/")
                        }
                    />
                    <h4 className="ms-4 text-white"
                    >
                    Untitled
                    </h4>
                </div>
            </span>
            <span className="col-md-6">
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