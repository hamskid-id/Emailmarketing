import { Layout } from "../layoute";
import "./campaign.css";
import { CampaignStatus } from "./component/campainStatus";

export const AllSentCampaign =()=>{
    return(
        <>
            <Layout
                routeChildren={<CampaignStatus/>}
            />
        </>
    )
}