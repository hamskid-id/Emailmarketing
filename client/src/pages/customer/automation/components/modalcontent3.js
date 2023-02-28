import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { CustomFormField } from "../../../../components/customFomField"

export const CreateAutomation =({
    setModalView
})=>{
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        name
    })=>{
        // dispatch(
        //     CreateTags({
        //         name
        //     })
        // )
        
    }
    return(
        <div className="wt-50 rounded shadow d-flex flex-column m-auto p-3">
            <FaArrowLeft
                onClick={()=>
                    setModalView((prevState)=>{
                        return{
                            ...prevState,
                            name:"second",
                        }
                    })
                }
            />
            <hr className="b-grey"/>
            <p className="fs-4 mt-2">Create Automation</p>
            <p className="fs-6">
                Name your new automation. This name is used to identify the automation later.
            </p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <CustomFormField
                    label ="Automation name"
                    name ="name"
                    type="text"
                    register={register}
                    errors={errors.name}
                />
                <CustomFormField
                    type="btn"
                    register={register}
                    value="Get Started"
                />
            </form>
        </div>
    )
}