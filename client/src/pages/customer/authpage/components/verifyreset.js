import { useDispatch, useSelector } from "react-redux";
import { SendPasswordResetLink } from "../../../../store/authSlice";
export const VerifyResetPassword =({
    email
})=>{
    const dispatch = useDispatch();
    const auth = useSelector(
        state => state.auth
    )
    const handleClick =()=>{
        dispatch(
            SendPasswordResetLink({
                email
            })
        )
    }
    
    return(
        <div className="verify-container">
            <p className="fs-2 text-center fw-bold">
                Verify Your Email Address
            </p>
            <div>
                <p>
                    A Fresh verification link has been sent to {email}.
                </p>
                <p>
                    If you did not receive the email
                </p>
                {
                   auth.SendPasswordResetLinkStatus === "pending"?(
                        <button
                            className="btn btn-md bg-slate-grey text-white" 
                            type="button" 
                            disabled
                        >
                            <span 
                                class="spinner-border spinner-border-sm" 
                                role="status" 
                                aria-hidden="true">
                            </span>
                                Loading...Please wait
                        </button>
                    ):(
                        <button 
                            className="btn btn-md bg-slate-grey text-white"
                            onClick={handleClick}
                        >
                            Click here to request another
                        </button>
                    )
                }
            </div>
        </div>
    )
}