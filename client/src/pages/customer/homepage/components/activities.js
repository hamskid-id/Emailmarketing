import {FaRegClone, FaUserCircle } from "react-icons/fa"
import { useSelector } from "react-redux";
import { CamapaignMetrics } from "./ststistics";

export const ActivitiesLog =()=>{
    const  activities = useSelector(
        state => state.activities
    )
    return(
        <div className="row">
            <div className="col-md-6">
                <CamapaignMetrics/>
            </div>
            <div className="col-md-6">
            <div className="d-flex align-items-center mt-3 mb-0">
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
            <div className="py-3">
                {
                    activities.activities?.length ===0?(
                        <p className="fs-6 text-center c-grey">Your activities log is empty</p>
                    ) :(
                        <div className="mb-2 h5-overflow pb-1">
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
                                            <div className="d-flex flex-column align-items-start pt-2 px-3 my-1 bg bg-white wrap">
                                                <FaUserCircle  
                                                    size="1.5rem"
                                                    color="#3B3C36"
                                                    className="mb-3"
                                                />
                                                <h3 className="c-dark-volin break p-3 rounded fw-bold bg-lightBlue activityaction text-dark">
                                                    {action}
                                                </h3>
                                                <p className="fw-bold c-dark-volin log text-dark">
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