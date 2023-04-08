import { useRef } from "react"
import { FaUserFriends } from "react-icons/fa"
import { useSelector } from "react-redux"
import { SubscriberTable } from "../subscriberTable"
import { SubscriberModalContent } from "./subscriberForm"
import { Tablelayout } from "../tableContentLayout"

export const SubsrcibersContent =()=>{
    const hidemodal = useRef(null);
    const subscriber = useSelector(
        state => state.subscriber
    )
    return(
        <>
            <Tablelayout
                hidemodal={hidemodal}
                title="Subscribers"
                titleIcon={
                    <FaUserFriends
                        size="1.5rem"
                        color="grey"
                    />
                }
                subNumber={subscriber.subscribers.length}
                tableContainer={<SubscriberTable
                        content={subscriber}
                    />}
                modalBody={                  
                    <SubscriberModalContent
                        hidemodal={hidemodal}
                    />
                }
                modalTitle="Add Subscriber"
            />
        </>
    )
}