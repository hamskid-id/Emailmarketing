import { Modal } from "../../../../../components/modal/modal"
import { TrackingForm } from "./trackingmodalcontent"
import { TrackingTable } from "./trackintable"

export const TrackingDomain =()=>{
    return(
        <>
            <p className="fs-3">Tracking domains</p>
            <hr className="b-grey"/>
            <p className="fs-4">Domains</p>
            <p className="fs-6">Using a tracking domain creates all the links and URLs in your emails to be overwritten as if they come from your own brand's domain 
                (rather than from this application hostname), making your emails more authentic and more likely to reach recipients INBOX.
            </p>
            <div className="w-overflow">
                <TrackingTable/> 
            </div>
             <Modal
                title="+ New Tracking domain"
                body={
                    <TrackingForm/>
                }
                large={true}
            />
        </>
    )
}