import { FaCheckCircle, FaMonero } from "react-icons/fa";
export const AuthSideNav =({children})=>{
    return(
        <div className="container-fluid">
            <span className="mobile-logo p-3">
                <span className="me-1">
                    <FaMonero
                        size="3.5rem"
                        color="white"
                    />
                </span>
                <span className="fs-2 fw-bold text-white">
                    5star Mail
                </span>
            </span>
            <div className="row fixedHeightcover">
                <div className="col-md-5 m-auto mt-5">
                    <div className="pt-7 px-5">
                        {children}
                    </div>
                </div>
                <div className="col-md-7 bg-slate-grey auth-side">
                    <div className="d-flex flex-column justify-content-center align-items-center p-4">
                        <div>
                            <FaMonero
                                size="13rem"
                                color="white"
                                className="authside-icon"
                            />
                        </div>
                        <p className="text-white fs-4 text-center">
                            Unlock the full potential of your business with our powerful email marketing platform
                        </p>
                        <div>
                            <div className="d-flex align-items-center">
                                <span className="me-3">
                                    <FaCheckCircle
                                    color="white"
                                    />
                                </span>
                                <span className="text-white fs-6">
                                    Reach your target audience effectively, track your results, and grow your customer base with ease
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="me-3">
                                    <FaCheckCircle
                                    color="white"
                                    />
                                </span>
                                <span className="text-white fs-6">
                                    With intuitive tools and features, creating stunning email campaigns has never been easier
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="me-3">
                                    <FaCheckCircle
                                    color="white"
                                    />
                                </span>
                                <span className="text-white fs-6">
                                    Design your marketingwith email automation workflow
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="me-3">
                                    <FaCheckCircle
                                    color="white"
                                    />
                                </span>
                                <span className="text-white fs-6">
                                    Join the thousands of businesses that trust us for their email marketing needs and start seeing results today.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}