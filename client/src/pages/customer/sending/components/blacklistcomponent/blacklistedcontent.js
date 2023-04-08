import {FaUserFriends } from "react-icons/fa"
import { BlacklistTable } from "./blacklistedtable"
import { AddBlacklist } from "./blacklistform"
import { Tablelayout } from "../../../list/components/tableContentLayout"
import { useRef } from "react"

export const BlacklistContent =()=>{
    const hidemodal = useRef(null);
    return(
        <>
            <Tablelayout
                hidemodal={hidemodal}
                title="Blacklist"
                titleIcon={
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                }
                tableContainer={<BlacklistTable/>}
                modalBody={                  
                    <AddBlacklist
                        hidemodal={hidemodal}
                    />
                }
                modalTitle="Add to blacklist"
            />
        </>
    )
}