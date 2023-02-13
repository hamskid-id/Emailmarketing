import { ActivitiesLog } from "./activities"
import { CreditWrapper } from "./credit"
import { RecentlySent } from "./recently"
import { Subscribers } from "./subscriber"

export const HomeView =()=>{
    return(
        <div className="py-3">
            <p 
                className="fs-1"
            >
                Hello, Jolie Kennedy!
            </p>
            <h5>Welcome back to your account dashboard.</h5>
            <h5>Check out your email campaigns' performance statistics and personalized tips from our insight reports.</h5>
            <div>
                <CreditWrapper/>
            </div>
            <div>
                <RecentlySent/>
            </div>
            <div>
                <Subscribers/>
            </div>
            <div>
                <ActivitiesLog/>
            </div>
        </div>
    )
}