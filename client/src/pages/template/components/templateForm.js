import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CustomFormField } from "../../../components/customFomField"

export const TemplateForm =()=>{
    const SubmitHandler =(e)=>{
        toast("loggged IN")
    }
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    return(
    <>
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Title"
                name ="text"
                placeholder="title"
                type="text"
                register={register}
                errors={errors.email}
            /> 
            <CustomFormField
                label ="Brief description"
                name ="brinfo"
                placeholder="give a brief decriptiom"
                type="text"
                register={register}
                errors={errors.email}
            />
            <CustomFormField
                value="submit"
                type="btn"
            />
        </form>
    </>
    )
}