import {FaUserFriends } from "react-icons/fa"
import { UnSubContainer } from "./unsubtable"
import { Tablelayout } from "../tableContentLayout"

export const UnSubsrcibedContent =()=>{
    return(
        <>
            <Tablelayout
                title="Unsubscribed"
                titleIcon={
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                }
                tableContainer={<UnSubContainer/>}
            />
        </>
    )
}