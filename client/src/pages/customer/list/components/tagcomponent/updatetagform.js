import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CustomFormField } from "../../../../../components/customFomField";
import {UpdateTags } from "../../../../../store/tagSlice";

export const UpdateTagForm =()=>{
    const navigate = useNavigate()
    const {id} = useParams()
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
            UpdateTags({
                name,
                id
            })
        )
    }

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
                loadingStatus={tag.UpdateTagsStatus}
            />
        </form>
    )
}