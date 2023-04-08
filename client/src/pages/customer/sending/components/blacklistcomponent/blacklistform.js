import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import { CreateBlacklist } from "../../../../../store/BlacklistedSlice";
import { useEffect } from "react";

export const AddBlacklist =({hidemodal})=>{
    const blacklist = useSelector(
        state => state.blacklist
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
            CreateBlacklist({
                email
            })
        )
        
    }

    useEffect(()=>{
        if(blacklist.CreateBlacklistStatus ==="success"){
            hidemodal.current.click()
        }
    },[blacklist.CreateBlacklistStatus,hidemodal])

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
                loadingStatus={blacklist.CreateBlacklistStatus}
            />
        </form>
    )
}