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
                            className="fs-5 p-2 me-3 rounded b-gainsboro"
                            >
                            {
                                [
                                    {
                                        name:"Created At",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Email",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Name",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Updated At",
                                        url:"https://hello"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name,
                                        url
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
                            className="fs-5 p-2 me-3 rounded b-gainsboro"
                            >
                            {
                                [
                                    {
                                        name:"All subscribers",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Subscribed",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Unsubscribed",
                                        url:"https://hello"
                                    },{

                                        name:"Unconfirmed",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Spam reported",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Blacklisted",
                                        url:"https://hello"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name,
                                        url
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
                            className="fs-5 p-2 me-3 rounded b-gainsboro"
                            >
                            {
                                [
                                    {
                                        name:"All verifcation",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Deliverable",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Undeliverable",
                                        url:"https://hello"
                                    },{

                                        name:"Unknown",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Risky",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Unverified",
                                        url:"https://hello"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name,
                                        url
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
                                + New Subscribers
                            </button>
                        ):(
                             <button 
                                className="btn b-grey btn-md my-2 fl-r"
                                onClick={
                                    ()=>toast.error("You do not have permission for this action,Please Update you tag list to add Subscribers")
                                }
                            >
                                + New Subscribers
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}