import { Layout } from "../layoute"
import { TrackingDomain } from "./components/trackingcomponent/trackincontent"
export const TrackingDomainPage=()=>{
    return(
        <Layout routeChildren={<TrackingDomain/>}/>
    )
}