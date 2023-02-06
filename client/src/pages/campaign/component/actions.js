export const Actions =()=>{
    return(
        <div className="row">
            <div className="col-md-7">
                <div className="d-flex wrap justify-content-between align-items-center">
                    <select 
                        name="actions" 
                        id="actions"
                        className="fs-5 p-2 rounded text-white b-grey me-3"
                        >
                        {
                            [
                                {
                                    name:"Actions",
                                    url:"https://hello"
                                },
                                {
                                    name:"resume",
                                    url:"https://hello"
                                },
                                {
                                    name:"pause",
                                    url:"https://hello"
                                },
                                {
                                    name: "delete",
                                    url:"https://hello"
                                }
                               
                            ]?.map((drop,index)=>{
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
                    <div  className="me-3">
                        <label 
                            htmlFor="sort"
                            className="me-1">
                            Sort By:
                        </label>
                        <select 
                            name="sort" 
                            id="sort"
                            className="fs-5 p-2 rounded b-gainsboro"
                            >
                            {
                                [
                                    {
                                        name:"Created At",
                                        url:"https://hello"
                                    },
                                    {
                                        name:"Name",
                                        url:"https://hello"
                                    }
                                ]?.map((drop,index)=>{
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
                    <input  
                        type="text"
                        placeholder="Type to search"
                        className="action-inpt rounded"
                    />
                </div>
            </div>
            <div className="col-md-5">
                <div>
                     <button 
                        type="button" 
                        className="btn b-grey btn-md my-2 fl-r" 
                        
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                    >
                        Create Campaign
                    </button>
                </div>
            </div>
        </div>
    )
}