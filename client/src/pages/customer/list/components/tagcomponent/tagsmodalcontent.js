import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import { CreateTags } from "../../../../../store/tagSlice";

export const CreateTag =({hidemodal,proceedWithNextOperationAfterSuccess})=>{
    const tag = useSelector(
        state => state.tag
    )
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        name
    })=>{
        dispatch(
            CreateTags({
                name
            })
        )
        
    }

    useEffect(()=>{
        if(tag.CreateTagsStatus ==="success"){
            if(hidemodal){
                hidemodal.current.click()
            }
            if(proceedWithNextOperationAfterSuccess){
                proceedWithNextOperationAfterSuccess();
            }
        }
    },[tag.CreateTagsStatus])

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
                value="submit"
                type="btn"
                loadingStatus={tag.CreateTagsStatus}
            />
        </form>
    )
}