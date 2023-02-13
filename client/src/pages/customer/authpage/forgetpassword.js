import "./auth.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { InitialResetView } from "./components/initialresetview";
import { VerifyResetPassword } from "./components/verifyreset";
import { useDispatch, useSelector } from "react-redux";
import { AuthSideNav } from "./components/sidenav";
import { SendPasswordResetLink } from "../../../store/authSlice";

export const ForgetPassword =()=>{
    const dispatch = useDispatch();
    const auth = useSelector(
        state => state.auth
    )
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        email
    })=>{
        dispatch(
            SendPasswordResetLink({
                email
            })
        )
        if(auth.SendPasswordResetLinkStatus === "success"){
            setResetView(
                <VerifyResetPassword
                    email={email}
                />
            );
        }
    }
    
    const [
        resetView,
        setResetView
    ] = useState(
            <InitialResetView
                title="Reset Password"
                SubmitHandler={SubmitHandler}
                handleSubmit={handleSubmit}
                errors={errors}
                register={register}
            />
        )
    return(
        <>
            <AuthSideNav>
                {resetView}
            </AuthSideNav>
        </>
    )
}