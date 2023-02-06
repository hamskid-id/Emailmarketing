import { BasicContainer } from "./components/basic"
import { FeaturedContainer } from "./components/featured"
import { Nav } from "./components/nav"

export const TemplatesContainer =()=>{
    return(
        <>
            <Nav/>
            <div className="container py-5">
                <p className="display-6">
                    Select a template
                </p>
                <FeaturedContainer/>
                <BasicContainer/>
            </div>
            
        </>
    )
}