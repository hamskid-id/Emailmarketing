import { useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../../components/spinner/spinner";
import { GetBlacklist } from "../../../../../store/BlacklistedSlice";
import { Actions } from "./blacklistaction";

export const BlacklistTable =()=>{
    const blacklist = useSelector(
        state => state.blacklist
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetBlacklist(null));
    },[dispatch])

    if(blacklist.GetBlacklistStatus ==='pending'){
        return <Spinner/>
    }
    return(
        <>
        <Actions/>
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blacklist.blacklist?.map((list,index)=>{
                                const{
                                    email,
                                    created_at
                                } = list
                                return(
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{email}</td>
                                        <td>{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
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
                                                            Remove
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
           blacklist.blacklist.length === 0 &&(
                <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5 px-2">
                    <FaCartArrowDown
                        size="7rem"
                        color="grey"
                    />
                    <p className="fw-bold">
                        Blacklist is empty!
                    </p>
                </div>
            )
        }
        </>
    )
}