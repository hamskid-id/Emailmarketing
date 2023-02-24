import "./auth.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { InitialResetView } from "./components/initialresetview";
import { VerifyResetPassword } from "./components/verifyreset";
import { useDispatch, useSelector } from "react-redux";
import { AuthSideNav } from "./components/sidenav";
import { SendPasswordResetLink } from "../../../store/authSlice";

export const ForgetPassword =()=>{
    const auth = useSelector(
        state => state.auth
    )
    const [
        userEmail,
        setUserEmail
    ]= useState(null)
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
        setUserEmail(email);
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
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(auth.SendPasswordResetLinkStatus === "success"){
            setResetView(
                <VerifyResetPassword
                    email={userEmail}
                />
            );
        }
    },[auth])

    return(
        <>
            <AuthSideNav>
                {resetView}
            </AuthSideNav>
        </>
    )
}