import { Layout } from "../layoute"
import { SendingDomain } from "./components/sendingcontent"

export const SendingDomainPage=()=>{
    return(
        <Layout routeChildren={<SendingDomain/>}/>
    )
}