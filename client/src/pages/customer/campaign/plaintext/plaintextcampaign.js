import { Layout } from "../../layoute"
import { Content } from "./content"

export const Plaintext=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <Content/>
                }
            />
        </>
    )
}