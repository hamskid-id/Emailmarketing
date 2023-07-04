import { FaUserFriends } from "react-icons/fa"
import { CollaboratorForm } from "./collaboratorForm"
import { CollabContainer } from "./collaboratorstable"
import { useRef } from "react"
import { Tablelayout } from "../tableContentLayout"

export const CollabContent =()=>{
    const hidemodal = useRef(null);
    return(
        <>
            <Tablelayout
                hidemodal={hidemodal}
                title="Collaborations"
                titleIcon={
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                }
                tableContainer={<CollabContainer/>}
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