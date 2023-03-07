import { FaSlidersH } from "react-icons/fa"
import { Modal } from "../../../../../components/modal/modal"
import { SubscriberModalContent } from "../subscribercomponent/subscriberForm"
import {UsersListContainer } from "./listtable"

export const ListContent =()=>{
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
            <UsersListContainer/>
            <Modal
                title="Edit your mail list"
                body={
                    <SubscriberModalContent/>
                }
            />
        </>
    )
}