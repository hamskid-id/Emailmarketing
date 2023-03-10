import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import { Createsubscriber } from "../../../../../store/subscriberSlice";

export const SubscriberModalContent =({hidemodal})=>{
    const subsriber = useSelector(
        state => state.subscriber
    )
    const Tags = useSelector(
        state => state.tag
    )
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        email,
        fname,
        lname,
        country,
        state,
        phone,
        dob,
        tag
    })=>{
        dispatch(
            Createsubscriber({
                email,
                fname,
                lname,
                country,
                state,
                phone,
                dob,
                tag_id:tag
            })
        )
    }
    useEffect(()=>{
        if(subsriber.CreatesubscriberStatus ==="success"){
            hidemodal.current.click()
        }
    },[subsriber.CreatesubscriberStatus])
    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <CustomFormField
                label ="Email"
                name ="email"
                placeholder="email"
                type="text"
                register={register}
                errors={errors.email}
            />
             <CustomFormField
                label ="First Name"
                name ="fname"
                placeholder="first name"
                type="text"
                register={register}
                errors={errors.fname}
            />
             <CustomFormField
                label ="Last Name"
                name ="lname"
                placeholder="last name"
                type="text"
                register={register}
                errors={errors.lname}
            />
             <CustomFormField
                label ="Country"
                name ="country"
                placeholder="country"
                type="text"
                register={register}
                errors={errors.country}
            />
             <CustomFormField
                label ="State"
                name ="state"
                placeholder="state"
                type="text"
                register={register}
                errors={errors.state}
            />
             <CustomFormField
                label ="Phone No"
                name ="phone"
                placeholder="phone"
                type="number"
                register={register}
                errors={errors.phone}
            />
             <CustomFormField
                label ="Date of Birth"
                name ="dob"
                placeholder="dob"
                type="date"
                register={register}
                errors={errors.dob}
            />
            <div className="w-100 mb-2">
                <label
                    className="fw-bold" 
                    htmlFor="tag">
                    Tags
                </label>
                <select 
                    name="tag" 
                    id="tag"
                    className="bg-alice p-2 border border-white rounded w-100"
                    {...register(
                        "tag", 
                        {
                            required:`tag field is invalid`,
                        }
                    )
                    }
                    >
                    {
                        Tags.Tags?.map((tag,index)=>{
                            const{
                                name,
                                id
                            }=tag
                            return(
                                <option 
                                    value={id}
                                    key={index}
                                >{name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <CustomFormField
                value="submit"
                type="btn"
                loadingStatus={subsriber.CreatesubscriberStatus}
            />

        </form>
    )
}