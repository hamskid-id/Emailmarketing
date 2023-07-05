import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
import { CreateTemplate } from "../../../../store/templateSlice";
import { AiOutlineRight} from "react-icons/ai";
import { useState } from "react";

export const TemplateForm =({
    campaignParams,
    setCampaignparams,
    EditedInfo,
    hidemodal
})=>{
    const template = useSelector(
        state => state.template
    )
    const[
        templateSaved,
        setTemplateSaved
    ]=useState(false)
    const dispatch = useDispatch()
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        name,
        bdesc
    })=>{
        dispatch(
            CreateTemplate({
                template_name:name,
                template_describ:bdesc,
                design_content:EditedInfo.design_content,
                design_html:EditedInfo.design_html,
                template_type:"private"
            })
        ) 
        setTemplateSaved(true)
    }
    if(templateSaved && template.CreateTemplateStatus === 'success'){
        hidemodal.current.click();
        setCampaignparams({
            ...campaignParams,
            content:EditedInfo.design_html,
            sectionCompleted:3
        })
    }

    return(
       
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Name"
                defaultValue={EditedInfo.template_name?EditedInfo.template_name:""}
                name ="name"
                placeholder="name"
                type="text"
                register={register}
                errors={errors.name}
            />
            <CustomFormField
                defaultValue={EditedInfo.template_describ?EditedInfo.template_describ:""}
                label ="Brief description"
                name ="bdesc"
                placeholder="Brief description"
                type="text"
                register={register}
                errors={errors.bdesc}
            />
            <div className="d-flex justify-content-between">
                <CustomFormField
                    value="submit"
                    type="btn"
                    loadingStatus={template.CreateTemplateStatus}
                />
            </div>
        </form>
    )
}