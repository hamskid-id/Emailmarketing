import { Layout } from "../layoute"
import { SubscriberView } from "./components/subscriberview"

export const Subscribers=()=>{
    return(
        <>
            <Layout
                routeChildren={<SubscriberView/>}
            />
        </>
    )
}