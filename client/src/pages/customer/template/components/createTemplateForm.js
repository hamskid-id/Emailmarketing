import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
import { CreateTemplate } from "../../../../store/templateSlice";

export const TemplateForm =({EditedInfo})=>{
    const template = useSelector(
        state => state.template
    )
    const dispatch  = useDispatch()
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        template_name,
        template_describ
    })=>{
        dispatch(
            CreateTemplate({
                template_name,
                template_describ,
                design_content:EditedInfo.design,
                design_html:EditedInfo.html,
                template_type:"private"
            })
        )
    }
    return(
       
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Name"
                name ="template_name"
                placeholder="name"
                type="text"
                register={register}
                errors={errors.template_name}
            />
            <CustomFormField
                label ="Brief description"
                name ="template_describ"
                placeholder="Brief description"
                type="text"
                register={register}
                errors={errors.template_describ}
            />
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus={template.CreateTemplateStatus}
            />
        </form>
    )
}