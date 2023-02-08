import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CustomFormField } from "../../../../components/customFomField";

export const BasicInfo =()=>{
    const SubmitHandler =(e)=>{
        toast("Password reset successful");
    }
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();
    return(
        <>
            <div className="container-fluid">
            <div className="px-5 m-auto mt-5">
                <div>
                    <p className="fs-2 text-center">
                        Basic Information
                    </p>
                    <div>
                        <form 
                            onSubmit={handleSubmit(SubmitHandler)}
                            >
                            <CustomFormField
                                label="User Name"
                                name="uname"
                                type="text"
                                placeholder="enter your username"
                                register={register}
                                errors={errors.username}
                            />
                            <CustomFormField
                                label="First Name"
                                name="fname"
                                type="text"
                                placeholder="enter your first name"
                                register={register}
                                errors={errors.fname}
                            />
                            <CustomFormField
                                 label="Last Name"
                                 name="lname"
                                 type="text"
                                 placeholder="enter your last name"
                                 register={register}
                                 errors={errors.lname}
                            />
                             <CustomFormField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="enter your email"
                                register={register}
                                errors={errors.email}
                            />
                            <CustomFormField
                                value="Update"
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