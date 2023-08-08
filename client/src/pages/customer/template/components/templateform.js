import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
import { CreateTemplate } from "../../../../store/templateSlice";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TemplateForm =({EditedInfo,hidemodal})=>{
    const template = useSelector(
        state => state.template
    )
    const navigate = useNavigate();
    const [templateSaved, setTemplateSaved] = useState(false)
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
                design_content:EditedInfo.design_content,
                design_html:EditedInfo.design_html,
                template_type:"private"
            })
        )
        setTemplateSaved(true);
    }
    useEffect(()=>{
        if(templateSaved && template.CreateTemplateStatus === 'success'){
            localStorage.setItem(
                'templateInfo',
                JSON.stringify(EditedInfo.html)
            )
            // navigate("/campaigns/Create");
        }
    },[templateSaved,template.CreateTemplateStatus])
    // useEffect(()=>{
    //     if(template.CreateTemplateStatus ==="success"){
    //         hidemodal.current.click()
    //     }
    // },[template])

    return(
       
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Name"
                name ="template_name"
                defaultValue={EditedInfo.template_name}
                placeholder="name"
                type="text"
                register={register}
                errors={errors.template_name}
            />
            <CustomFormField
                label ="Brief description"
                name ="template_describ"
                defaultValue={EditedInfo.template_describ}
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