import { FaTags } from "react-icons/fa"
import { TagContainer } from "./tagstable"
import { UpdateTagForm } from "./updatetagform"

export const UpdateTagsContent =()=>{
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaTags
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Update Tag
                </div>
            </div>
            <UpdateTagForm/>
        </>
    )
}