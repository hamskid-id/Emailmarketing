import { FaSlidersH } from "react-icons/fa"
import { Modal } from "../../../../components/modal/modal"
import { SubscriberModalContent } from "./subscriberForm"
import { SubContainer } from "./subscribertable"

export const SubsrcibersContent =()=>{
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1 cl-blue fw-bold">
                    Subscribers
                </div>
            </div>
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