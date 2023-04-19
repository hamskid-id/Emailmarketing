import {useRef } from "react";
import { FaPencilAlt } from "react-icons/fa";
import {useSelector } from "react-redux";
import Spinner from "../../../../../components/spinner/spinner";
import { HandleDownloadPdf } from "../../../campaign/statistics.js/components/download";
import { Actions } from "./unsubaction";
import { NoData } from "../../../../../components/nodata";

export const UnSubContainer =()=>{
    
    const printRef = useRef(null);
    const unsub = useSelector(
        state => state.unsubscriber
    )
    if(unsub.GetUnSubscribersStatus ==='pending'){
        return <Spinner/>
    }
        return(
            <>
            <Actions
                HandleDownloadPdf={HandleDownloadPdf}
                printRef={printRef}
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
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            unsub
                                .unsubscribers?.map((sub,index)=>{
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
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-flex align-items-center me-2 text-white bg bg-success rounded p-2">
                                                        <span className="me-1">
                                                            <FaPencilAlt/>
                                                        </span>
                                                        <span>
                                                            Edit
                                                        </span>
                                                    </div>
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
                                                            >
                                                                Delete
                                                            </li>
                                                        </ul>
                                                    </div>
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