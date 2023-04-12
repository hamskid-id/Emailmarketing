import { Link, useNavigate } from "react-router-dom"
import { CustomFormField } from "../../../components/customFomField"; 
import "./auth.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthSideNav } from "./components/sidenav";
import { LogInUser } from "../../../store/authSlice";
import { FaArrowRight } from "react-icons/fa";

export const LoginView =()=>{
    const dispatch = useDispatch();
    const auth = useSelector(
        state => state.auth
    )
    const SubmitHandler =({
        email,
        password,
        remember
    })=>{
        dispatch(
            LogInUser({
                email,
                password,
                remember,
                name
            })
            
        )
    }
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    return(
        <>
            <AuthSideNav>
                <p className="fs-2 fw-bold text-center text-white">
                     Sign in to your account
                </p>
                <div>
                    <span className="fs-6 me-1 text-white">
                        Dont have an account ?
                    </span>
                    <span>
                        <Link to="/auth/register">
                            Create your account
                        </Link>
                    </span>
                </div>
                <div>
                    <form 
                        onSubmit={handleSubmit(SubmitHandler)}
                        >
                        <CustomFormField
                            label="Email"
                            name="email"
                            type="email"
                            color="text-white"
                            placeholder="enter your email"
                            register={register}
                            errors={errors.email}
                        />
                        <CustomFormField
                            label="Password"
                            name="password"
                            color="text-white"
                            type="password"
                            placeholder="enter your password"
                            register={register}
                            errors={errors.password}
                        />
                        <CustomFormField
                            label="Remember Me"
                            name="remember"
                            color="text-white"
                            type="checkbox"
                            register={register}
                        />
                        <Link 
                            to="/auth/forget/password"
                            className="forget-link"
                        >
                            Forgot password?
                        </Link>
                        {
                            auth.LoginStatus === "rejected" &&(
                                <p className="text-danger">{auth.LoginError}</p>
                            )
                        }
                        <CustomFormField
                            value="Log In"
                            type="btn"
                            btnBg="btn-primary"
                            btnFluid={true}
                            loadingStatus={auth.LoginStatus}
                        />
                    </form>
                </div>
            </AuthSideNav> 
        </>
    )
}