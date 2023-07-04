import { Link} from "react-router-dom"
import "./auth.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { AuthSideNav } from "./components/sidenav";
import { registerUser } from "../../../store/authSlice";
import { CustomFormField } from "../../../components/customFomField";

export const RegisterView =()=>{
    const dispatch = useDispatch();
    const auth = useSelector(
        state => state.auth
    )
    const SubmitHandler =({
        name,
        email,
        password
    })=>{
        dispatch(
            registerUser({
                name,
                email,
                password
            })
        )
    }
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { 
        resolver: yupResolver(validationSchema) 
    };
    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm(formOptions);

   

    return(
        <>
            <AuthSideNav>
                <p className="fs-2 text-center fw-bold text-white">
                    Create your account
                </p>
                <div>
                    <span className="fs-5 me-1 text-white">
                        Already have an account ?
                    </span>
                    <span>
                        <Link to="/auth/login">
                            Log in
                        </Link>
                    </span>
                </div>
                <div>
                    <form onSubmit={handleSubmit(SubmitHandler)}>
                        <CustomFormField
                            label="Full Name"
                            name="name"
                            color="text-white"
                            type="text"
                            placeholder="enter your Full Name"
                            register={register}
                            errors={errors.name}
                        />
                        <CustomFormField
                            label="Email"
                            color="text-white"
                            type="email"
                            name="email"
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
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            color="text-white"
                            btnBg="btn-primary"
                            placeholder="confirm password"
                            register={register}
                            errors={errors.confirmPassword}
                        />
                        {
                            auth.registerStatus === "rejected" &&(
                                <p className="text-danger text-break">{auth.registerError}</p>
                            )
                        }
                        <CustomFormField
                            value="register"
                            type="btn"
                            btnBg="btn-primary"
                            btnFluid={true}
                            loadingStatus={auth.registerStatus}
                        />
                    </form>
                </div>
            </AuthSideNav>
        </>
    )
}