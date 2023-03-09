import { useSelector } from "react-redux"
import { toast } from "react-toastify"

export const Actions =()=>{
    const tag = useSelector(
        state => state.tag
    )
    return(
        <div className="row">
            <div className="col-md-9 mb-2">
                <div className="d-flex wrap align-items-center">
                    <div  className="me-3 mb-2">
                        <label 
                            htmlFor="sort"
                            className="me-1">
                            Sort By:
                        </label>
                        <select 
                            name="sort" 
                            id="sort"
                            className="fs-6 p-2 me-3 rounded b-gainsboro mb-1"
                            >
                            {
                                [
                                    {
                                        name:"Created At"
                                    },
                                    {
                                        name:"Email"
                                    },
                                    {
                                        name:"Name"
                                    },
                                    {
                                        name:"Updated At"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name
                                    }=drop
                                    return(
                                        <option
                                            className="fs-6" 
                                            value={name}
                                            key={index}
                                        >{name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <select 
                            name="sort" 
                            id="sort"
                            className="fs-6 p-2 me-3 rounded b-gainsboro mb-1"
                            >
                            {
                                [
                                    {
                                        name:"All subscribers"
                                    },
                                    {
                                        name:"Subscribed"
                                    },
                                    {
                                        name:"Unsubscribed"
                                    },{

                                        name:"Unconfirmed"
                                    },
                                    {
                                        name:"Spam reported"
                                    },
                                    {
                                        name:"Blacklisted"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name
                                    }=drop
                                    return(
                                        <option
                                            className="fs-6" 
                                            value={name}
                                            key={index}
                                        >{name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <select 
                            name="sort" 
                            id="sort"
                            className="fs-6 p-2 me-3 rounded b-gainsboro mb-1"
                            >
                            {
                                [
                                    {
                                        name:"All verifcation"
                                    },
                                    {
                                        name:"Deliverable"
                                    },
                                    {
                                        name:"Undeliverable"
                                    },{

                                        name:"Unknown"
                                    },
                                    {
                                        name:"Risky"
                                    },
                                    {
                                        name:"Unverified"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name
                                    }=drop
                                    return(
                                        <option
                                            className="fs-6" 
                                            value={name}
                                            key={index}
                                        >{name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input  
                        type="text"
                        placeholder="Type to search"
                        className="action-inpt rounded"
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    {
                        tag.Tags.length>0?(
                            <button 
                                className="btn b-grey btn-md my-2 fl-r"
                                type="button"                            
                                data-bs-toggle="modal" 
                                data-bs-target="#staticBackdrop"
                            >
                                + New
                            </button>
                        ):(
                             <button 
                                className="btn b-grey btn-md my-2 fl-r"
                                onClick={
                                    ()=>toast.error("You do not have permission for this action,Please Update you tag list to add Subscribers")
                                }
                            >
                                + New 
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}