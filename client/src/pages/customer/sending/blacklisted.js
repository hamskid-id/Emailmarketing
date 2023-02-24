import { Layout } from "../layoute"
import { BlacklistContent } from "./components/blacklistedcontent"

export const BlacklistPage=()=>{
    return(
        <Layout routeChildren={<BlacklistContent/>}/>
    )
}