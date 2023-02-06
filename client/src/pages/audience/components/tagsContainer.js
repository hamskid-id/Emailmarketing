import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTags } from "../../../store/tagSlice";

export const TagContainer =()=>{
    const tag = useSelector(
        state => state.tag
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetTags(null));
    },[dispatch])

    return(
        <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                
            {
            tag
            .Tags?.length >0?(
                    <caption>Available Tags</caption>
                ):(
                    <caption>Tag list is empty.Click on Add tags to get started</caption>
                )
            }
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Created At</th>
                </tr>
            </thead>
            <tbody>
                {
                    tag
                        .tags?.map((tag,index)=>{
                            const{
                                name,
                                createdBy,
                                createdAt
                            } = tag
                            return(
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{name}</td>
                                    <td>{createdBy}</td>
                                    <td>{createdAt}</td>
                                </tr>
                            )
                        }
                    )
                }
                
            </tbody>
        </table>
    )
}