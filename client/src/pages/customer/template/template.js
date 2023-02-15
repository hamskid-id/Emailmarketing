import { Layout } from "../layoute";
import { TemplateView } from "./components/view";
export const TemplateList =()=>{
    return(
        <>
            <Layout
                routeChildren={ <TemplateView/>  }
            />
        </>
    )
}