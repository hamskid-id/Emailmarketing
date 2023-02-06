import { FaCircleNotch } from "react-icons/fa"

export const QuickActions =()=>{
    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                <FaCircleNotch
                        size="2rem"
                    />
                </span>
                <h2 
                    className="fs-3 w-100 mb-0"
                >
                    Quick action
                </h2>
            </div>
            <h2 className="fs-5">
                We'll show you how to grow your audience and add contacts quickly
            </h2>
            <hr className="mb-4"/>
            <div>
                <div className="row justify-content-between align-items-center pew-5 mb-3">
                    <div 
                        className="col-md-7"
                    >
                        <div className="d-flex align-items-center wrap-m">
                            <span className="q-img">
                                <img 
                                    className="w-100"
                                    src="https://res.cloudinary.com/hamskid/image/upload/v1675956844/quick-action-sign-up-form_gg6aox.svg"
                                    alt="object not found"
                                /> 
                            </span>
                            <span className="pdw-1">
                                <h6 className="fw-bold fs-5">
                                   
                                    Create a signup form
                                </h6>
                                <h6 className="fs-6 break">
                                    Capture subscribers and collect the data you need
                                    to grow your audience
                                </h6>
                            </span>
                        </div>
                    </div>
                    <div 
                        className="col-md-5"
                    >
                        <button
                            className="btn b-gainsboro btn-sm fl-r">
                            Create Form
                        </button>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center pew-5">
                    <div 
                        className="col-md-7"
                    >
                        <div className="d-flex align-items-center wrap-m">
                            <span className="q-img">
                                <img 
                                    className="w-100"
                                    src="https://res.cloudinary.com/hamskid/image/upload/v1675956826/import-contacts_rymusv.png"
                                    alt="object not found"
                                /> 
                            </span>
                            <span className="pdw-1">
                                <h6 className="fw-bold fs-5">
                                    Add Subscriber
                                </h6>
                                <h6 className="fs-6 break">
                                    Capture subscribers and collect the data you need
                                    to grow your audience
                                </h6>
                            </span>
                        </div>
                    </div>
                    <div 
                        className="col-md-5"
                    >
                        <button
                            className="btn  btn-sm btn-success fl-r"
                        >
                            Add Subscribers
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}