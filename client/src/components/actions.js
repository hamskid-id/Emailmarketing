export const Actions =({
    actionName,
    handleChange,
    handleInputChange
})=>{
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
                                onChange={handleChange}
                                >
                                {
                                    [
                                        {
                                            name:"Created At"
                                        },
                                        {
                                            name:actionName ==="Add Tag"?"Name":"Email"
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
                            placeholder="Search..."
                            className="border btn mb-1"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                {
                    
                    actionName && (
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