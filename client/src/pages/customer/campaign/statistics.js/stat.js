import { Layout } from "../../layoute"
import { CampaignStatisticsContent } from "./components/statcontent"

export const CampaignStatistics =()=>{
    return(
        <>
            <Layout
                routeChildren={<CampaignStatisticsContent/>}
            />
        </>
    )
}