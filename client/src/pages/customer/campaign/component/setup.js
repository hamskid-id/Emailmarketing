import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../components/customFomField";
export const Setup=({
    campaignParams,
    setCampaignparams
})=>{
    const {
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        campaign,
        emailSubject,
        FromName,
        FromEmail,
        ReplyTo
    })=>{
        setCampaignparams({
            ...campaignParams,
            NameYourCampaign:campaign,
            EmailSubject:emailSubject,
            FromName:FromName,
            FromEmail:FromEmail,
            ReplyTo:ReplyTo,
            sectionCompleted:localStorage.getItem('templateInfo') ? 3:2
        })
    }

    return(
        <>
            <div className="pb-5">
                <form onSubmit={handleSubmit(SubmitHandler)}>
                    <div className="grid">
                        <CustomFormField
                            label ="Name your campaign *"
                            defaultValue={campaignParams.NameYourCampaign}
                            space={true}
                            name ="campaign"
                            placeholder="Name your campaign"
                            type="text"
                            register={register}
                            errors={errors.campaign}
                        />
                        <CustomFormField
                            label ="Email subject *"
                            space={true}
                            defaultValue={campaignParams.EmailSubject}
                            name ="emailSubject"
                            placeholder="Email subject"
                            type="textArea"
                            register={register}
                            errors={errors.emailSubject}
                        />
                        <CustomFormField
                            label ="From name *"
                            name ="FromName"
                            space={true}
                            defaultValue={campaignParams.FromName}
                            placeholder="From name"
                            type="text"
                            register={register}
                            errors={errors.FromName}
                        />
                        <CustomFormField
                            label ="From email *"
                            name ="FromEmail"
                            space={true}
                            defaultValue={campaignParams.FromEmail}
                            placeholder="From email "
                            type="email"
                            register={register}
                            errors={errors.FromEmail}
                        />
                        <CustomFormField
                            label ="Reply to *"
                            name ="ReplyTo"
                            placeholder="Reply to "
                            defaultValue={campaignParams.ReplyTo}
                            space={true}
                            type="text"
                            register={register}
                            errors={errors.ReplyTo}
                        />
                        
                    </div>
                    <hr className="b-grey"/>
                    <button className="btn btn-md b-grey fl-r">Save & Next</button>                 
                </form>
            </div>
        </>
    )
}