import { useRef} from "react"
import { useSelector } from "react-redux"
import { SubscriberModalContent } from "../subscribercomponent/subscriberForm"
import { SubscriberTable } from "../subscriberTable"
import { Tablelayout } from "../tableContentLayout"
import { FaUserFriends } from "react-icons/fa"
import { useState } from "react"

export const ListContent =()=>{
    const subscriber = useSelector(
        state => state.subscriber
    )
    const hidemodal = useRef(null);
    const[
        modalBodySetter, setModalBody
    ]=useState({
            body:<SubscriberModalContent
                    hidemodal={hidemodal}
                />,
            title:'Add Subscriber'
        }
    )
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
                tableContainer={
                    <SubscriberTable
                        content={subscriber}
                        setModalBody ={setModalBody}
                        hidemodal={hidemodal}
                    />}
                modalBody={modalBodySetter.body}
                modalTitle={modalBodySetter.title}
            />
        </>
    )
}