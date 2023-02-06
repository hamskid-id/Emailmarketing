import { FaPencilAlt } from "react-icons/fa"

export const ListTable =()=>{
    return(
        <>
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Subscribers</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <th scope="row">1</th>
                        <td>DB Insurance & Finance customers 2022</td>
                        <td>2017-07-13 03:57</td>
                        <td>1,945</td>
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
                                            Statistics
                                        </li>
                                        <li 
                                            className="dropdown-item"
                                        >
                                            Add subscribers
                                        </li>
                                        <li 
                                            className="dropdown-item"
                                        >
                                            Subscribers
                                        </li>
                                        <li 
                                            className="dropdown-item"
                                        >
                                            Email verification
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
        </>
    )
}