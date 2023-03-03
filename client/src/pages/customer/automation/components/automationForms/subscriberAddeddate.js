import { useForm } from "react-hook-form";
import { CustomFormField } from "../../../../../components/customFomField"

export const SubscriberAddedDate =({
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
            <p className="fs-4">Subscriber added date</p>
            <p className="fs-6">
                Automation starts yearly on your subscribers joining date. 
                Sometimes you may want to trigger the automation prior to the date. You can schedule it accordingly below
            </p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="mb-2 d-flex flex-column">
                    <label 
                        htmlFor="Before"
                        className="fs-6"
                        >
                        Before or After
                    </label>
                    <select
                        className="b-grey p-2 rounded"
                        name="Before"
                        {...register(
                                "Before", 
                                {
                                    required:`Please select day`,
                                }
                            )
                        }
                        >
                            {
                                [
                                    "1 min",
                                    "30 min",
                                    "1 hour",
                                    "2 hours",
                                    "4 hours",
                                    "8 hours",
                                    "12 hours",
                                    "1 day",
                                    "2 days",
                                    "3 days",
                                    "4 days",
                                    "5 days",
                                    "6 days",
                                    "1 week",
                                    "2 weeks",
                                    "1 month",
                                    "2 months"
                                ]?.map((option,index)=>{
                                    return  <option value={option} key={index}>{option}</option>
                                })
                            }
                    </select>
                    {errors.Before && (<p className="text-danger ">{errors.message}</p>)}
                </div>
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