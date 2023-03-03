import { Layout } from "../layoute"
import { SpamsContent } from "./components/spamreportcomponent/spamcontent"

export const SpamReportPage =()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <SpamsContent/>
                }
            />
        </>
    )
}