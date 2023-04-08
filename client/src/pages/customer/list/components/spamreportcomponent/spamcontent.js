import { FaUserFriends } from "react-icons/fa"
import { CreateSpam } from "./spamform"
import { SpamContainer } from "./spamtable"
import { Tablelayout } from "../tableContentLayout"
import { useRef } from "react"

export const SpamsContent =()=>{
    const hidemodal = useRef(null);
    return(
        <>
            <Tablelayout
                hidemodal={hidemodal}
                title="Spams Reported"
                titleIcon={
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                }
                tableContainer={<SpamContainer/>}
                modalBody={                  
                    <CreateSpam
                        hidemodal={hidemodal}
                    />
                }
                modalTitle="Report Spam"
            />
        </>
    )
}