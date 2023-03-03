import { Layout } from "../layoute"
import { BlacklistContent } from "./components/blacklistcomponent/blacklistedcontent"

export const BlacklistPage=()=>{
    return(
        <Layout routeChildren={<BlacklistContent/>}/>
    )
}