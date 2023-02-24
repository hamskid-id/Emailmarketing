import { useForm } from "react-hook-form";
// import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";

export const SendingForm =()=>{
    // const tag = useSelector(
    //     state => state.tag
    // )
    // const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        name
    })=>{
        // dispatch(
        //     CreateTags({
        //         name
        //     })
        // )
        
    }
    return(
       <>
        <p>
            Sending domain is used to verify the sender whose email address appearing in the FROM header of an email. 
            Add your own verified sending domains to send emails on behalf of your domain.
        </p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <CustomFormField
                    label ="Domain name *"
                    name ="name"
                    placeholder="name"
                    type="text"
                    register={register}
                    errors={errors.name}
                />
                 <CustomFormField
                    label ="Signing enabled*"
                    name ="enable"
                    type="checkbox"
                    register={register}
                    errors={errors.enable}
                />
                <CustomFormField
                    value="submit"
                    type="btn"
                    loadingStatus="success"
                />
            </form>
       </>
        
    )
}