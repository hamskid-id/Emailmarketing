import { FaBacon} from "react-icons/fa"
import {useNavigate} from "react-router-dom";

export const ListTable =()=>{
    const navigate = useNavigate()
    return(
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Subscribers</th>
                        <th scope="col">Open rate</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Click rate</th>                       
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <th scope="row">1</th>
                        <td>DB Insurance & Finance customers 2022</td>
                        <td>2017-07-13 03:57</td>
                        <td>1,945</td>
                        <td className="d-flex flex-column">
                            <div className="fs-6 fw-bold">50%</div>
                            <div className="progress">
                                <div 
                                    className="progress-bar bg-primary" 
                                    role="progressbar" 
                                    aria-label="Basic example" 
                                    aria-valuenow={50} 
                                    style={{width:"50%"}}
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                >
                                </div>
                            </div>
                        </td>
                        <td>2021-08-26 11:19</td>
                         <td className="d-flex flex-column">
                            <div className="fs-6 fw-bold">80%</div>
                            <div className="progress">
                                <div 
                                    className="progress-bar bg-primary" 
                                    role="progressbar" 
                                    aria-label="Basic example" 
                                    aria-valuenow={80}
                                    style={{width:"80%"}}
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                >
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <div 
                                    className="d-flex align-items-center me-2 text-white bg bg-success rounded p-2"
                                    onClick={()=>navigate("/Lists/Lists/stat")}>
                                    <span className="me-1">
                                        <FaBacon/>
                                    </span>
                                    <span>
                                        Statistics
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
        </div>
    )
}