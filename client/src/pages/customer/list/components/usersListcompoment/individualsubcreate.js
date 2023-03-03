import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import { Createsubscriber } from "../../../../../store/subscriberSlice";
import { GetTags } from "../../../../../store/tagSlice";

export const IndividualSubCreate =()=>{
    const subsriber = useSelector(
        state => state.subscriber
    )
    const Tags = useSelector(
        state => state.tag
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetTags(null));
    },[dispatch])
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
                tag
            })
        )
    }
    return(
        <>
            <p className="fs-3"> + New Subscribers</p>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="grid">
                    <CustomFormField
                        label ="Email"
                        name ="email"
                        placeholder="email"
                        space={true}
                        type="text"
                        register={register}
                        errors={errors.email}
                    />
                    <CustomFormField
                        label ="First Name"
                        name ="fname"
                        placeholder="first name"
                        space={true}
                        type="text"
                        register={register}
                        errors={errors.fname}
                    />
                    <CustomFormField
                        label ="Last Name"
                        name ="lname"
                        placeholder="last name"
                        space={true}
                        type="text"
                        register={register}
                        errors={errors.lname}
                    />
                    <CustomFormField
                        label ="Country"
                        name ="country"
                        placeholder="country"
                        type="text"
                        space={true}
                        register={register}
                        errors={errors.country}
                    />
                    <CustomFormField
                        label ="State"
                        name ="state"
                        placeholder="state"
                        space={true}
                        type="text"
                        register={register}
                        errors={errors.state}
                    />
                    <CustomFormField
                        label ="Phone No"
                        name ="phone"
                        placeholder="phone"
                        space={true}
                        type="number"
                        register={register}
                        errors={errors.phone}
                    />
                    <CustomFormField
                        label ="Date of Birth"
                        name ="dob"
                        placeholder="dob"
                        space={true}
                        type="date"
                        register={register}
                        errors={errors.dob}
                    />
                    <div className="w-100 mb-2 d-flex flex-column">
                        <label
                            className="fw-bold" 
                            htmlFor="tag">
                            Tags
                        </label>
                        <select 
                            name="tag" 
                            id="tag"
                            className="bg-alice p-2 border border-white rounded w-97"
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
                                        name
                                    }=tag
                                    return(
                                        <option 
                                            value={name}
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

                </div>
            </form>
        </>
    )
}