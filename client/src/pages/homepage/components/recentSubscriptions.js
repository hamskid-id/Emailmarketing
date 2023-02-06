import { FaGg } from "react-icons/fa";
export const RecentSubscriptions=({
    list
})=>{
    return(
        <div className='me-4'>
            <div className="d-flex align-items-center">
                <span className='me-3'>
                    <FaGg/>
                </span>
                <span className='fs-4 fw-bold'>
                    Recent subscriptions
                </span>
            </div>
            <div className='mb-3'>
                 Active users who recently subscribed or were added by system administrator.
                Visit Subscriptions Management Dashboard to see the full list
            </div>
            <div className="w-overflow">
                <table className=" table table-bordered table-responsive caption-top mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((item,index)=>{
                                const{
                                    email,
                                    fname,
                                    lname
                                } =item
                                return(                               
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>
                                            <h6>{email}</h6>
                                        </td>
                                        <td>
                                            <h6>{fname}</h6>
                                            <h6>{lname}</h6>
                                            
                                        </td>
                                        <td className="text-success">visit account</td>
                                    </tr>                                   
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}