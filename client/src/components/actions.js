export const Actions =({
    actionName,
    deleteArray
})=>{
    const handleClick=()=>{
        console.log(deleteArray)
    }
    return(
        <div className="row">
            <div className="col-md-6 mb-2">
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
                                className="btn rounded b-gainsboro me-2 mb-1"
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
                                    className="btn btn-md  b-grey me-2 mb-1">
                                    delete
                                </button>
                            )
                        }
                        <input  
                            type="text"
                            placeholder="Type to search"
                            className="border btn mb-1"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                {
                    actionName &&(
                        <div>
                            <button
                                className="btn b-grey btn-md my-2 fl-r"
                                type="button"                            
                                data-bs-toggle="modal" 
                                data-bs-target="#staticBackdrop"
                            >
                                {actionName}
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}