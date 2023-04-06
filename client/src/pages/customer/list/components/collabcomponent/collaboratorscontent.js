import { FaUserFriends } from "react-icons/fa"
import { Modal } from "../../../../../components/modal/modal"
import { CollaboratorForm } from "./collaboratorForm"
import { CollabContainer } from "./collaboratorstable"
import { CreateTag } from "../tagcomponent/tagsmodalcontent"
import { TagContainer } from "../tagcomponent/tagstable"
import { useRef } from "react"

export const CollabContent =()=>{
    const hidemodal = useRef(null);
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <div className="fs-2">
                    Collaborations
                </div>
            </div>
            <CollabContainer/>
            <Modal
                title="Invite Collaborators"
                body={                  
                    <CollaboratorForm
                    hidemodal={hidemodal}
                    />
                }
                hidemodal={hidemodal}
            />
        </>
    )
}