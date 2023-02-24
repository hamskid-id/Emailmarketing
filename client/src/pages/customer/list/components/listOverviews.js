import { IndividualListGrowth } from "./individualListGrowth"
import { IndividualListStat } from "./individualListStat"
import { ListPerformance } from "./listperformance"

export const IndividualListOverView=()=>{
    return(
        <>
            <ListPerformance/>
            <IndividualListStat/>
            <IndividualListGrowth/>
        </>
    )
}