import { FaCartArrowDown, FaCircleNotch } from "react-icons/fa"
import { recentDropdown } from "./recentcampaindropdown"

export const RecentlySent=()=>{
    const campaign=[{
        title:"title",
        recipient:"recipient",
        from:"hamzat",
        subject:"hellow orld",
        content:"greetins to the wolrd"
    }]
    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaCircleNotch
                        size="1.5rem"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                     Recently sent campaigns
                </h2>
            </div>
            <div className="w-100">
                <select 
                    name="campains" 
                    id="campains"
                    className="fs-6 p-2 rounded text-white b-grey campains-select"
                    >
                    {
                        recentDropdown?.map((drop,index)=>{
                            const {
                                name,
                                url
                            }=drop
                            return(
                                <option 
                                    value={name}
                                    key={index}
                                >{name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="d-flex wrap justify-content-between mt-5">
                {
                    [
                        {
                            action:"Title",
                            content:"Mail lists from ClickFunnel"
                        },
                        {
                            action:"From",
                            content:"Mail lists from ClickFunnel"
                        },
                        {
                            action:"Recipient",
                            content:"Mail lists from ClickFunnel"
                        },
                        {
                            action:"Subject",
                            content:"Newsletter test #0041"
                        },
                        {
                            action:"Content",
                            content:"Newsletter test #0041"
                        }
                    ]?.map((camp,index)=>{
                        const{
                            action,
                            content
                        }=camp
                        return(
                            <div className="d-flex wt-50 mb-3">
                                <span className="rounded border px-2 py-1 me-3">
                                   {action}
                                </span>
                                <span className="text-primary">
                                    {content}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}