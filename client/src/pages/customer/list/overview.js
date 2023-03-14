import { Layout } from "../layoute"
import { ListOverview } from "./components/overviewcomponent/overContent"

export const OverviewsPage=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <ListOverview/>
                }
            />
        </>
    )
}