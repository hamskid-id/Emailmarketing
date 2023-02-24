import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
// import { Createsubscriber } from "../../../../store/subscriberSlice";

export const ContactInformation =()=>{
    // const subsriber = useSelector(
    //     state => state.subscriber
    // )
    const auth = useSelector(
        state => state.auth
    )
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        email,
        fname,
        lname,
        country,
        state,
        phone,
        dob,
        tag
    })=>{
        // dispatch(
        //     Createsubscriber({
        //         email,
        //         fname,
        //         lname,
        //         country,
        //         state,
        //         phone,
        //         dob,
        //         tag
        //     })
        // )
    }
    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>

            <p className="fs-2 text-center">Contact information</p>
            <div  className="grid">      
                <CustomFormField
                    label ="Company / Organization *"
                    name ="corg"
                    space={true}
                    placeholder="Company / Organization"
                    type="text"
                    register={register}
                    errors={errors.corg}
                />
                <CustomFormField
                    label ="Phone *"
                    name ="tel"
                    placeholder="Phone"
                    space={true}
                    type="tel"
                    register={register}
                    errors={errors.tel}
                />
                <CustomFormField
                    label ="Email *"
                    name ="cemail"
                    defaultValue={auth.userdata?.user?.email}
                    space={true}
                    placeholder="email"
                    type="email"
                    register={register}
                    errors={errors.cemail}
                />
                <CustomFormField
                    label ="Zip / Postal code *"
                    name ="postal"
                    placeholder="Zip / Postal code"
                    type="number"
                    register={register}
                    space={true}
                    errors={errors.postal}
                />
                <CustomFormField
                    label ="State / Province / Region *"
                    name ="state"
                    placeholder="State / Province / Region "
                    space={true}
                    type="text"
                    register={register}
                    errors={errors.state}
                />
                <CustomFormField
                    label ="City *"
                    name ="city"
                    placeholder="City "
                    type="text"
                    space={true}
                    register={register}
                    errors={errors.city}
                />
                <CustomFormField
                    label ="Address 1 *"
                    name ="addy1"
                    space={true}
                    placeholder="Address 1 "
                    type="text"
                    register={register}
                    errors={errors.addy1}
                />
                <CustomFormField
                    label ="Address 2 *"
                    name ="addy2"
                    placeholder="Address 2"
                    space={true}
                    type="text"
                    register={register}
                    errors={errors.addy2}
                />
                <CustomFormField
                    label ="Country *"
                    name ="country"
                    space={true}
                    placeholder="Country "
                    type="country"
                    register={register}
                    errors={errors.country}
                />
                <CustomFormField
                    label ="Website"
                    name ="web"
                    placeholder="Home page"
                    type="text"
                    space={true}
                    register={register}
                    errors={errors.web}
                />
            </div>
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus="success"
            />
        </form>
    )
}