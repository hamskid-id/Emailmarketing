import { Layout } from "../layoute"
import { HomeView } from "./components/homecontent"

export const CustomerHomePage=()=>{
    return(
        <>
            <Layout
                routeChildren={
                    <HomeView/>
                }
                main={true}
            />
        </>
    )
}