import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../components/customFomField";

export const TemplateForm =()=>{
    // const tag = useSelector(
    //     state => state.tag
    // )
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        name
    })=>{
        // dispatch(
        //     CreateTag({
        //         name
        //     })
        // )
        
    }
    return(
       
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Name"
                name ="name"
                placeholder="name"
                type="text"
                register={register}
                errors={errors.name}
            />
            <CustomFormField
                label ="Brief description"
                name ="bdesc"
                placeholder="Brief description"
                type="text"
                register={register}
                errors={errors.bdesc}
            />
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus="success"
            />
        </form>
    )
}