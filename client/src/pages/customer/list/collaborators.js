import { Layout } from "../layoute"
import { CollabContent } from "./components/collabcomponent/collaboratorscontent"

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