import {FaUserFriends } from "react-icons/fa"
import { useSelector } from "react-redux"
import { UnSubContainer } from "./unsubtable"

export const UnSubsrcibedContent =()=>{
    const unsub = useSelector(
        state => state.unsubscriber
    )
    return(
        <>
            <div className="d-flex align-items-center">
                <span className="me-3">
                    <FaUserFriends
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Unsubscribed
                </div>
            </div>
            <p className="mb-5 fs-4 fw-bold">
                { unsub?.unsubscribers?.length} Unsubscribed
            </p>
            <UnSubContainer/>
        </>
    )
}