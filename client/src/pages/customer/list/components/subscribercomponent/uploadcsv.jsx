import { useEffect, useState,useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import { CreatCsvSubscriber} from "../../../../../store/subscriberSlice";

export const UploadSubcriberCSV =({hidemodal})=>{
    const subsriber = useSelector(
        state => state.subscriber
    )
    const uploadRef = useRef(null)
    const Tags = useSelector(
        state => state.tag
    )
    const [tagToSubmit, setTagToSubmit] = useState('');
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        tag
    })=>{
        setTagToSubmit(tag)
        uploadRef.current.click();
    }

    const handleChange =(e)=>{
        let file = e.target.files[0]
        if(file){
            dispatch(CreatCsvSubscriber({
                csv:file,
                tag_id:tagToSubmit
            }))
        }
        
        
    }
    useEffect(()=>{
        if(subsriber. CreateCsvSubscriberStatus ==="success"){
            hidemodal.current.click()
        }
    },[subsriber.CreateCsvSubscriberStatus])

    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <div className="w-100 mb-2">
                {
                    Tags && Tags.Tags?.length ==0?(
                        <CustomFormField
                            label ="Name"
                            name ="tag"
                            placeholder="name"
                            type="text"
                            register={register}
                            errors={errors.tag}
                        />
                    ):(
                        <div>
                            <label
                                className="fw-bold fs-6" 
                                htmlFor="tag">
                                Tags
                            </label>
                            <select 
                                name="tag" 
                                id=""
                                className=" p-2 border rounded w-100 fs-6"
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
                                                value={id}
                                                key={index}
                                            >{name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                    </div>
                )
                }
            </div>
            <label 
                htmlFor="upload"
                ref={uploadRef}
            >
            </label>
            <input
                type="file"
                id="upload"
                accept=".csv"
                className="b-grey my-2 fl-r mb-2 me-2"
                onChange={handleChange}
            />
            <div>
            {
                    subsriber.CreateCsvSubscriberStatus === "pending"?(
                        <button
                            htmlFor="upload"
                            className="btn b-grey btn-md my-2 fl-r mb-2 me-2"
                            disabled
                        >
                            <span 
                                className="spinner-border spinner-border-sm me-1" 
                                role="status" 
                                aria-hidden="true">
                            </span>
                            Proceed
                        </button>
                    ):(
                        <button
                            htmlFor="upload"
                            className="btn b-grey btn-md my-2 fl-r mb-2 me-2"
                            >         
                                Proceed                                   
                        </button>
                    )
                }
            </div>
        </form>
    )
}