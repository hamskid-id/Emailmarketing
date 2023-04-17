export const Modal =({title,body,large,hidemodal,id})=>{
    return(
        <div
            className="modal fade" 
            id={id?id:"staticBackdrop"}
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true">
            <div className={`modal-dialog ${large && `modal-xl`} modal-dialog-centered modal-dialog-scrollable`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">
                            {title}
                        </h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal"
                            ref={hidemodal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}