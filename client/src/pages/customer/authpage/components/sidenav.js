import { FaCheckCircle, FaMailBulk} from "react-icons/fa";
export const AuthSideNav =({children})=>{
    return(
        <div className="container-fluid imgBg">
            <div className="row fixedHeightcover">
            <div className="col-md-7 auth-side">
                    <div className="d-flex flex-column justify-content-center align-items-center p-4">
                        <div className="d-flex justify-content-center my-4">
                            {/* <FaMailBulk
                                size="13rem"
                                color="white"
                                className="authside-icon"
                            /> */}
                            <img 
                                src="https://demo.acellemail.com/images/automation-illustration.png"
                                alt="object not found"
                                className="w-50"
                            />
                        </div>
                        <p className="text-dark fs-4 text-center">
                            Track every single email sent out for your campaign
                        </p>
                        <div>
                            {
                                [
                                    "Reach your target audience effectively, track your results, and grow your customer base with ease",
                                    "With intuitive tools and features, creating stunning email campaigns has never been easier",
                                    "Design your marketingwith email automation workflow",
                                    "Join the thousands of businesses that trust us for their email marketing needs and start seeing results today."
                                ].map((text,index)=>{
                                    return(
                                        <div 
                                            key={index}
                                            className="d-flex align-items-center">
                                            <span className="me-3">
                                                <FaCheckCircle
                                                    color="grey"
                                                />
                                            </span>
                                            <span className="text-dark fs-6">
                                                {text}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-5 bg-slate-grey">
                    <div className="pt-7 px-4 d-flex flex-column wt-75 m-auto">
                        <span className="mobile-logo p-1 flex-column justify-content-center">
                            <span className="me-2 w-50">
                                <img 
                                    src="https://demo.acellemail.com/images/automation-illustration.png"
                                    alt="object not found"
                                    className="w-100 mt-4"
                                />
                            </span>
                            <span className="fs-6 text-white">
                                Track every single email sent out for your campaign
                            </span>
                        </span>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}