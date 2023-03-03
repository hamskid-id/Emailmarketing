import { FaSlidersH } from "react-icons/fa"
import { Actions } from "../../../../../components/actions"
import { Modal } from "../../../../../components/modal/modal"
import { ListModalContent } from "./listform"
import { ListTable } from "./listtable"

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
            <Actions
                actionName="+ Create list"
            />
            <ListTable/>
            <Modal
                title="Edit your mail list"
                large={true}
                body={
                    <ListModalContent/>
                }
            />
        </>
    )
}