import { Layout } from "../layoute"
import { ListOverView } from "./components/liststatcontent"

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