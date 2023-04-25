import {useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../components/spinner/spinner";
import { Actions } from "./subAction";
import { NoData } from "../../../../components/nodata";
import { DeleteSubscriber } from "../../../../store/subscriberSlice";

export const SubscriberTable=({
    content
})=>{
        const subsriber = useSelector(
            state => state.subscriber
        )
        const dispatch = useDispatch();

        if(subsriber.GetSubscribersStatus ==='pending' || content.deleteSubStatus ==='pending'){
            return <Spinner/>
        }

    return(
        <>
            <Actions/>
            <div className="w-overflow">
                <table className="table table-striped table-hover table-bordered table-responsive caption-top mb-3">
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
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             content?.subscribers?.map((sub,index)=>{
                                    const{
                                        email,
                                        fname,
                                        lname,
                                        country,
                                        state,
                                        phone,
                                        dob,
                                        id
                                    }=sub
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{email}</td>
                                            <td>{fname}</td>
                                            <td>{lname}</td>
                                            <td>{country}</td>
                                            <td>{state}</td>
                                            <td>{phone}</td>
                                            <td>{dob}</td>
                                            <td>
                                                <div className="dropdown">
                                                    <button 
                                                        className="btn btn-secondary dropdown-toggle"
                                                        type="button" 
                                                        data-bs-toggle="dropdown" 
                                                        aria-expanded="false" 
                                                    >
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li
                                                            className="dropdown-item"
                                                            onClick={()=>dispatch(DeleteSubscriber({id}))}
                                                        >
                                                            Delete
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
            {
                content
                .subscribers?.length === 0 && <NoData/>
            }
        </>
    )
}