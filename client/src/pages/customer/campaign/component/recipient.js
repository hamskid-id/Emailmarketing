import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
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
        tag
    })=>{
        const newTag = JSON.parse(tag)
        console.log(newTag)
        setCampaignparams({
            ...campaignParams,
            tag_id:{
                name:newTag.name,
                id:newTag.id
            },
            sectionCompleted:1
        })
    }
    
    return(
        <>
            <p className="fs-4">Choose a tag for sending email</p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="w-100 mb-2">
                    <label
                        className="fw-bold me-2 fs-6" 
                        htmlFor="tag">
                        Tags
                    </label>
                    <select 
                    name="tag" 
                    id="tag"
                    className="p-2 border rounded wt-50 fs-6"
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