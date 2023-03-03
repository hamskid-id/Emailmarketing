import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import { CreateBlacklist } from "../../../../../store/BlacklistedSlice";

export const AddBlacklist =()=>{
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