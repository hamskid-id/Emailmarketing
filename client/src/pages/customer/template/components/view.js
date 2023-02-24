import { useState } from "react"
import { FaImages, FaSlidersH, FaUserAlt } from "react-icons/fa"
import { GeneralList } from "./generalTemplate";
import { MyTemplateList } from "./templateList"

export const TemplateView =()=>{
    const [
        activeView,
        SetActiveView
    ]=useState("myList");
    return(
        <div className="py-3">
            <div className="d-flex align-items-center mb-3">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Templates
                </div>
            </div>
            <div className="d-flex wrap justify-content-end mb-5">
                <div 
                    className="d-flex align-items-center rounded py-2 px-4 fw-bold fs-5 border-drakslate-grey mrx-5 mbm-2"
                    onClick={
                        ()=>SetActiveView("myList")
                    }
                >
                    <span className="me-2" >
                        <FaUserAlt/>
                    </span>
                    <span className="fs-6">
                        My Templates
                    </span>
                </div>
                <div 
                    className="d-flex align-items-center rounded py-2 px-4 fw-bold fs-5 b-gainsboro"
                    onClick={
                        ()=>SetActiveView("general")
                    }
                >
                    <span className="me-2">
                        <FaImages/>
                    </span>
                    <span className="fs-6">
                        Base Template Gallary
                    </span>
                </div>
            </div>
            <div>
                {
                    activeView === 'myList'?
                    <MyTemplateList/>:
                    <GeneralList/>
                }
            </div>
        </div>
    )
}
