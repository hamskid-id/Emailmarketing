import {FaMonero } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export const Nav =()=>{
    const navigate = useNavigate();
    return(
        <div className="d-flex justify-content-between bg-slate-grey text-white py-3 px-4">
            <FaMonero
                size="3rem"
                color="white"
                onClick={
                    ()=>navigate("/")
                }
            />
            <p
                onClick={
                    ()=>navigate("/")
                }
                className="text-white"
            >
                Cancel
            </p>
        </div>
    )
}