import { Layout } from "../layoute"
import { TagsContent } from "./components/tagcomponent/tagscontent"

export const TagsPage =()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <TagsContent/>
                }
            />
        </>
    )
}