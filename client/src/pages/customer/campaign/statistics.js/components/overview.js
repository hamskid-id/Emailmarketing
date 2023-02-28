import { TopPerformance } from "./performance"
import { Rate } from "./rate"
import { Recipients } from "./recipient"
import { Statistics } from "./statistics"

export const Overview=({
    setListSection
})=>{
    return(
        <>
            <Recipients/>
            <Statistics
                setListSection={setListSection}
            />
            <Rate 
                setListSection={setListSection}
            />
            <TopPerformance/>
        </>
    )
}