import { useNavigate } from "react-router-dom"

export const Actions =()=>{
    const navigate = useNavigate();
    return(
        <div className="row">
            <div className="col-md-7 mb-2">
                <div className="d-flex wrap justify-content-between align-items-center">
                    <div  className="me-3 mb-2">
                        <label 
                            htmlFor="sort"
                            className="me-1">
                            Sort By:
                        </label>
                        <select 
                            name="sort" 
                            id="sort"
                            className="fs-6 p-2 rounded b-gainsboro"
                            >
                            {
                                [
                                    {
                                        name:"Created At"
                                    },
                                    {
                                        name:"Name"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name
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
                        onClick={
                            ()=>navigate("/campaign/select-type")
                        }
                    >
                        Create Campaign
                    </button>
                </div>
                {/* <div>
                     <button 
                        type="button" 
                        className="btn b-grey btn-md my-2 fl-r" 
                        
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                    >
                       + Create Campaign
                    </button>
                </div> */}
            </div>
        </div>
    )
}