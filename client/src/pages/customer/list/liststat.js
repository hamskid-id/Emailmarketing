import { Layout } from "../layoute"
import { ListOverView } from "./components/usersListcompoment/liststatcontent"

export const ListOverViewPage=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <ListOverView/>
                }
            />
        </>
    )
}