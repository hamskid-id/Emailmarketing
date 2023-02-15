import { Layout } from "../layoute"
import { AutoContent } from "./components/automationcotent"

export const AutoPage=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <AutoContent/>
                }
            />
        </>
    )
}