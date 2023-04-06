import { useRef } from "react"
import { FaUserFriends } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Modal } from "../../../../../components/modal/modal"
import { SubscriberTable } from "../subscriberTable"
import { SubscriberModalContent } from "./subscriberForm"

export const SubsrcibersContent =()=>{
    const hidemodal = useRef(null);
    const subscriber = useSelector(
        state => state.subscriber
    )
    return(
        <>
            <div className="d-flex align-items-center">
                <span className="me-3">
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <div className="fs-2">
                    Subscribers
                </div>
            </div>
            <p className="mb-5 fs-5 fw-bold">
                {subscriber.subscribers.length} Subscribers
            </p>
            <SubscriberTable
                content={subscriber}
            />
            <Modal
                title="New Subscribers"
                body={
                    <SubscriberModalContent
                        hidemodal={hidemodal}
                    />
                }
                hidemodal={hidemodal}
            />
        </>
    )
}