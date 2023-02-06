import { FaSlidersH } from "react-icons/fa"
import { Modal } from "../../../../components/modal/modal"
import { CollaboratorForm } from "./collaboratorForm"
import { CollabContainer } from "./collaboratorstable"
import { CreateTag } from "./tagsmodalcontent"
import { TagContainer } from "./tagstable"

export const CollabContent =()=>{
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1 cl-blue fw-bold">
                    Collaborations
                </div>
            </div>
            <CollabContainer/>
            <Modal
                title="Invite Collaborators"
                body={                  
                    <CollaboratorForm/>
                }
            />
        </>
    )
}