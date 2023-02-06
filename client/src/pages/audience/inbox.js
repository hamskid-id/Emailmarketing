import { Layout } from "../layoute"
import { Inboxes } from "./components/inboxview"

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