import { useDispatch} from "react-redux";
import { useState } from "react";

export const DeleteBtn =({deleteFunc,status})=>{
    const[deleting, setDeleting] = useState(false);
    const dispatch = useDispatch();
    return(
        <li
            className="dropdown-item fs-6"
            onClick={()=>{
                dispatch(deleteFunc)
                setDeleting(true)
            }}
        >
            {
                ( status ==="pending" && deleting) &&(
                    <span 
                        className="spinner-border spinner-border-sm me-1" 
                        role="status" 
                        aria-hidden="true">
                    </span>
                )
            }
            Delete
        </li>
    )
}