import { Layout } from "../layoute"
import { UpdateTagsContent } from "./components/tagcomponent/updatetagcontent"

export const UpdateTagPage =()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <UpdateTagsContent/>
                }
            />
        </>
    )
}