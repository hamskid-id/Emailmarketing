import { useState} from "react"
import { FaSistrix } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Spinner from "../../components/spinner/spinner"

export const SearchView=()=>{
    const campaign = useSelector(
        state => state.campaign
    )
    const subsriber = useSelector(
        state => state.subscriber
    )
    const unsub = useSelector(
        state => state.unsubscriber
    )
    const navigate = useNavigate();
    const [allSearch, setAllSearch] = useState({
        statecamp:[],
        statesub:[],
        stateunsb:[]
    })

    const CheckCampaignForSearch =(value)=>{
            const availableCampaign = campaign.Campaigns?.filter((camp)=>{
                const{
                    title,
                    reply_to,
                    from_email,
                    subject
                }=camp;
                if(
                    (value !=="")&&(                   
                        from_email.toLowerCase().includes(value)||
                        title.toLowerCase().includes(value)||
                        reply_to.toLowerCase().includes(value)||
                        subject.toLowerCase().includes(value)
                    )
                ){
                    return camp;
                }
            })
            setAllSearch((prevState)=>{
                    return{
                        ...prevState,
                        statecamp:availableCampaign
                    }
                }
            )
    }

    const CheckUnSubscribersForSearch =(value)=>{
        const availableUnsub = unsub.unsubscribers?.filter((sub)=>{
                const{
                    email,
                    fname,
                    lname
                }=sub;
                if(
                    (value !=="")&&(  
                        email.toLowerCase().includes(value)||
                        fname.toLowerCase().includes(value)||
                        lname.toLowerCase().includes(value)
                    )
                ){
                    return sub;
                }
            })
            setAllSearch((prevState)=>{
                return{
                    ...prevState,
                    stateunsb:availableUnsub
                }
            })
    }

    const CheckSubscribersForSearch =(value)=>{
            const availablesub = subsriber?.subscribers?.filter((sub)=>{
                const{
                    email,
                    fname,
                    lname
                }=sub;
                if(
                    (value !=="")&&(  
                        email.toLowerCase().includes(value)||
                        fname.toLowerCase().includes(value)||
                        lname.toLowerCase().includes(value)
                    )
                ){
                    return sub;
                }
            })
            setAllSearch((prevState)=>{
                return{
                    ...prevState,
                    statesub:availablesub
                }
            })
    }

    const SearchAll =(value)=>{
        campaign && CheckCampaignForSearch(value);
        subsriber && CheckSubscribersForSearch(value);
        unsub && CheckUnSubscribersForSearch(value);
    }

    if(campaign.GetCampaignsStatus ==='pending' || unsub.GetUnSubscribersStatus ==='pending' || subsriber.GetSubscribersStatus ==='pending'){
        return <Spinner/>
    }
    return(
        <div className="df-lex flex-column">
            <form className="d-flex w-100">
                <span className="w-100">
                    <input 
                        type="text" 
                        placeholder="enter search" 
                        className=" w-100 btn border p-2 bg-ddd"
                        onChange={(e)=>{
                            SearchAll(e.target.value.toString().toLowerCase());
                        }
                        }
                    />
                </span>
                <span>
                    <FaSistrix
                        size="2.4rem"
                        color="white"
                        className="btn border bg-slate-grey"
                    />
                </span>
            </form>
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center p-2 py-4">
                    {
                        allSearch.statecamp.length !==0 &&(
                        <div className="w-100 btn">
                            <p className="text-start text-primary fs-6 bg-darkgrey w-100 fw-bold border bg-lightBlue p-2">Campaign</p>
                            {
                                allSearch.statecamp?.map((camp,index)=>{
                                    const{
                                        title,
                                        reply_to,
                                        from_email,
                                        subject
                                    }=camp;
                                    return(
                                        <div
                                            className="fs-6 fw-bold border border-bottom text-black text-start p-1 rounded mb-2" 
                                            key={index}
                                            onClick={()=>navigate("/campaigns")}
                                            data-bs-dismiss="modal" 
                                            aria-label="Close"
                                        >
                                            <h6 className="fs-6 fw-bold">{title}</h6>
                                            <h6 className="fs-6 ">{from_email}</h6>
                                            <h6 className="fs-6 ">{subject}</h6>
                                            <h6 className="fs-6">{reply_to}</h6>
                                        </div>
                                    )}
                                )
                            }
                        </div>)
                    }
                    {
                        allSearch.statesub.length !==0 &&(
                        <div className="mt-1 w-100 btn">
                            <p className="text-start text-primary fs-6 bg-darkgrey w-100 fw-bold border bg-lightBlue p-2">subscribers</p>
                            {
                                allSearch.statesub?.map((sub,index)=>{
                                    const{
                                        email,
                                        fname,
                                        lname
                                    }=sub;
                                    return(
                                        <div
                                            className="fs-6 fw-bold border border-bottom text-black text-start p-1 rounded mb-2" 
                                            key={index}
                                            onClick={()=>navigate("/Lists/Subscribers")}
                                            data-bs-dismiss="modal" 
                                            aria-label="Close"
                                        >
                                            <h6 className="fs-6 fw-bold">{email}</h6>
                                            <h6 className="fs-6 ">{fname}</h6>
                                            <h6 className="fs-6 ">{lname}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        )
                    }{
                        allSearch.stateunsb.length !==0 &&(
                        <div className="mt-1 w-100 btn">
                            <p className="text-start text-primary fs-6 bg-darkgrey w-100 fw-bold border bg-lightBlue p-2">Unsubscribers</p>
                            {
                                allSearch.stateunsb?.map((sub,index)=>{
                                    const{
                                        email,
                                        fname,
                                        lname
                                    }=sub;
                                    return(
                                        <div
                                            className="fs-6 fw-bold border border-bottom text-black text-start p-1 rounded mb-2" 
                                            key={index}
                                            onClick={()=>navigate("/Lists/Unsubscribe")}
                                            data-bs-dismiss="modal" 
                                            aria-label="Close"
                                        >
                                            <h6 className="fs-6 fw-bold">{email}</h6>
                                            <h6 className="fs-6 ">{fname}</h6>
                                            <h6 className="fs-6 ">{lname}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>                    
                    )
                 }
                </div>
                 
            </div>
        </div>
    )
}