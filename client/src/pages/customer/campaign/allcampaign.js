import { Layout } from "../layoute";
import "./campaign.css";
import { AllCampaignComponent } from "./component/allCampaignComoponent";
export const AllCampaign =()=>{
    return(
        <>
            <Layout
                routeChildren={ <AllCampaignComponent/>  }
            />
        </>
    )
}