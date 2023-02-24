import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../components/customFomField"
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
        ADS,
        emailSubject,
        CTD,
        FromName,
        FromEmail,
        SDV,
        ReplyTo
    })=>{
        setCampaignparams({
            ...campaignParams,
            NameYourCampaign:campaign,
            EmailSubject:emailSubject,
            FromName:FromName,
            ADS:ADS,
            CTD:CTD,
            SDV:SDV,
            FromEmail:FromEmail,
            ReplyTo:ReplyTo,
            sectionCompleted:2
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
                        <div className="d-flex flex-column mb-">
                            <div>
                                <label 
                                    className="fw-bold"
                                    htmlFor="ADS"
                                    >
                                    Add DKIM signature *
                                </label>
                                <h6>Sign your email with your sending domain (if any), 
                                    telling receiving email servers that your email is actually coming from you. 
                                    This is to help establish the authenticity of your email, improving delivery rate.
                                </h6>
                            </div>
                            <input 
                                className="bg-alice p-2 border border-white rounded form-check-input me-1"
                                type="checkbox"
                                name="ADS"
                                defaultValue={campaignParams.ADS}
                                placeholder="Add DKIM signature "
                                {...register(
                                    "ADS"
                                )
                            }
                            />
                        </div>
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
                        <div className="d-flex flex-column mb-2">
                            <div>
                                <label 
                                    className="fw-bold"
                                    htmlFor="CTD"
                                    >
                                    Custom Tracking Domain *
                                </label>
                                <h6>Using a tracking domain causes all the links and URLs in your emails to be overwritten as if 
                                    they come from your own brand's domain (rather than from this application hostname), 
                                    making your email more authentic and more likely to reach recipients INBOX.
                                </h6>
                            </div>
                            <input 
                                className="bg-alice p-2 border border-white rounded form-check-input me-1"
                                type="checkbox"
                                name="CTD"
                                defaultValue={campaignParams.CTD}
                                placeholder="Custom Tracking Domain "
                                {...register(
                                    "CTD"
                                )
                            }
                            />
                        </div>
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
                            label ="Use sending server's default value *"
                            name ="SDV"
                            placeholder="Use sending server's default value"
                            defaultValue={campaignParams.SDV}
                            type="checkbox"
                            register={register}
                            errors={errors.SDV}
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