import { FaSlidersH } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Modal } from "../../../../components/modal/modal"
import { SubscriberModalContent } from "./subscriberForm"
import { SubContainer } from "./subscribertable"

export const SubsrcibersContent =()=>{
    const subscriber = useSelector(
        state => state.subscriber
    )
    return(
        <>
            <div className="d-flex align-items-center">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Subscribers
                </div>
            </div>
            <p className="mb-5 fs-4 fw-bold">
                {subscriber.subscribers.length} Subscribers
            </p>
            <SubContainer/>
            <Modal
                title="New Subscribers"
                body={
                    <SubscriberModalContent/>
                }
            />
        </>
    )
}