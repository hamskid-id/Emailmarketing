import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
import { UpdateContactInfo} from "../../../../store/authSlice";

export const ContactInformation =()=>{

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

            <p className="fs-4 fw-bold text-center pt-4">Update your contact information</p>
            <div  className="grid">      
                <CustomFormField
                    label ="Company / Organization *"
                    name ="corg"
                    defaultValue={auth.contactInfo[0]?.company}
                    space={true}
                    placeholder="Company / Organization"
                    type="text"
                    register={register}
                    errors={errors.corg}
                />
                <CustomFormField
                    label ="Phone *"
                    name ="tel"
                    defaultValue={auth.contactInfo[0]?.phone}
                    placeholder="Phone"
                    space={true}
                    type="tel"
                    register={register}
                    errors={errors.tel}
                />
                <CustomFormField
                    label ="Email *"
                    name ="cemail"
                    defaultValue={auth.contactInfo[0]?.email}
                    space={true}
                    placeholder="email"
                    type="email"
                    register={register}
                    errors={errors.cemail}
                />
                <CustomFormField
                    label ="Zip / Postal code *"
                    name ="postal"
                    defaultValue={auth.contactInfo[0]?.zip_code}
                    placeholder="Zip / Postal code"
                    type="number"
                    register={register}
                    space={true}
                    errors={errors.postal}
                />
                <CustomFormField
                    label ="State / Province / Region *"
                    name ="state"
                    defaultValue={auth.contactInfo[0]?.state}
                    placeholder="State / Province / Region "
                    space={true}
                    type="text"
                    register={register}
                    errors={errors.state}
                />
                <CustomFormField
                    label ="City *"
                    name ="city"
                    defaultValue={auth.contactInfo[0]?.city}
                    placeholder="City "
                    type="text"
                    space={true}
                    register={register}
                    errors={errors.city}
                />
                <CustomFormField
                    label ="Address 1 *"
                    name ="addy1"
                    defaultValue={auth.contactInfo[0]?.address1}
                    space={true}
                    placeholder="Address 1 "
                    type="text"
                    register={register}
                    errors={errors.addy1}
                />
                <CustomFormField
                    label ="Address 2 *"
                    name ="addy2"
                    defaultValue={auth.contactInfo[0]?.address2}
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
                    defaultValue={auth.contactInfo[0]?.country}
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