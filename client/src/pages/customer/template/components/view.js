import { useState } from "react"
import {AiOutlineLayout} from "react-icons/ai";
import { FaImages, FaUserAlt } from "react-icons/fa"
import { GeneralList } from "../../../../components/generalTemplateList";
import { MyTemplateList } from "../../../../components/usersTemplateList"

export const TemplateView =()=>{
    const [
        activeView,
        SetActiveView
    ]=useState("myList");
    return(
        <div className="pb-3">
            <div className="d-flex align-items-center pb-3 pdx-4 bg-lightBlue pt-3">
                <span className="me-3">
                    <AiOutlineLayout
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <div className="fs-4">
                    Templates
                </div>
            </div>
            <div className="d-flex wrap justify-content-end pb-3 pdx-4 mb-3 bg-lightBlue">
                <div 
                    className="d-flex align-items-center rounded btn fw-bold bg bg-white mrx-5 mbm-2 clickable"
                    onClick={
                        ()=>SetActiveView("myList")
                    }
                >
                    <span className="me-2" >
                        <FaUserAlt
                            color="grey"
                        />
                    </span>
                    <span>
                        My Templates
                    </span>
                </div>
                <div 
                    className="d-flex align-items-center rounded btn fw-bold b-gainsboro clickable"
                    onClick={
                        ()=>SetActiveView("general")
                    }
                >
                    <span className="me-2">
                        <FaImages
                            color="grey"
                        />
                    </span>
                    <span>
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
