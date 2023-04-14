import { useState } from "react"
import { FaImages, FaTable, FaUserAlt } from "react-icons/fa"
import { GeneralList } from "../../../../components/generalTemplate";
import { MyTemplateList } from "../../../../components/templateList"

export const TemplateView =()=>{
    const [
        activeView,
        SetActiveView
    ]=useState("myList");
    return(
        <div className="pb-3">
            <div className="d-flex align-items-center pb-3 pdx-4 bg-lightBlue pt-3">
                <span className="me-3">
                    <FaTable
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <div className="fs-2">
                    Templates
                </div>
            </div>
            <div className="d-flex wrap justify-content-end pb-3 pdx-4 mb-3 bg-lightBlue">
                <div 
                    className="d-flex align-items-center rounded py-2 px-4 fw-bold fs-5 bg bg-white mrx-5 mbm-2 clickable"
                    onClick={
                        ()=>SetActiveView("myList")
                    }
                >
                    <span className="me-2" >
                        <FaUserAlt
                            color="grey"
                        />
                    </span>
                    <span className="fs-6">
                        My Templates
                    </span>
                </div>
                <div 
                    className="d-flex align-items-center rounded py-2 px-4 fw-bold fs-5 b-gainsboro clickable"
                    onClick={
                        ()=>SetActiveView("general")
                    }
                >
                    <span className="me-2">
                        <FaImages
                            color="grey"
                        />
                    </span>
                    <span className="fs-6">
                        Base Template Gallary
                    </span>
                </div>
            </div>
            <div className="pdx-4">
                {
                    activeView === 'myList'?
                    <MyTemplateList/>:
                    <GeneralList/>
                }
            </div>
        </div>
    )
}
