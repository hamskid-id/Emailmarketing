import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { CustomFormField } from "../../../../components/customFomField";

export const ChangePassword =()=>{

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

    const SubmitHandler =(e)=>{
        toast("Password reset successful");
    }
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm(formOptions);
    return(
        <>
            <div className="container-fluid">
            <div className="ps-3 pe-5 m-auto mt-5">
                <div>
                    <p className="fs-2 text-center">
                        Reset Password
                    </p>
                    <div>
                        <form 
                            onSubmit={handleSubmit(SubmitHandler)}
                            >
                            <CustomFormField
                                label="Verify Current Password"
                                name="crpassword"
                                type="password"
                                placeholder="enter your password"
                                register={register}
                                errors={errors.crpassword}
                            />
                            <CustomFormField
                                label="New password"
                                name="nwpassword"
                                type="password"
                                placeholder="enter your password"
                                register={register}
                                errors={errors.nwpassword}
                               
                            />
                            <CustomFormField
                                label="Confirm Your New Password"
                                name="confirmPassword"
                                type="password"
                                placeholder="confirm password"
                                register={register}
                                errors={errors.confirmPassword}
                            />
                            <CustomFormField
                                value="Change Password"
                                type="btn"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}