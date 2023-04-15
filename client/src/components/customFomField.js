
export const CustomFormField =({
    label,
    name,
    value,
    placeholder,
    type,
    space,
    color,
    errors,
    register,
    loadingStatus,
    defaultValue,
    editableValue,
    btnFluid,
    btnBg
})=>{
    if(type === "btn"){
        return(
            <div className="w-100">
                {
                    loadingStatus === "pending"?(
                        <button
                            className={`${btnFluid && `p-2 w-100`} btn btn-sm ${btnBg ? btnBg : `bg-slate-grey`} text-white`}
                            type="button" 
                            disabled
                        >
                            <span 
                                className="spinner-border spinner-border-sm" 
                                role="status" 
                                aria-hidden="true">
                            </span>
                        </button>
                    ):(
                        <button 
                            className={`${btnFluid && `p-2 w-100`} btn btn-sm ${btnBg ? btnBg : `bg-slate-grey`} text-white fs-6`}>
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
                    className="bg-alice p-2 border border-white rounded form-check-input me-1"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    {...register(
                        `${name}`
                    )
                }
                />
                 <label
                    className={`fw-bold ${color && color} fs-6`}
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
                    className={`fw-bold ${color && color} fs-6`}
                    htmlFor={name}>
                    {label}
                </label>
                <textarea 
                    className={`${space?`w-97`:`w-100`} border p-2 rounded`}
                    id={name}
                    defaultValue={defaultValue?defaultValue:null}
                    readOnly={defaultValue?true:false}
                    required
                    {...register(
                            `${name}`, 
                            {
                                required:`Please fill in ${label}`,
                            }
                        )
                    }
                >
                   
                </textarea>
                {errors && (<p className="text-danger ">{errors.message}</p>)}
            </div>
        )
    }
    if(type==="password"){
        <div className="w-100 mb-2">
        <label
            className={`fw-bold ${color && color} fs-6`}
            htmlFor={name}>
            {label}
        </label>
        <input 
            className={`${space?`w-97`:`w-100`} p-2 border  rounded`}
            type={type}
            name={name}
            value={editableValue?editableValue:""}
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
                className={`fw-bold ${color && color} fs-6`}
                htmlFor={name}>
                {label}
            </label>
            <input 
                className={`${space?`w-97`:`w-100`} p-2 border rounded`}
                type={type}
                name={name}
                defaultValue={defaultValue?defaultValue:null}
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