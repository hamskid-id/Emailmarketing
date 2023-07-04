import { useNavigate } from "react-router-dom"

export const Actions =({
    actionName,
    deleteArray,
    handleInputChange
})=>{
    const navigate = useNavigate();
    const handleClick=()=>{
        console.log(deleteArray)
    }
    return(
        <div className="row">
            <div className="col-md-6 mb-2">
                <div className="d-flex wrap align-items-center">
                    <div className="d-flex align-items-end mb-2 wrap">
                        {
                            deleteArray?.length > 0 &&( 
                                <button
                                    onClick={handleClick}
                                    className="btn btn-md  b-grey me-2 mb-1">
                                    delete
                                </button>
                            )
                        }
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