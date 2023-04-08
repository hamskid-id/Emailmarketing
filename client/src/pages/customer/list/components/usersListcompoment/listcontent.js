import { useRef} from "react"
import { useSelector } from "react-redux"
import { SubscriberModalContent } from "../subscribercomponent/subscriberForm"
import { SubscriberTable } from "../subscriberTable"
import { Tablelayout } from "../tableContentLayout"
import { FaUserFriends } from "react-icons/fa"

export const ListContent =()=>{
    const subscriber = useSelector(
        state => state.subscriber
    )
    const hidemodal = useRef(null);
    return(
        <>
            <Tablelayout
                hidemodal={hidemodal}
                title="my Lists"
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