import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Actions } from "../../../../../components/actions";
import Spinner from "../../../../../components/spinner/spinner";
import { DeleteTags, Tag_SliceActions } from "../../../../../store/tagSlice";
import { NoData } from "../../../../../components/nodata";

export const TagContainer =()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tag = useSelector(
        state => state.tag
    )

    if(tag.GetTagsStatus ==='pending' || tag.deleteStatus === "pending"){
        return <Spinner/>
    }

    const handleSelectChange=(e)=>{
        if(e.target.value ==="Name"){
            dispatch(Tag_SliceActions.sortDataByName())
        }else{
            dispatch(Tag_SliceActions.sortDataByCreatedAt())
        }
    }

    const handleInputChange=(e)=>{
        dispatch(Tag_SliceActions.searchdata(e.target.value))
    }

    return(
        <>
        <Actions
            actionName="Add Tag"
            handleChange={handleSelectChange}
            handleInputChange={handleInputChange}
        />
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tag
                            .Tags?.map((tag,index)=>{
                                const{
                                    name,
                                    updated_at,
                                    created_at,
                                    id
                                } = tag
                                return(
                                    <tr key={index}>
                                        <th scope="row" className="fs-6">{index+1}</th>
                                        <td className="fs-6">{name}</td>
                                        <td className="fs-6">{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                        </td>
                                        <td className="fs-6">{
                                                new Date(updated_at)
                                                .toLocaleString()
                                            }</td>
                                        <td className="fs-6">
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
                                                            className="dropdown-item fs-6"
                                                            onClick={()=>navigate(`/user/tag/update/${id}`)}
                                                        >
                                                           Update
                                                        </li>
                                                        <li
                                                            className="dropdown-item fs-6"
                                                            onClick={()=>dispatch(DeleteTags({id}))}
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
            tag
            .Tags.length === 0 && <NoData/>
        }
        </>
    )
}