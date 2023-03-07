import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";
export const Recipient =({
    campaignParams,
    setCampaignparams
})=>{
    const Tags = useSelector(
        state => state.tag
    )
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        tag,
        status
    })=>{
        const newTag = JSON.parse(tag)
        console.log(newTag)
        setCampaignparams({
            ...campaignParams,
            tag_id:{
                name:newTag.name,
                id:newTag.id
            },
            status:status,
            sectionCompleted:1
        })
    }
    
    return(
        <>
            <p className="fs-4">Choose a tag for sending email</p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <CustomFormField
                    label ="Status *"
                    defaultValue={campaignParams.status}
                    space={true}
                    name ="status"
                    placeholder="status"
                    type="number"
                    register={register}
                    errors={errors.status}
                />
                <div className="w-100 mb-2">
                    <label
                        className="fw-bold" 
                        htmlFor="tag">
                        Tags
                    </label>
                    <select 
                    name="tag" 
                    id="tag"
                    className="bg-alice p-2 border border-white rounded w-100"
                    {...register(
                        "tag", 
                        {
                            required:`tag field is invalid`,
                        }
                    )
                    }
                    >
                    {
                        Tags.Tags?.map((tag,index)=>{
                            const{
                                name,
                                id
                            }=tag
                            return(
                                <option 
                                    value={JSON.stringify({id:id,name:name})}
                                    key={index}
                                >{name}
                                </option>
                            )
                        })
                    }
                </select>
                </div>              
                <hr className="b-grey"/>
                <button className="btn btn-md b-grey mt-5 fl-r">Save & Next</button>
            </form>
        </>
    )
}