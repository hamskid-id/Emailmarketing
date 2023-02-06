import { Layout } from "../layoute"
import { SubsrcibersContent } from "./components/subscribercontent"

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
