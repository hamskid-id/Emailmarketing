import { Layout } from "../layoute"
import { SubsrcibersContent } from "./components/subscribercomponent/subscribercontent"

export const SubscribersPage =()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <SubsrcibersContent/>
                }
            />
        </>
    )
}
