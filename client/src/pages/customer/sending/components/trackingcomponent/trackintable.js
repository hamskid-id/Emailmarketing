// import { useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../../../components/actions";

export const TrackingTable =()=>{
    // const tag = useSelector(
    //     state => state.tag
    // )
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(GetTags(null));
    // },[dispatch])

    // if(tag.GetTagsStatus ==='pending'){
    //     return <Spinner/>
    // }
    return(
        <>
        <Actions
            actionName="New Tracking Domain"
        />
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Domain verification</th>
                        <th scope="col">DKIM verification</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        []?.map((tag,index)=>{
                                const{
                                    name,
                                    dveri,
                                    DKIMveri,
                                    status,
                                    created_at
                                } = tag
                                return(
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{name}</td>
                                        <td>{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                        </td>
                                        <td>{dveri}</td>
                                        <td>{DKIMveri}</td>
                                        <td>{status}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex align-items-center me-2 text-white bg bg-success rounded p-2">
                                                    <span>
                                                        View
                                                    </span>
                                                </div>
                                                <div className="dropdown">
                                                    <button 
                                                        className="btn btn-secondary dropdown-toggle" 
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
                            }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
       
        {
           [].length === 0 &&(
                <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5">
                    <FaCartArrowDown
                        size="7rem"
                        color="grey"
                    />
                    <p className="fw-bold">
                        Your Tracking Domain is presently empty
                    </p>
                </div>
            )
        }
        </>
    )
}