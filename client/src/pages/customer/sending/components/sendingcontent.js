import { Modal } from "../../../../components/modal/modal"
import { SendingForm } from "./sendingmodalcontent"
import { SendingTable } from "./sendingtable"

export const SendingDomain =()=>{
    return(
        <>
            <p className="fs-3">Sending Identity</p>
            <hr className="b-grey"/>
            <p className="fs-4">Domains</p>
            <p className="fs-6">Sending domain is used to verify the sender whose email address appearing in the FROM header of an email. 
                Add your own verified sending domains to send emails on behalf of your domain.</p>
            <div className="w-overflow">
                <SendingTable/> 
            </div>
            <Modal
                title="+ New sending domain"
                body={
                    <SendingForm/>
                }
            />
        </>
    )
}