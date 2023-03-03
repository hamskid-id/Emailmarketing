import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../../components/customFomField"

export const WeeklyRecurring =({
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
        console.log("hello")
        setModalView((prevState)=>{
            return{
                ...prevState,
                name:"third",
            }
        })
    }
    return(
        <>
            <p className="fs-4">Weekly recurring</p>
            <p className="fs-6">
                Schedule your campaign to automatically send on a weekly basis, on a particular week day you choose
            </p>
            <form 
                onSubmit={handleSubmit(SubmitHandler)}>
                <div className="mb-2 d-flex flex-column">
                    <label 
                        htmlFor="days"
                        className="fs-6"
                        >
                       Days of week*
                    </label>
                    <select
                        className="b-grey p-2 rounded"
                        name="days"
                        {...register(
                                "days", 
                                {
                                    required:`select day`,
                                }
                            )
                        }
                        >
                            {
                                [
                                    "Sun",
                                    "Mon",
                                    "Tues",
                                    "Wed",
                                    "Thurs",
                                    "Fri",
                                    "Sat"
                                ]?.map((option,index)=>{
                                    return  <option value={option} key={index}>{option}</option>
                                })
                            }
                    </select>
                    {errors.days && (<p className="text-danger ">{errors.message}</p>)}
                </div>
                <CustomFormField
                    label ="At"
                    name ="At"
                    type="time"
                    register={register}
                    errors={errors.At}
                />
                <div className="mb-2 d-flex flex-column">
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
                <div className=" d-flex flex-column">
                    <label 
                        htmlFor="days"
                        className="fs-6"
                        >
                       Days of week*
                    </label>
                    <select
                        className="b-grey p-2 rounded"
                        name="time"
                        {...register(
                                "time", 
                                {
                                    required:`select timezone`,
                                }
                            )
                        }
                        >
                            {
                                [
                                    "(GMT +09:00) Asia/Tokyo"
                                ]?.map((option,index)=>{
                                    return  <option value={option} key={index}>{option}</option>
                                })
                            }
                    </select>
                    {errors.days && (<p className="text-danger ">{errors.message}</p>)}
                </div>
                <button className="btn b-grey btn-md mt-3">Confirm</button>
            </form>
        </>
    )
}