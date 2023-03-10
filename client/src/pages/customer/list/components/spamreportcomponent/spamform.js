import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import { CreateSpamReported } from "../../../../../store/SpamReportedSlice";

export const CreateSpam =({hidemodal})=>{
    const spam = useSelector(
        state => state.SpamReported
    )
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
       email
    })=>{
        dispatch(
            CreateSpamReported({
                email
            })
        )
        
    }

    useEffect(()=>{
        if( spam.CreateSpamReportedStatus ==="success"){
            hidemodal.current.click()
        }
    },[ spam.CreateSpamReportedStatus])

    return(
       
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Email"
                name ="email"
                placeholder="email"
                type="email"
                register={register}
                errors={errors.email}
            />
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus={spam.CreateSpamReportedStatus}
            />
        </form>
    )
}