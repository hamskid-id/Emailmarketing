import { useRef } from "react"
import { FaSlidersH } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Modal } from "../../../../../components/modal/modal"
import { SubscriberModalContent } from "../subscribercomponent/subscriberForm"
import { SubscriberTable } from "../subscriberTable"
import { IndividualSubTable } from "./individualsubtable"

export const IndividualListSuscribers =({
    setListSection
})=>{
    const subscriber = useSelector(
        state => state.subscriber
    )
    const hidemodal = useRef(null);

    return(
        <>
            <div className="d-flex align-items-center mb-3 mt-4">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <span className="fs-2">Subscribers</span>
            </div>
            <SubscriberTable
                content={subscriber}
            />
            <Modal
                title="+ New subscriber"
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