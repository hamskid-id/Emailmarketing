import { Layout } from "../layoute"
import { ImportBlacklist } from "./components/importblacklistfile"

export const ImportBlacklistPage=()=>{
    return(
        <Layout routeChildren={<ImportBlacklist/>}/>
    )
}