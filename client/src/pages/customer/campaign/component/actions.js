import { useNavigate } from "react-router-dom"

export const Actions =({
    deleteArray
})=>{
    const navigate = useNavigate();
    const handleClick=()=>{
        console.log(deleteArray)
    }
    return(
        <div className="row">
            <div className="col-md-9 mb-2">
                <div className="d-flex wrap align-items-center">
                    <div className="d-flex align-items-end mb-2 wrap">
                        <div  className="me-3">
                            <label 
                                htmlFor="sort"
                                className="me-1">
                                Sort By:
                            </label>
                            <select 
                                name="sort" 
                                id="sort"
                                className="fs-6 p-2 rounded b-gainsboro me-2 mb-1"
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
                        {
                            deleteArray &&( 
                                <button
                                    onClick={handleClick}
                                    className="btn btn-md  b-grey fs-6 me-2 mb-1">
                                    delete
                                </button>
                            )
                        }
                        <input  
                            type="text"
                            placeholder="Type to search"
                            className="action-inpt rounded mb-1"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-3">
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
            </div>
        </div>
    )
}