import { Layout } from "../layoute";
import { HomeContent } from "./components/homeContent";

export const HomePage=()=>{
    return(
        <>
            <Layout 
                routeChildren={
                    <HomeContent/>
                }
                name="Dashboard"
            />
        </>
    )
}