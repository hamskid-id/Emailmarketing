import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CustomFormField } from "../../../../components/customFomField";

export const BasicInfo =()=>{
    const SubmitHandler =(e)=>{
        toast("Action not available");
    }
    const auth = useSelector(
        state => state.auth
    )
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();
    return(
        <>
            <div className="container-fluid">
            <div className="pdx-5 m-auto mt-5">
                <div>
                    <p className="fs-4 text-center fw-bold">
                        Basic Information
                    </p>
                    <div>
                        <form 
                            onSubmit={handleSubmit(SubmitHandler)}
                            >
                            <CustomFormField
                                label="Full Name"
                                name="fname"
                                defaultValue={auth.userdata?.user?.name}
                                type="text"
                                placeholder="enter your first name"
                                register={register}
                                errors={errors.fname}
                            />
                             <CustomFormField
                                label="Email"
                                defaultValue={auth.userdata?.user?.email}
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