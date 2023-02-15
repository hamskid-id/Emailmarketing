import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";

export const CreateTag =()=>{
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
            CreateTag({
                name
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
                loadingStatus={tag.CreateTagsStatus}
            />
        </form>
    )
}