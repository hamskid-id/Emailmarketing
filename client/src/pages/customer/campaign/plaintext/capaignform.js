import { useDispatch, useSelector } from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CreateCampaigns } from "../../../../store/campaignSlice";


export const CampaignForm=({convertedToHtml,hideModal})=>{
    const navigate = useNavigate();
    const auth = useSelector(
        state => state.auth
    )

    const campaign = useSelector(
        state => state.campaign
    )

    const Tags = useSelector(
        state => state.tag
    )

    const dispatch = useDispatch()
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
        ReplyTo,
        Ddate,
        tag
    })=>{
        const newTag = JSON.parse(tag)
        dispatch(
            CreateCampaigns({
                title:campaign,
                reply_to:ReplyTo,
                from_email:FromEmail,
                from_name:FromName,
                subject:emailSubject,
                content:convertedToHtml,
                tag_id:newTag.id,
                content_type: "Plain Text",
                schedule_date:Ddate,
                status:1
            })
        )
    }

    useEffect(()=>{
        if(campaign.CreateCampaignsStatus ==="success"){
            hideModal.current.click();
        }
    },[campaign.CreateCampaignsStatus])

    return(
        <>
            <div className="pb-5">
                <form onSubmit={handleSubmit(SubmitHandler)}>
                    <div className="grid">
                        <div className="d-flex flex-column w-97 mb-2">
                            <label
                                className="fw-bold me-2" 
                                htmlFor="tag">
                                Tags
                            </label>
                            <select 
                            name="tag" 
                            id="tag"
                            className="p-2 border rounded btn p-2 text-start"
                            {...register(
                                "tag", 
                                {
                                    required:`tag field is invalid`,
                                }
                            )
                            }
                            >
                            {
                                Tags.Tags?.map((tag,index)=>{
                                    const{
                                        name,
                                        id
                                    }=tag
                                    return(
                                        <option 
                                            value={JSON.stringify({id:id,name:name})}
                                            key={index}
                                        >{name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                        <CustomFormField
                            label ="Name your campaign *"
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
                            defaultValue={auth.userdata?.user?.name}
                            placeholder="From name"
                            type="text"
                            register={register}
                            errors={errors.FromName}
                        />
                        <CustomFormField
                            label ="From email *"
                            name ="FromEmail"
                            space={true}
                            defaultValue={auth.userdata?.user?.email}
                            placeholder="From email "
                            type="email"
                            register={register}
                            errors={errors.FromEmail}
                        />
                        <CustomFormField
                            label ="Reply to *"
                            name ="ReplyTo"
                            placeholder="Reply to"
                            space={true}
                            type="text"
                            register={register}
                            errors={errors.ReplyTo}
                        />
                        <CustomFormField
                            label ="Delivery date *"
                            name ="Ddate"
                            space={true}
                            type="date"
                            register={register}
                            errors={errors.Ddate}
                        />
                    </div>
                    <CustomFormField
                        value="submit"
                        type="btn"
                        loadingStatus={campaign.CreateCampaignsStatus}
                    />             
                </form>
            </div>
        </>
    )
}