import { TopPerformance } from "./performance"
import { Rate } from "./rate"
import { Recipients } from "./recipient"
import { Statistics } from "./statistics"

export const Overview=({
    ListSection,
    setListSection
})=>{
    return(
        <>
            <Recipients/>
            <Statistics/>
            <Rate 
                ListSection={ListSection}
                setListSection={setListSection}
            />
            <TopPerformance/>
        </>
    )
}