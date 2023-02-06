import {FaHandshake } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ChartStat } from "./chart";
import { RecentCollaborations } from "./recentcollaborations";
import { RecentSubscriptions } from "./recentSubscriptions";
import { ResourceStatistics } from "./resourceStatistic";
import { StatBox } from "./statbox";

export const HomeContent =()=>{
    const navigate = useNavigate();
    return(
        <>
            <div className=" pt-7 mt-5">
                <div className=" mb-2">
                    <div className="pde-5 pb-5">
                        <p className="fs-5">
                            Welcome back to admin dashboard. Check out these system statistics and notifications from our insight reports.
                        </p>
                        {/* <div className="feed-section rounded bg bg-white">
                            <div className="wt-75">
                                <p className="fs-5">
                                    This section is your feed. Your most important marketing activity will show up here.
                                </p>
                                <p className="fs-6">
                                    Once your campaign is underway, things will look a lot more exciting.
                                </p>
                                <button 
                                    className="btn border border-success bg bg-white"
                                    onClick={
                                        ()=>navigate("/campaigns/All campaigns")
                                    }
                                    >
                                    Create a campaign
                                </button>
                            </div>
                        </div> */}
                        <StatBox/>
                    </div>
                    <ChartStat/>
                </div>
            </div>
            <div className="row pdx-6">
                <div className="col-md-6">
                    <RecentSubscriptions
                        list={[
                            {
                                email:"lawal@gmail.com",
                                fname:"lawal",
                                lname:"Hamzat"
                            }
                        ]}
                    />
                </div>
                <div className="col-md-6">
                    <RecentCollaborations
                    list={[
                        {
                            createdAt:"21 Feb 2001",
                            fname:"Mke Ayo"
                        }
                    ]}/>
                </div>
            </div>
            {/* <div className="pdx-6">
                <ResourceStatistics/>
            </div> */}
            <div className="pdx-6">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        You've reached the end of the feed!
                    </div>
                    <FaHandshake
                        size="3rem"
                    />
                </div>
            </div>
        </>
    )
}