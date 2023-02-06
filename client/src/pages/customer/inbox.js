import { Inboxes } from "./inboxview"
import { Layout } from "./layoute"
export const Inbox =()=>{
    return(
        <>
            <Layout
                routeChildren={<Inboxes/>}
                name="Notifications"
            />
        </>
    )
}