import { Layout } from "../layoute"
import { ListContent } from "./components/listcontent"

export const ListsPage=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <ListContent/>
                }
            />
        </>
    )
}