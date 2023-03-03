import { Layout } from "../layoute"
import { UnSubsrcibedContent } from "./components/unsubscribecomponent/unsubcontent"

export const UnSubsrcibedPage =()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <UnSubsrcibedContent/>
                }
            />
        </>
    )
}