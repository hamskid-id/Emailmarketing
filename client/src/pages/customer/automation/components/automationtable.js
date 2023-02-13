import { FaWater } from "react-icons/fa"

export const AutoTable =()=>{
    return(
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action Time</th>
                        <th scope="col">Subscribers</th>
                        <th scope="col">Emails</th>
                        <th scope="col">Complete</th>
                        <th scope="col">Last Updated</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <th scope="row">1</th>
                        <td>New Sales Automation for VIP</td>
                        <td>Trigger when new subscriber opts in</td>
                        <td>194</td>
                        <td>5</td>
                        <td>45%</td>
                        <td>1 year Ago</td>
                        <td>Paused</td>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center me-2 text-white bg bg-success rounded p-2">
                                    <span className="me-1">
                                        <FaWater/>
                                    </span>
                                    <span>
                                        Design
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
                                            Enable
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