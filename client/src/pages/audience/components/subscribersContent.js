import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSubscribers } from "../../../store/subscriberSlice";

export const SubContainer =()=>{
    const subsriber = useSelector(
        state => state.subscriber
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetSubscribers(null));
    },[dispatch])
    
        return(
            <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                {
                    subsriber
                        .subscribers?.length >0?(
                                <caption>Subscribers</caption>
                            ):(
                                <caption>Your subscribers list is empty.Click on Add subscriber to get started</caption>
                            )
                }
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">State</th>
                        <th scope="col">Phone</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Tag</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subsriber
                            .subscribers?.map((sub,index)=>{
                                const{
                                    email,
                                    fname,
                                    lname,
                                    country,
                                    state,
                                    phone,
                                    dob,
                                    tag
                                }=sub
                                return(
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{email}</td>
                                        <td>{fname}</td>
                                        <td>{lname}</td>
                                        <td>{country}</td>
                                        <td>{state}</td>
                                        <td>{phone}</td>
                                        <td>{dob}</td>
                                        <td>{tag}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
}