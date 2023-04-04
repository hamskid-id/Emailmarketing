import { useSelector } from "react-redux"
import { Rate } from "../../campaign/statistics.js/components/rate"
import { SubscriberStat } from "../../list/components/overviewcomponent/statbox"
import { ActivitiesLog } from "./activities"
import { CreditWrapper } from "./credit"
import { RecentlySent } from "./recentlysentcampaign"
import { Subscribers } from "./subscriber"

export const HomeView =()=>{
    const auth = useSelector(
        state => state.auth
    )
    return(
        <div className="pb-3">
            <p 
                className="fs-2"
            >
                Hello, {auth.userdata?.user?.name}!
            </p>
            <h5 className="fs-6">Welcome back to your account dashboard.</h5>
            <h5 className="fs-6">Check out your email campaigns' performance statistics and personalized tips from our insight reports.</h5>
            <SubscriberStat/>
            <CreditWrapper/>
            <RecentlySent/>
            <Subscribers/>
            <Rate/>
            <ActivitiesLog/>
        </div>
    )
}