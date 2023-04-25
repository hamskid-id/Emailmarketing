import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
import { UpdateContactInfo } from "../../../../store/authSlice";
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
        corg,
        tel,
        cemail,
        postal,
        city,
        addy1,
        addy2,
        country,
        state
    })=>{
        dispatch(
           UpdateContactInfo({
                id:auth.userdata?.user?.id,
                company:corg,
                phone:tel,
                email:cemail,
                zip_code:postal,
                city:city,
                address1:addy1,
                address2:addy2,
                country:country,
                state:state
            })
        )
    }
    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>

            <p className="fs-2 text-center py-4">Contact information</p>
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
            </div>
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus={auth.updateContactStatus}
            />
        </form>
    )
}