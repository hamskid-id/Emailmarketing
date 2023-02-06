import { FaGg } from "react-icons/fa";
export const RecentCollaborations=({
    list
})=>{
    return(
        <div>
            <div className="d-flex align-items-center">
                <span className='me-3'>
                    <FaGg/>
                </span>
                <span className='fw-bold fs-4'>
                    Recent Collaborations
                </span>
            </div>
            <div className='mb-3'>
                Users that has being invited for collaborations during the last period.
            </div>
            <div className="w-overflow">
                <table className=" table table-bordered table-responsive caption-top mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Inviters</th>
                            <th scope="col">CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((item,index)=>{
                                const{
                                    createdAt,
                                    fname
                                } =item
                                return(                               
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>
                                            <h6>{fname}</h6>
                                        </td>
                                        <td 
                                            className=" d-flex flex-column"
                                        >
                                            <h6>
                                                {createdAt}
                                            </h6>
                                            <h6>
                                                Created At 
                                            </h6>
                                        </td>
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