import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { SubscriberTable } from "../subscriberTable"
import { SubscriberModalContent } from "./subscriberForm"
import { Tablelayout } from "../tableContentLayout"
import { AiOutlineTeam } from "react-icons/ai"

export const SubsrcibersContent =()=>{
    const hidemodal = useRef(null);
    const subscriber = useSelector(
        state => state.subscriber
    )
    const [createType,setCreateType] =useState('single');
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
                title="Subscribers"
                titleIcon={
                    <AiOutlineTeam
                        size="1.5rem"
                        color="grey"
                    />
                }
                subNumber={subscriber.subscribers.length}
                tableContainer={
                    <SubscriberTable
                        content={subscriber}
                        setModalBody ={setModalBody}
                        hidemodal={hidemodal}
                        setCreateType={setCreateType}
                    />}
                modalBody={modalBodySetter.body}
                modalTitle={modalBodySetter.title}
            />
        </>
    )
}