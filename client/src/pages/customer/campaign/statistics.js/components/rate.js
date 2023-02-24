import { ClickLog } from "./clicklog"
import { OpenLog } from "./openlog"

export const Rate =({
    ListSection,
    setListSection
})=>{
    return(
        <div className="py-4">
            <p className="fs-3">Performace Rate</p>
             <p className="fs-6">
                Open rate is a measure that tells you how many delivered emails were opened by subscribers.
                Click rate is a measure of how many people clicked on one of the links in your email campaign.
             </p>
             <div className="d-flex justify-content-between">
             <div className="wt-50 pe-3">
                <div className="flex justify-content-between">
                    <h6 className="fs-5">Open rate</h6>
                    <div className="progress">
                        <div 
                            className="progress-bar bg-success" 
                            role="progressbar" 
                            aria-label="Basic example" 
                            aria-valuenow="10%"
                            style={{width:"10%"}}
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                    {
                        [
                            {
                                name:"Successful deliveries",
                                amount:0
                            },
                            {
                                name:"Total opens",
                                amount:0
                            },
                            {
                                name:"Uniq opens",
                                amount:0
                            },
                            {
                                name:"Last opened",
                                amount:0
                            },
                        ]?.map((activ,index)=>{
                            const{
                                name,
                                amount
                            }=activ
                            return(
                                <div 
                                    key={index} 
                                    className="d-flex justify-content-between py-2 dotted-buttom"
                                    >
                                    <span>{name}</span>
                                    <span>{amount}</span>
                                </div>
                            )
                        })
                    }
                    <button
                         className="btn btn-md btn-success mt-3"
                         onClick={
                            ()=>setListSection({
                                    ...ListSection,
                                    components:<OpenLog/>
                            })
                        }
                         >Open Log</button>
                </div>
            </div>
            <div className="wt-50">
                <div className="flex justify-content-between">
                    <h6 className="fs-5">Click rate</h6>
                    <div className="progress">
                        <div 
                            className="progress-bar bg-success" 
                            role="progressbar" 
                            aria-label="Basic example" 
                            aria-valuenow="10%"
                            style={{width:"10%"}}
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                    {
                        [
                            {
                                name:"Total clicks",
                                amount:0
                            },
                            {
                                name:"Total opens",
                                amount:0
                            },
                            {
                                name:"Abuse reports",
                                amount:0
                            },
                            {
                                name:"Last opened",
                                amount:0
                            },
                        ]?.map((activ,index)=>{
                            const{
                                name,
                                amount
                            }=activ
                            return(
                                <div 
                                    key={index} 
                                    className="d-flex justify-content-between py-2 dotted-buttom"
                                    >
                                    <span>{name}</span>
                                    <span>{amount}</span>
                                </div>
                            )
                        })
                    }
                    <button 
                        className="btn btn-md btn-success mt-3"
                        onClick={
                            ()=>setListSection({
                                    ...ListSection,
                                    components:<ClickLog/>
                            })
                        }
                        >Click Log</button>
                </div>
             </div>            

             </div>
        </div>
    )
}