import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
// import { Createsubscriber } from "../../../../store/subscriberSlice";

export const ListModalContent =()=>{
    // const subsriber = useSelector(
    //     state => state.subscriber
    // )
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
            <div className="grid">           
                <CustomFormField
                    label ="Name *"
                    name ="name"
                    placeholder="name"
                    space={true}
                    type="text"
                    register={register}
                    errors={errors.name}
                />
                <CustomFormField
                    label ="From email *"
                    name ="femail"
                    placeholder="from email"
                    space={true}
                    type="email"
                    register={register}
                    errors={errors.femail}
                />
                <CustomFormField
                    label ="Default From name *"
                    name ="DeFromName"
                    placeholder="Default From name"
                    space={true}
                    type="text"
                    register={register}
                    errors={errors.DeFromName}
                />                        
            </div>
            <p className="fs-5 fw-bold mt-4">Contact information Default from your contact information</p>
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
                    label ="Home page"
                    name ="homepage"
                    placeholder="Home page"
                    type="text"
                    space={true}
                    register={register}
                    errors={errors.homepage}
                />
            </div>     
            <p className="fs-5 fw-bold mt-4">Settings</p>
            <h6 className="fs-5 fw-bold" >Subscription</h6>
            <div  className="grid">
                <div>
                    <div>
                        <h6 className="fw-bold">Send subscription confirmation email (Double Opt-In)</h6>
                        <h6>When people subscribe to your list, send them a subscription confirmation email.</h6>
                    </div>
                    <div>
                        <CustomFormField
                            name="remember"
                            type="checkbox"
                            register={register}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h6 className="fw-bold">Send a final welcome email</h6>
                        <h6>When people opt-in to your list, send them an email welcoming them to your list. The final welcome email can be edited in the List
                            Forms / Pages management</h6>
                    </div>
                    <div>
                        <CustomFormField
                            name="remember"
                            type="checkbox"
                            register={register}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h6 className="fw-bold">Send unsubscribe notification to subscribers</h6>
                        <h6>Send subscribers a final “Goodbye” email to let them know they have unsubscribed.</h6>
                    </div>
                    <div>
                        <CustomFormField
                            name="remember"
                            type="checkbox"
                            register={register}
                        />
                    </div>
                </div>
            </div>
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus="success"
            />
        </form>
    )
}