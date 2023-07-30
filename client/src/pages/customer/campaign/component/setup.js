import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../components/customFomField";
import { useRef } from "react";
import { useSelector } from "react-redux";
export const Setup=({
    campaignParams,
    setCampaignparams
})=>{
    const selectRef= useRef([]);
    const subscriber = useSelector(
        state => state.subscriber
    )

    const handleSelectAll=(e)=>{
        if(e.target.checked == true){
            for ( var i=0; i<selectRef.current.length; i++)
            {
                selectRef.current[i].selected = true;
            }
        }else{
            for ( var i=0; i<selectRef.current.length; i++)
            {
                selectRef.current[i].selected = false;
            }
        }
        
    }
    const {
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        campaign,
        emailSubject,
        FromName,
        FromEmail,
        sub
        // ReplyTo
    })=>{
        setCampaignparams({
            ...campaignParams,
            NameYourCampaign:campaign,
            EmailSubject:emailSubject,
            FromName:FromName,
            FromEmail:FromEmail,
            ReplyTo:sub,
            sectionCompleted:2
        })
        console.log(sub)
    }

    return(
        <>
            <div className="pb-5">
                <form onSubmit={handleSubmit(SubmitHandler)}>
                    <div className="grid">
                        <CustomFormField
                            label ="Name your campaign *"
                            defaultValue={campaignParams.NameYourCampaign}
                            space={true}
                            name ="campaign"
                            placeholder="Name your campaign"
                            type="text"
                            register={register}
                            errors={errors.campaign}
                        />
                        <CustomFormField
                            label ="Email subject *"
                            space={true}
                            defaultValue={campaignParams.EmailSubject}
                            name ="emailSubject"
                            placeholder="Email subject"
                            type="textArea"
                            register={register}
                            errors={errors.emailSubject}
                        />
                        <CustomFormField
                            label ="From name *"
                            name ="FromName"
                            space={true}
                            defaultValue={campaignParams.FromName}
                            placeholder="From name"
                            type="text"
                            register={register}
                            errors={errors.FromName}
                        />
                        <CustomFormField
                            label ="From email *"
                            name ="FromEmail"
                            space={true}
                            defaultValue={campaignParams.FromEmail}
                            placeholder="From email "
                            type="email"
                            register={register}
                            errors={errors.FromEmail}
                        />
                        {/* <CustomFormField
                            label ="Reply to *"
                            name ="ReplyTo"
                            placeholder="Reply to "
                            defaultValue={campaignParams.ReplyTo}
                            space={true}
                            type="text"
                            register={register}
                            errors={errors.ReplyTo}
                        /> */}
                        <div className="w-100 mb-2">
                            <label
                                className={`fw-bold fs-6`}
                                htmlFor="sub">
                                subcribers*
                            </label>
                            <select
                                multiple
                                className={`w-97 p-2 border rounded btn text-start bg bg-white fs-6`}
                                name="sub"
                                
                                {...register(
                                    `sub`, 
                                    {
                                        required:`subscribers field is invalid`,
                                    }
                                )
                            }
                            >
                                {
                                    subscriber?.subscribers?.map((items,index)=>{
                                        const{
                                            email
                                        }=items;
                                        return(
                                            <option 
                                                value={email} 
                                                key={index} 
                                                ref={el => selectRef.current[index] = el}
                                                >{email}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            {errors.sub && (<p className="text-danger ">{errors.message}</p>)}
                            <div className="d-flex align-items-center mb-2">
                                <input 
                                    className="bg-alice p-2 border border-white rounded form-check-input me-1 btn"
                                    type="checkbox"onChange={handleSelectAll}
                                />
                                <label
                                    className={` fs-6 c-grey`}>
                                    select all
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr className="b-grey"/>
                    <button className="btn btn-md b-grey fl-r">Save & Next</button>                 
                </form>
            </div>
        </>
    )
}