import { useRef } from "react"
import { FaUserFriends } from "react-icons/fa"
import { CollaboratorForm } from "../collabcomponent/collaboratorForm"
import { InvitesContainer } from "./invitesTable"
import { Tablelayout } from "../tableContentLayout"


export const InvitesContent =()=>{
    const hidemodal = useRef(null);
    return(
        <>
            <Tablelayout
                hidemodal={hidemodal}
                title="Invitations"
                titleIcon={
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                }
                tableContainer={<InvitesContainer/>}
                modalBody={                  
                    <CollaboratorForm
                        hidemodal={hidemodal}
                    />
                }
                modalTitle="Invite Collaborators"
            />
        </>
    )
}