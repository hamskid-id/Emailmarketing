
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Actions } from "../../../../../components/actions";
import Spinner from "../../../../../components/spinner/spinner";

export const TagContainer =()=>{
    const navigate = useNavigate()
    const tag = useSelector(
        state => state.tag
    )

    if(tag.GetTagsStatus ==='pending'){
        return <Spinner/>
    }
    return(
        <>
        <Actions
            actionName="Add Tag"
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
                                        <th scope="row">{index}</th>
                                        <td>{name}</td>
                                        <td>{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                        </td>
                                        <td>{
                                                new Date(updated_at)
                                                .toLocaleString()
                                            }</td>
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
                                                            onClick={()=>navigate(`/user/tag/update/${id}`)}
                                                        >
                                                           Update
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
                            }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
       
        {
            tag
            .Tags.length === 0 &&(
                <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5">
                    <FaCartArrowDown
                        size="7rem"
                        color="grey"
                    />
                    <p className="fw-bold">
                        Your Tags List is presently empty
                    </p>
                    <div>
                        Dont worry click on Add tags to get started. 
                    </div>
                </div>
            )
        }
        </>
    )
}