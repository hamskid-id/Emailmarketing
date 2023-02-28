import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../../components/customFomField"

export const MonthlyRecurring =(
    {
        setModalView
    }
    )=>{
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
            <p className="fs-4">Monthly recurring</p>
            <p className="fs-6">
            Schedule your campaign to automatically send on a monthly basis, on a particular day of the month
            </p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
            <div className="w-100 mb-2 d-flex flex-column">
                <label
                    className="fw-bold" 
                    htmlFor="days">
                    Days of month*
                </label>
                <input 
                    className="w-100` bg-alice p-2 border border-white rounded"
                    placeholder="ranges from 1 to 31"
                    type="number"
                    name="days"
                    min={1}
                    max={31}
                    {...register(
                        `days`, 
                        {
                            required:`days field is invalid`,
                        }
                    )
                }
                />
                 {errors.days && (<p className="text-danger ">{errors.message}</p>)}
            </div>
                <CustomFormField
                    label ="At"
                    name ="At"
                    type="time"
                    register={register}
                    errors={errors.At}
                />
                <div className=" d-flex flex-column mb-2">
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
                    {errors.time && (<p className="text-danger ">{errors.message}</p>)}
                </div>
                <button className="btn b-grey btn-md mt-3">Confirm</button>
            </form>
        </>
    )
}