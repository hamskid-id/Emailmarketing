import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../components/customFomField";

export const Schedule =({
    campaignParams,
    setCampaignparams
})=>{
     const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        Ddate
        // time
    })=>{
        setCampaignparams({
            ...campaignParams,
            DeliveryDate:Ddate,
            // DeliveryTime:time,
            sectionCompleted:4
        })
    }
    return(
        <>
             <form onSubmit={handleSubmit(SubmitHandler)}>
                <CustomFormField
                    label ="Delivery date *"
                    name ="Ddate"
                    defaultValue={campaignParams.DeliveryDate}
                    type="date"
                    register={register}
                    errors={errors.Ddate}
                />
                {/* <CustomFormField
                    label ="Delivery Time *"
                    defaultValue={campaignParams.DeliveryTime}
                    name ="time"
                    type="time"
                    register={register}
                    errors={errors.time}
                /> */}
                <hr className="b-grey"/>
                <button className="btn btn-md b-grey mt-5 fl-r">Schedule & Send Now</button>   
            </form>
        </>
    )
}