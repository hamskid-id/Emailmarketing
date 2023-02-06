import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../components/customFomField"
import { useDispatch, useSelector} from "react-redux";
import { CreateCampaigns } from "../../../store/campaignSlice";

export const CreateCampaignModal=()=>{
    const campaign = useSelector(
        state => state.campaign
    )
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        title,
        recipient,
        from,
        subject,
        content
    })=>{
        dispatch(CreateCampaigns({
            title,
            recipient,
            from,
            subject,
            content
        }))
    }
    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Title"
                name ="title"
                placeholder="title"
                type="text"
                register={register}
                errors={errors.title}
            />
            <CustomFormField
                label ="Recipient"
                name ="recipient"
                placeholder="recipient"
                type="text"
                register={register}
                errors={errors.recipient}
            />
            <CustomFormField
                label ="From"
                name ="from"
                placeholder="from"
                type="text"
                register={register}
                errors={errors.from}
            />
            <CustomFormField
                label ="Subject"
                name ="subject"
                placeholder="subject"
                type="text"
                register={register}
                errors={errors.subject}
            />
            <CustomFormField
                label ="Content"
                name ="content"
                placeholder="content"
                type="textArea"
                register={register}
                errors={errors.content}
            />
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus={campaign.CreateCampaignsStatus}
            />
        </form>
    )
}