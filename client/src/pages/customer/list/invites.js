import { Layout } from "../layoute"
import { InvitesContent } from "./components/invitecomponent/invitescontent"

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