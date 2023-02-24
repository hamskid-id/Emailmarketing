import { useForm } from "react-hook-form";
// import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../components/customFomField";

export const TrackingForm =()=>{
    // const tag = useSelector(
    //     state => state.tag
    // )
    // const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        Dtype,
        DName,
        veri
    })=>{
        // dispatch(
        //     CreateTags({
        //         name
        //     })
        // )
        
    }
    return(
       <>
            <p className="fs-5">
                Using a tracking domain creates all the links and URLs in your emails to be overwritten as if they come from your own brand's domain 
                (rather than from this application hostname), making your emails more authentic and more likely to reach recipients INBOX.
            </p>
            <form 
                className="mb-3"
                onSubmit={handleSubmit(SubmitHandler)}>
                <div>
                    <label 
                        htmlFor="DName"
                        className="fw-bold fs-4 mb-2"
                        >
                        Domain Name
                    </label>
                    <div className="d-flex mb-4">
                        <span>
                            <select
                                className="b-grey border border-white rounded"
                                style={{padding:"0.6rem"}}
                                name="Dtype"
                                {...register(
                                        "Dtype", 
                                        {
                                            required:`field is invalid`,
                                        }
                                    )
                                }
                            >
                                <option value="HTTP">HTTP</option>
                                <option value="HTTPS">HTTPS</option>
                            </select>
                            {errors.Dtype && (<p className="text-danger ">{errors.message}</p>)}
                        </span>
                        <span>
                            <input 
                                type="text"
                                className="bg-alice p-2 border border-white rounded"
                                name="DName"
                                {...register(
                                        "DName", 
                                        {
                                            required:`field is invalid`,
                                        }
                                    )
                                }
                            />
                            {errors.DName && (<p className="text-danger ">{errors.message}</p>)} 
                        </span>
                    </div>
                    <div className="d-flex mt-2">
                        <span className="me-3">
                            <input 
                                type="radio"
                                name="veri"
                                value="Host redirect verification"
                                {...register(
                                    "veri", 
                                    {
                                        required:`field is invalid`,
                                    }
                                )
                                }
                            />
                            {errors.veri && (<p className="text-danger ">{errors.message}</p>)} 
                        </span>
                        <span>
                            <h6 className="fs-5">Host redirect verification</h6>
                            <h6 className="fs-6">
                                Verify this domain by uploading PHP script to the related hosting server, 
                                which is responsible for redirecting web traffice to the appropriate location
                            </h6>
                        </span>
                    </div>
                    <div className="d-flex">
                        <span className="me-3">
                            <input 
                                type="radio"
                                name="veri"
                                value="DNS/CNAME verification"
                                {...register(
                                    "veri", 
                                    {
                                        required:`field is invalid`,
                                    }
                                )
                                }
                            />
                            {errors.veri && (<p className="text-danger ">{errors.message}</p>)}
                        </span>
                        <span>
                            <h6 className="fs-5">DNS/CNAME verification</h6>
                            <h6 className="fs-6">
                                Verify this domain through DNS update. You will need to have access to your DNS control panel
                            </h6>
                        </span>
                    </div>
                </div>
                <CustomFormField
                    value="submit"
                    type="btn"
                    loadingStatus="success"
                />
            </form>
       </>
        
    )
}