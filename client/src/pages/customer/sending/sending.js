import { Layout } from "../layoute"
import { SendingDomain } from "./components/sendingcomponent/sendingcontent"

export const SendingDomainPage=()=>{
    return(
        <Layout routeChildren={<SendingDomain/>}/>
    )
}