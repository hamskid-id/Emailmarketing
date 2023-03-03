import { Layout } from "../layoute"
import { ImportBlacklist } from "./components/blacklistcomponent/importblacklistfile"

export const ImportBlacklistPage=()=>{
    return(
        <Layout routeChildren={<ImportBlacklist/>}/>
    )
}