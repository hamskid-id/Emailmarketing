export const Actions =()=>{
    return(
        <div className="row">
            <div className="col-md-6 mb-2">
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
                            className="fs-5 p-2 rounded b-gainsboro"
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
            <div className="col-md-6">
                <div>
                     <button 
                        className="btn b-grey btn-md my-2 fl-r"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                    >
                        + New Subscribers
                    </button>
                </div>
            </div>
        </div>
    )
}