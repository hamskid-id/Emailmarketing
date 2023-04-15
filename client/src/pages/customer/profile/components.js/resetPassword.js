import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { CustomFormField } from "../../../../components/customFomField";
import { useDispatch, useSelector } from "react-redux";
import { ResetPassword } from "../../../../store/authSlice";

export const ChangePassword =()=>{
    const dispatch = useDispatch();
    const auth = useSelector(
        state => state.auth
    )
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirm_pass: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { 
        resolver: yupResolver(validationSchema) 
    };

    const SubmitHandler =({
        old_password,
        password,
        confirm_pass
    })=>{
        dispatch(
            ResetPassword({
                old_password,
                password,
                confirm_pass
        }))
    }
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm(formOptions);
    return(
        <>
            <div className="container-fluid">
            <div className="ps-3 pde-5 m-auto mt-5">
                <div>
                    <p className="fs-4 text-center">
                        Change Password
                    </p>
                    <div>
                        <form 
                            onSubmit={handleSubmit(SubmitHandler)}
                            >
                            <CustomFormField
                                label="Verify Current Password"
                                name="old_password"
                                defaultValue={auth.userdata?.user?.password}
                                type="password"
                                placeholder="enter your password"
                                register={register}
                                errors={errors.old_password}
                            />
                            <CustomFormField
                                label="New password"
                                name="password"
                                type="password"
                                placeholder="enter your password"
                                register={register}
                                errors={errors.password}
                               
                            />
                            <CustomFormField
                                label="Confirm Your New Password"
                                name="confirm_pass"
                                type="password"
                                placeholder="confirm password"
                                register={register}
                                errors={errors.confirm_pass}
                            />
                            <CustomFormField
                                value="Change Password"
                                type="btn"
                                loadingStatus={auth.ResetPasswordStatus}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}