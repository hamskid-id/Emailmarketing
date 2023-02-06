import { Layout } from "../layoute"
import { ListOverview } from "./components/overContent"

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