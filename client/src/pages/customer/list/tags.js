import { Layout } from "../layoute"
import { TagsContent } from "./components/tagscontent"

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