import { Audygrowth } from "../usersListcompoment/audygrowth"
import { QuickActions } from "./quickaction"
import { SubscriberStat } from "./statbox"

export const ListOverview =()=>{
    return(
        <div>
            <div className="bg-lightBlue pdx-4 pb-3">
                <p className="fs-2">
                    Manage your audience
                </p>
                <h6 className="fs-6">
                    Your audience is where you'll store and manage your subscribers.
                </h6>
                <h6 className="fs-6 mb-4">
                    Once you add your subscribers, you'll be able to send your first campaign. We'll work you through the process.
                </h6>
                <SubscriberStat/>
            </div>
            <div className="pdx-4">
                <Audygrowth/>
                <QuickActions/>
            </div>
        </div>
    )
}