import {FaRegClone, FaUserCircle } from "react-icons/fa"
import { useSelector } from "react-redux";
import { Audygrowth } from "../../list/components/usersListcompoment/audygrowth";

export const ActivitiesLog =()=>{
    const  activities = useSelector(
        state => state.activities
    )
    const auth = useSelector(
        state => state.auth
    )
    return(
        <div className="row">
            <div className="col-md-6">
                <Audygrowth/>
            </div>
            <div className="col-md-6">
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaRegClone
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                    Activity log
                </h2>
            </div>
            <div>
                {
                    activities.activities?.length ===0?(
                        <p className="fs-5 text-center c-grey">Your activities log is empty</p>
                    ) :(
                        <div className="mb-2 h5-overflow mt-3 py-1">
                        {
                            activities.activities?.map((active,index)=>{
                                const{
                                    action,
                                    created_at
                                }=active
                                return(
                                    <div
                                        key={index} 
                                        className="row align-items-center">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-column align-items-start py-2 px-3 my-1 bg bg-white wrap">
                                                <FaUserCircle  
                                                    size="1.5rem"
                                                    color="gainsboro"
                                                    className="mb-3"
                                                />
                                                <h3 className="fs-6 break">
                                                    {action}
                                                </h3>
                                                <p className="fs-6">
                                                    {
                                                        new Date(created_at)
                                                            .toLocaleString()
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    )
                }
            </div>
            </div>
        </div>
    )
}