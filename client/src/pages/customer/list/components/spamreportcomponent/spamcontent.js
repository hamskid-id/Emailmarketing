import { useRef } from "react"
import { FaTags } from "react-icons/fa"
import { Modal } from "../../../../../components/modal/modal"
import { CreateSpam } from "./spamform"
import { SpamContainer } from "./spamtable"

export const SpamsContent =()=>{
    const hidemodal = useRef(null);
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaTags
                        size="1.5rem"
                        color='grey'
                    />
                </span>
                <div className="fs-2">
                    Spams Reported
                </div>
            </div>
            <SpamContainer/>
            <Modal
                title="Report Spam"
                body={                  
                    <CreateSpam
                        hidemodal={hidemodal}
                    />
                }
                hidemodal={hidemodal}
            />
        </>
    )
}