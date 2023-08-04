import {useRef } from "react";
import {useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../../components/spinner/spinner";
import { HandleDownloadPdf } from "../../../campaign/statistics.js/components/download";
import { Actions } from "./unsubaction";
import { NoData } from "../../../../../components/nodata";
import { DeleteUnSubscribers } from "../../../../../store/UnsubscribeSlice";

export const UnSubContainer =()=>{
    
    const printRef = useRef(null);
    const unsub = useSelector(
        state => state.unsubscriber
    )
    const dispatch = useDispatch();
    if(unsub.GetUnSubscribersStatus ==='pending'){
        return <Spinner/>
    }
        return(
            <>
            <Actions
                HandleDownloadPdf={HandleDownloadPdf}
                printRef={printRef}
                itemLength = {unsub.unsubscribers?.length}
            />
            <div 
                ref={printRef}
                className="w-overflow px-1 py-3">
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
                            <th scope="col">Tag</th>
                            <th scope="col">Created At</th>
                            <th scope="col">status</th>
                            <th scope="col">subscribe</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            unsub
                                .unsubscribers?.map((sub,index)=>{
                                    const{
                                        email,
                                        id,
                                        fname,
                                        lname,
                                        country,
                                        state,
                                        phone,
                                        dob,
                                        created_at,
                                        status,
                                        subscribe,
                                        tag_id,
                                        updated_at
                                    }=sub
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td className="fs-6">{email}</td>
                                            <td className="fs-6">{fname}</td>
                                            <td className="fs-6">{lname}</td>
                                            <td className="fs-6">{country}</td>
                                            <td className="fs-6">{state}</td>
                                            <td className="fs-6">{phone}</td>
                                            <td className="fs-6">{dob}</td>
                                            <td className="fs-6">{tag_id}</td>
                                            <td className="fs-6"> {
                                                new Date(created_at)
                                                .toLocaleString()
                                                }
                                            </td>
                                            <td className="fs-6">{status}</td>
                                            <td className="fs-6">{subscribe}</td>
                                            <td className="fs-6">{
                                                new Date(updated_at)
                                                .toLocaleString()
                                                }
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <button 
                                                        className="btn btn-secondary dropdown-toggle"
                                                        type="button" 
                                                        data-bs-toggle="dropdown" 
                                                        aria-expanded="false" 
                                                    >
                                                        { 
                                                            unsub.deleteStatus === "pending" && (       
                                                            <span 
                                                                className="spinner-border spinner-border-sm me-1" 
                                                                role="status" 
                                                                aria-hidden="true">
                                                            </span> 
                                                            )
                                                        } 
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li
                                                            className="dropdown-item fs-6"
                                                            onClick={()=>dispatch(DeleteUnSubscribers({id}))}
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
                    unsub
                    .unsubscribers?.length === 0 &&(
                        <NoData/>
                    )
                }
            </>
           
        )
}