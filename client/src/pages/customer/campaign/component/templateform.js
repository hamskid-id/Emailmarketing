import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CustomFormField } from "../../../../components/customFomField";
import { Confirm } from "./confirm";

export const TemplateForm =({
    campaignParams,
    setCampaignparams,
    EditedInfo
})=>{
    
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        name,
        bdesc
    })=>{
        console.log(name,bdesc,EditedInfo)
        setCampaignparams({
            ...campaignParams,
            TemplateName:name,
            TempalateDesc:bdesc,
            template:EditedInfo.html,
            templateDesign:EditedInfo.design,
            sectionCompleted:3

        })
        toast("submitted succesfully you can now proceed"); 
    }
    console.log(campaignParams)
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
            <button 
                className="btn btn-sm bg-slate-grey text-white fs-5"
                data-bs-dismiss="modal"
                >
                submit
            </button>
        </form>
    )
}