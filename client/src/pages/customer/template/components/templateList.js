import { FaPencilAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { Actions } from "./actions"

export const MyTemplateList =()=>{
    const navigate = useNavigate();
    return(
        <>
            <Actions/>
            <div className="w-overflow">
                <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Thumbnail</th>
                            <th scope="col">Name</th>
                            <th scope="col">Created By</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <img 
                                    src="https://res.cloudinary.com/hamskid/image/upload/v1675956824/thumb_vwan34.png"
                                    alt="object not found"
                                    className="thumb rounded"
                                />
                            </td>
                            <td>Untitled template</td>
                            <td>Jolie Kennedy</td>
                            <td>2021-08-26 11:19</td>
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
                                                Change Name
                                            </li>
                                            <li 
                                                className="dropdown-item"
                                                onClick={
                                                    ()=>navigate("/create/template")
                                                }
                                            >
                                                Preview
                                            </li>
                                            <li 
                                                className="dropdown-item"
                                            >
                                                Change Thumbnail
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
                    </tbody>
                </table>

            </div>
            
        </>
    )
}