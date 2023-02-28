import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../../components/customFomField"

export const SpecificDate =({
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
        setModalView((prevState)=>{
            return{
                ...prevState,
                name:"third",
            }
        })
    }
    return(
        <>
            <p className="fs-4">Specific date</p>
            <p className="fs-6">
                Start a marketing campaign immediately or schedule it for a particular date/time. 
                Automation will be triggered accordingly for all contacts in the selected mail list
            </p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <CustomFormField
                    label ="Date"
                    name ="Date"
                    type="date"
                    register={register}
                    errors={errors.Date}
                />
                <CustomFormField
                    label ="At"
                    name ="At"
                    type="time"
                    register={register}
                    errors={errors.At}
                />
                <div className=" d-flex flex-column">
                    <label 
                        htmlFor="List"
                        className="fs-6"
                        >
                        List
                    </label>
                    <select
                        className="b-grey p-2 rounded"
                        name="List"
                        {...register(
                                "List", 
                                {
                                    required:`Please choose a mail list`,
                                }
                            )
                        }
                        >
                            {
                                [
                                    "@connrstone realestate"
                                ]?.map((option,index)=>{
                                    return  <option value={option} key={index}>{option}</option>
                                })
                            }
                    </select>
                    {errors.List && (<p className="text-danger ">{errors.message}</p>)}
                </div>
                <button className="btn b-grey btn-md mt-3">Confirm</button>
            </form>
        </>
    )
}