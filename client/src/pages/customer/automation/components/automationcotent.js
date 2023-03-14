import { useState } from "react"
import { FaRegClock, FaSlidersH } from "react-icons/fa"
import { Actions } from "../../../../components/actions"
import { Modal } from "../../../../components/modal/modal"
import { AutoTable } from "./automationtable"
import { ModalContentFirstView } from "./modalcontent1"
import { ModalContentSecondView } from "./modalcontent2"
import { CreateAutomation } from "./modalcontent3"

export const AutoContent =()=>{
    const[
        modalView,
        setModalView
    ]= useState({
        name:"first",
        id:null
    })
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaRegClock
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Automations
                </div>
            </div>
            <Actions
                actionName="+ Add New"
            />
            <AutoTable/>
            <Modal
                title="Add New Automations"
                body={        
                    modalView.name ==="first"?
                        <ModalContentFirstView
                            setModalView={setModalView}
                        />:
                     modalView.name ==="second"?
                        <ModalContentSecondView
                            setModalView={setModalView}
                            modalView={modalView}
                        />:
                        <CreateAutomation
                            setModalView={setModalView}
                        />
                }
                large={true}
            />
        </>
    )
}