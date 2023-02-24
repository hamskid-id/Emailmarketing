import { Layout } from "../layoute"
import { InvitesContent } from "./components/invitescontent"

export const InvitesPage=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <InvitesContent/>
                }
            />
        </>
    )
}