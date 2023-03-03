import { useForm } from "react-hook-form";

export const WelcoemNewSub=({
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
            <p className="fs-4">Welcome new subscribers</p>
            <p className="fs-6">Trigger when user subscribes to your list. Normally, 
                it is recommended that you send a welcome email to warmly greet your new subscriber as well as offer 
                him/her your products or service
            </p>
            <form 
                className=" d-flex flex-column"
                onSubmit={handleSubmit(SubmitHandler)}>
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
                <button className="btn b-grey btn-md mt-3">Confirm</button>
            </form>
        </>
    )
}