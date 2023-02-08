import { Link, useNavigate } from "react-router-dom"
import { CustomFormField } from "../../../components/customFomField"; 
import "./auth.css";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthSideNav } from "./components/sidenav";
import { LogInUser } from "../../../store/authSlice";

export const LoginView =()=>{
    const navigate = useNavigate();
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
                remember
            })
            
        )
        if(auth.id){
            navigate("/");
            toast("Login successful");
        }
       
    }
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    return(
        <>
            <AuthSideNav>
                <p className="fs-2 text-center">
                    Log In
                </p>
                <div>
                    <span className="fs-6 me-1">
                        Dont have an account ?
                    </span>
                    <span>
                        <Link to="/auth/register">
                            Create an account
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
                            placeholder="enter your email"
                            register={register}
                            errors={errors.email}
                        />
                        <CustomFormField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="enter your password"
                            register={register}
                            errors={errors.password}
                        />
                        <CustomFormField
                            label="Remember Me"
                            name="remember"
                            type="checkbox"
                            register={register}
                        />
                        <Link 
                            to="/auth/forget/password"
                            className="forget-link"
                        >
                            Forgot password?
                        </Link>
                        <CustomFormField
                            value="Log In"
                            type="btn"
                            loadingStatus={auth.LoginStatus}
                        />
                    </form>
                </div>
            </AuthSideNav> 
        </>
    )
}