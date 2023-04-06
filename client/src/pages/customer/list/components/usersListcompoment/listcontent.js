import { useRef} from "react"
import { FaSlidersH } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Modal } from "../../../../../components/modal/modal"
import { SubscriberModalContent } from "../subscribercomponent/subscriberForm"
import { SubscriberTable } from "../subscriberTable"

export const ListContent =()=>{
    const subsriber = useSelector(
        state => state.subscriber
    )
    const hidemodal = useRef(null);
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    My lists
                </div>
            </div>
            <SubscriberTable
                content={subsriber}
            />
            <Modal
                title="Edit your mail list"
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