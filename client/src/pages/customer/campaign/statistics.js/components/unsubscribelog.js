import { useRef } from "react";
import { HandleDownloadPdf } from "./download"
import { Actions } from "./logActions"

export const UnsubscribeLog =()=>{
    const printRef = useRef(null);
    return(
        <>
            <p className="fs-3 mb-2">UnSubscribe log</p>
            <Actions
                HandleDownloadPdf={HandleDownloadPdf}
                printRef={printRef}
            />
            <div className="w-overflow p-3" ref={printRef}>
                <table className="table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Recipient</th>
                            <th scope="col">IP address</th>
                            <th scope="col">Campaign</th>
                            <th scope="col">Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           [{
                                recipient:"stacey_lortz@aol.com",
                                ip:"181.209.150.0",
                                url:"http://sales.sample.com/search=new",
                                Campaign:"Special offer!",
                                CreatedAt:"2017-07-13 15:06"
                           }]?.map((log,index)=>{
                                    const{
                                        recipient,
                                        ip,
                                        Campaign,
                                        CreatedAt
                                    }=log
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>{recipient}</td>
                                            <td>{ip}</td>
                                             <td>{Campaign}</td>
                                            <td>{CreatedAt}</td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}