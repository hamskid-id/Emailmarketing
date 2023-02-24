import { useForm } from "react-hook-form";
export const Recipient =({
    campaignParams,
    setCampaignparams
})=>{
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        defaultaction,
        list
    })=>{
        setCampaignparams({
            ...campaignParams,
            default:defaultaction,
            ToWhichListShallWeSend:list,
            sectionCompleted:1
        })
    }
    
    return(
        <>
            <p className="fs-4">Choose one or more lists for sending email</p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="d-flex flex-column mb-4">
                    <div className="d-flex me-5 mb-3">
                        <label 
                            htmlFor="defaultaction"
                            className="me-3 fw-bold">
                            Default
                        </label>
                        <input 
                            className="bg-alice p-2 border border-white rounded form-check-input me-1"
                            type="checkbox"
                            defaultValue={campaignParams.default}
                            name="defaultaction"
                            {...register(
                                "defaultaction"
                            )
                            }
                        />
                    </div>
                    <div className="d-flex">
                        <label 
                            htmlFor="list"
                            className="me-3 fw-bold">
                            To which list shall we send?
                        </label>
                        <select 
                            name="list" 
                            id="list"
                            defaultValue={campaignParams.ToWhichListShallWeSend}
                            className="bg-alice p-2 border border-white rounded w-97"
                            required
                            {...register(
                                "list", 
                                {
                                    required:`List field is invalid`,
                                }
                            )
                            }
                            >
                            {
                                [
                                    {name:"firat list"}
                                ]?.map((tag,index)=>{
                                    const{
                                        name
                                    }=tag
                                    return(
                                        <option 
                                            value={name}
                                            key={index}
                                        >{name}
                                        </option>
                                    )
                                })
                            }
                        </select><br/>
                        {errors && (<p className="text-danger ">{errors.message}</p>)}
                    </div>
                    
                </div>               
                <hr className="b-grey"/>
                <button className="btn btn-md b-grey mt-5 fl-r">Save & Next</button>
            </form>
        </>
    )
}