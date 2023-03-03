import { FaTags } from "react-icons/fa"
import { Modal } from "../../../../../components/modal/modal"
import { CreateTag } from "./tagsmodalcontent"
import { TagContainer } from "./tagstable"

export const TagsContent =()=>{
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaTags
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Tags
                </div>
            </div>
            <TagContainer/>
            <Modal
                title="Add Tag"
                body={                  
                    <CreateTag/>
                }
            />
        </>
    )
}