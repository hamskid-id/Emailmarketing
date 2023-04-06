import { useRef } from "react"
import { FaUserFriends } from "react-icons/fa"
import { Modal } from "../../../../../components/modal/modal"
import { CollaboratorForm } from "../collabcomponent/collaboratorForm"
import { InvitesContainer } from "./invitesTable"


export const InvitesContent =()=>{
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
                    Invitations
                </div>
            </div>
            <InvitesContainer/>
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