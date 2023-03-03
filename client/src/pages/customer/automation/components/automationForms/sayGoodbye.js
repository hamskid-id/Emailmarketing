import { useForm } from "react-hook-form";

export const SayGoodByeToSubscriber=({
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
            <p className="fs-4">Say goodbye to subscriber</p>
            <p className="fs-6">
                Start the automation when a subscriber unsubscribes from your audience. 
                Normally you may want to send a follow email asking for the reason ask well as offering re-subscription benefits.
            </p>
            <form 
                onSubmit={handleSubmit(SubmitHandler)} 
                className=" d-flex flex-column">
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