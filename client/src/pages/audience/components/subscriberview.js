import { useState } from "react"
import { Modal } from "../../../components/modal/modal"
import { CollaboratorForm } from "./collaboratorForm"
import { CollabContainer } from "./collaboratorsContainer"
import { SubscriberModalContent } from "./subscriberForm"
import { SubContainer } from "./subscribersContent"


export const SubscriberView =()=>{
    const [
        modalContent,
        setModalContent
    ] = useState({
        title:null,
        body:null
    })
    return(
        
        <div className="py-3 pdx-6">
            <div className="row justify-content-between">
                <div className="col-md-6">
                    <span className="fs-1 fw-bold cl-blue">
                        Audience
                    </span>
                </div>
            </div>
            <div>
                <p className="fs-4">hamzatmarketting</p>
            </div>
            <div className="d-flex justify-content-end">
                <span className="me-3">
                    <button 
                        className="btn btn-sm btn-primary fl-r my-3"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        onClick={
                            ()=>setModalContent({
                                title:"Add a Collaborator",
                                body:<CollaboratorForm/>
                            })
                        }
                    >
                        Add Collaborator
                    </button>
                </span>
                <span>
                    <button 
                        className="btn btn-sm btn-primary fl-r my-3"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        onClick={
                            ()=>setModalContent({
                                title:"Add a Subscriber",
                                body:<SubscriberModalContent/>
                            })
                        }
                    >
                        Add Subscriber
                    </button>
                </span>

            </div>
            <div className="w-overflow">
                <SubContainer/>
            </div>
            <div>
                <CollabContainer/>
            </div>
            <Modal
                title={
                    modalContent.title
                }
                body={
                    modalContent.body
                }
            />
        </div>
    )
}