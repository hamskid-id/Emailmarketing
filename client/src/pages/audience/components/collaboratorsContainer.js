import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetInviteForCollaborations } from "../../../store/collaborationSlice";
export const CollabContainer =()=>{
    const collab = useSelector(
        state => state.collab
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetInviteForCollaborations(null));
    },[dispatch])

    return(
        <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
            {
                collab
                    .inviteForCollaborations?.length >0?(
                            <caption>Collaborations</caption>
                        ):(
                            <caption>No Account have invited you to Collaborate with them!!</caption>
                        )
            }
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
                                <th scope="row">{index}</th>
                                <td>{name}</td>
                                <td>{createdAt}</td>
                                <td className="text-success">visit account</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}