export const Stat=()=>{
    return(
        <>
            <p className="text-center fw-bold fs-4">Audience</p>
            <div className="w-overflow d-flex justify-content-between border rounded mb-3">
                {
                    [
                        {
                            num:500,
                            name:"subscribers in action"
                        },{
                            num:"35%",
                            name:"Subscription done"
                        },{
                            num:227,
                            name:"Skipped/Pending"
                        },{
                            num:"47%",
                            name:"Error"
                        }
                    ].map((stat,index)=>{
                        const{
                            num,
                            name
                        }=stat
                        return(
                            <div 
                                key={index}
                                className={`p-2 d-flex flex-column align-items-center wt-12
                                    ${index ===1||index ===2?`border`:null}`
                                }
                            >
                                <p className="fs-4 fw-bold">{num}</p>
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="p-3">
                        There are 500 contacts in total targeted for this automation / campaign
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3 d-flex wrap">
                        <button className="btn btn-md b-grey text-white  mb-2">Refresh</button>
                        <select 
                            name="sort" 
                            id="sort"
                            className="fs-6 p-2 me-3 rounded b-grey mb-2"
                            >
                            {
                                [
                                    {
                                        name:"Most Recent Activities"
                                    },
                                    {
                                        name:"Most Recently Triggered First"
                                    },
                                    {
                                        name:"New contacts First"
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
                            className="fs-6 p-2 me-3 rounded b-grey  mb-2 w-100"
                            >
                            {
                                [
                                    {
                                        name:"Export this list"
                                    },
                                    {
                                        name:"Copy to a new list"
                                    },
                                    {
                                        name:"Tag those contacts"
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
                </div>
            </div>
            <input
                type="text"
                placeholder="Enter to search subscribers"
                className="bg-alice p-2 border border-white rounded w-100"
            />
            <p className="fs-5 fw-bold mt-3">All Suscribers (500)</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h6 className="fs-6 fw-bold">Curtis Ware</h6>
                        <h6 className="fs-6">curtis@ware.net.au</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h6 className="fs-5 fw-bold">3 years ago</h6>
                        <h6 
                            className="fs-6"
                        >
                            Last activity.
                            <span className="text-success">Refresh</span>
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}