import { useSelector } from "react-redux"
import { Rate } from "../../campaign/statistics.js/components/rate"
import { SubscriberStat } from "../../list/components/overviewcomponent/statbox"
import { ActivitiesLog } from "./activities"
import { CreditWrapper } from "./credit"
import { RecentlySent } from "./recentlysentcampaign"
import { Subscribers } from "./subscriber"
import axios from "axios"
import { useState } from "react"
import { apiBaseUrl } from "../../../../store/api"
import { toast } from "react-toastify"
import Spinner from "../../../../components/spinner/spinner"

export const HomeView =()=>{
    const auth = useSelector(
        state => state.auth
    )
    
    return(
        <div>
            <div className="bg-lightBlue pt-2 pb-3 pdx-4">
                <h6
                    className="fw-bold"
                >
                    Hello, {auth.userdata?.user?.name}!
                </h6>
                <h5 className="fs-6">Welcome back to your account dashboard.</h5>
                <h5 className="fs-6">Check out your email campaigns' performance statistics and personalized tips from our insight reports.</h5>
                <SubscriberStat/>
            </div>
            <div className="pdx-4">
                <CreditWrapper/>
                <RecentlySent/>
            </div>
            
            <div className="pdx-4 bg-lightBlue py-2">
                <Subscribers/>
            </div>
            <div className="pdx-4">
                <Rate/>
            </div>
            <div className="pdx-4 py-2">
                <ActivitiesLog/>
            </div>
        </div>
    )
}