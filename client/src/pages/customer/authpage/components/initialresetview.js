import { useSelector } from "react-redux"
import { CustomFormField } from "../../../../components/customFomField"

export const InitialResetView =({
    title,
    SubmitHandler,
    handleSubmit,
    errors,
    register
})=>{
    const auth = useSelector(
        state => state.auth
    )
    return(
        <>
            <p className="fs-2 text-center fw-bold">
               {title}
            </p>
            <div>
                <form 
                    onSubmit={handleSubmit(SubmitHandler)}
                    >
                    <CustomFormField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="enter your email"
                        register={register}
                        errors={errors.email}
                    />
                    <CustomFormField
                        value="Send password reset Link"
                        type="btn"
                        btnFluid={true}
                        loadingStatus={auth.SendPasswordResetLinkStatus}
                    />
                </form>
            </div>
        </>
    )
}