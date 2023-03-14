import { Layout } from "../layoute"
import { ListContent } from "./components/usersListcompoment/listcontent"

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