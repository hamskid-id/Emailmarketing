import { useEffect } from "react";
import { FaCartArrowDown, FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../../components/spinner/spinner";
import { GetInviteForCollaborations, collab_SliceActions } from "../../../../../store/collaborationSlice";
import { Actions } from "../invitecomponent/collabAction";

export const CollabContainer =()=>{
    const collab = useSelector(
        state => state.collab
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetInviteForCollaborations(null));
    },[dispatch])

    const handleInputChange=(e)=>{
        dispatch(collab_SliceActions.searchdata({
            type:"collab",
            data:e.target.value
        }))
    }

    if(collab.GetInviteForCollaborationsStatus ==='pending'){
        return <Spinner/>
    }

    return(
        <>
        <Actions
            handleInputChange={handleInputChange}
        />
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Who has invited you for collaborations</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        collab.inviteForCollaborations?.map(
                            (collaboration,index)=>{
                            const{
                                name,
                                createdAt
                            }= collaboration
                        
                            return(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{name}</td>
                                    <td>{createdAt}</td>
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
                                                        Visit Account
                                                    </li>
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
            collab
            .inviteForCollaborations?.length === 0 &&(
                <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5 px-2">
                    <FaCartArrowDown
                        color="grey"
                        size="7rem"
                    />
                    <p className="fw-bold">
                        No one has invited you
                    </p>
                </div>
            )
        }
        </>
    )
}