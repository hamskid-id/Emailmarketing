
export const CustomFormField =({
    label,
    name,
    value,
    placeholder,
    type,
    errors,
    register,
    loadingStatus
})=>{
    if(errors){
        console.log(errors)
    }

    if(type === "btn"){
        return(
            <div className="w-100">
                {
                    loadingStatus === "pending"?(
                        <button
                            className="btn btn-sm bg-slate-grey text-white fs-5" 
                            type="button" 
                            disabled
                        >
                            <span 
                                className="spinner-border spinner-border-sm" 
                                role="status" 
                                aria-hidden="true">
                            </span>
                                Loading...
                        </button>
                    ):(
                        <button 
                            className="btn btn-sm bg-slate-grey text-white fs-5">
                            {value}
                        </button>
                    )
                }
            </div>
        )
    }
    if(type === "checkbox"){
        return(
            <div className="d-flex align-items-center mb-2">
                <input 
                    className="bg-alice p-2 border border-white rounded me-2"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    {...register(
                        `${name}`
                    )
                }
                />
                 <label
                    className="fw-bold" 
                    htmlFor={name}>
                    {label}
                </label>
            </div>
        )
    }
    if(type === "textArea"){
        return(
            <div className="w-100 mb-2">
                <label
                    className="fw-bold" 
                    htmlFor={name}>
                    {label}
                </label>
                <textarea 
                    className="w-100 bg-alice p-2 border border-white rounded"
                    name={name}
                    required
                    {...register(
                            `${name}`, 
                            {
                                required:`Please fill in ${label}`,
                            }
                        )
                    }
                >
                    {label}
                </textarea>
                {errors && (<p className="text-danger ">{errors.message}</p>)}
            </div>
        )
    }
    if(type==="password"){
        <div className="w-100 mb-2">
        <label
            className="fw-bold" 
            htmlFor={name}>
            {label}
        </label>
        <input 
            className="w-100 bg-alice p-2 border border-white rounded"
            type={type}
            name={name}
            // required
            placeholder={placeholder}
            {...register(
                `${name}`, 
                {
                    required:`${label} field is invalid`,
                    minLength: {
                        value: 8,
                        message: "password must not be less than 8 characters"
                    
                    }
                }
            )
        }
        />
         {errors && (<p className="text-danger ">{errors.message}</p>)}
    </div>
    }
    return(
        <div className="w-100 mb-2">
            <label
                className="fw-bold" 
                htmlFor={name}>
                {label}
            </label>
            <input 
                className="w-100 bg-alice p-2 border border-white rounded"
                type={type}
                name={name}
                // required
                placeholder={placeholder}
                {...register(
                    `${name}`, 
                    {
                        required:`${label} field is invalid`,
                    }
                )
            }
            />
             {errors && (<p className="text-danger ">{errors.message}</p>)}
        </div>
    )
}