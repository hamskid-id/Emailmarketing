import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../components/customFomField"
import { useDispatch, useSelector} from "react-redux";
import { InviteUsers } from "../../../store/collaborationSlice";

export const CollaboratorForm=()=>{
    const collab = useSelector(
        state => state.collab
    )
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        name,
        email
    })=>{
        dispatch(InviteUsers({
            name,
            email
        }))
    }

    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Full Name"
                name ="name"
                placeholder="full name"
                type="text"
                register={register}
                errors={errors.name}
            />
             <CustomFormField
                label ="Email"
                name ="email"
                placeholder="email"
                type="email"
                register={register}
                errors={errors.email}
            />
            <CustomFormField
                value="invite"
                type="btn"
                loadingStatus={collab.InviteUsersStatus}
            />
        </form>
    )
}