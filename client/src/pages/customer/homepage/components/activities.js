import {FaRegClone, FaUserCircle } from "react-icons/fa"
import { useSelector } from "react-redux";

export const ActivitiesLog =()=>{
    const  activities = useSelector(
        state => state.activities
    )
    const auth = useSelector(
        state => state.auth
    )
    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaRegClone
                        size="1.5rem"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                    Activity log
                </h2>
            </div>
            <div className="mb-2 h5-overflow">
                {
                    activities.activities?.map((active,index)=>{
                        const{
                            action,
                            created_at
                        }=active
                        return(
                            <div
                                key={index} 
                                className="row align-items-center mb-3">
                                <div className="col-md-12">
                                    <div className="d-flex flex-row align-items-center justify-content-between border rounded p-2 wrap">
                                        <span className="d-flex flex-column">
                                            <h3 className="fw-bold fs-6">
                                                {auth.userdata?.user?.name}
                                            </h3>
                                            <h3 className="fs-6 break">
                                               {action}
                                            </h3>
                                        </span>
                                        <span className="fs-6">
                                            {
                                                new Date(created_at)
                                                    .toLocaleString()
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div>
                {
                    activities.activities?.length ===0 && <p className="fs-5 text-center c-grey">Your activities log is empty</p>
                }</div>
        </>
    )
}