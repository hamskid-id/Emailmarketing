export const AlertModal =({title,body,handleClick})=>{
    return(
        <div
            className="modal fade" 
            id="alertStaticBackdrop" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby="alertStaticBackdropLabel" 
            aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold fs-6">
                            {title}
                        </h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body fs-6">
                        {body}
                        <div className="d-flex justify-content-end align-items-center mt-2">
                            <button 
                                type="button" 
                                className="btn btn-success btn-sm me-2"
                                onClick={handleClick}
                            >
                               Yes
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger btn-sm" 
                                data-bs-dismiss="modal"
                            >
                               No
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}