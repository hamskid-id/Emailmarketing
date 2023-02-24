import { Layout } from "../layoute";
import { SelectTypeSection } from "./component/selectsection";
export const SelectTypeView =()=>{
    return(
        <>
            <Layout
                routeChildren={<SelectTypeSection/>}
            />
        </>
    )
}