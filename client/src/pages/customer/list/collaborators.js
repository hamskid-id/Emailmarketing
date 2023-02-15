import { Layout } from "../layoute"
import { CollabContent } from "./components/collaboratorscontent"

export const CollabsPage=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <CollabContent/>
                }
            />
        </>
    )
}