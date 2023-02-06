import { Layout } from "../layoute"
import { TagsView } from "./components/tagsview"

export const Tags =()=>{
    return(
        <>
            <Layout
                routeChildren={<TagsView/>}
            />
        </>
    )
    
}