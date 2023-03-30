import { FaWater } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const AutoTable =()=>{
    const navigate = useNavigate()
    return(
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                <thead>
                    <tr>
                        {
                            ["#","Name","Action Time","Subscribers","Email","Complete","Last Updated","Status","Actions"]
                            .map((tableHead,index)=><th scope="col" key={index}>{tableHead}</th>)
                        }
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
                                    <span onClick={
                                        ()=>navigate("/automations/design")
                                        }
                                    >
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