import { FaTags } from "react-icons/fa"
import { Modal } from "../../../../../components/modal/modal"
import { CreateSpam } from "./spamform"
import { SpamContainer } from "./spamtable"

export const SpamsContent =()=>{
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaTags
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Spams Reported
                </div>
            </div>
            <SpamContainer/>
            <Modal
                title="Report Spam"
                body={                  
                    <CreateSpam/>
                }
            />
        </>
    )
}