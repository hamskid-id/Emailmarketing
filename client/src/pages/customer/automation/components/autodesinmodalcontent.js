import { FaAlgolia, FaCodeBranch, FaEnvelope, FaRegHourglass } from "react-icons/fa"

export const AutoDesignModalContent =()=>{
    return(
        <div>
            <p className="fs-6">
                 Streamline your communication and personalize each customer's experience. 
                 Use automation to create an email or series of emails that send when triggered by specific date, 
                 event or contact's activities.
            </p>
            {
                [
                    {
                        action:"Send an email",
                        desc:"Send an automated email",
                        icon:<FaEnvelope
                                size="1.5rem"
                                color="grey"
                            />
                    },
                    {
                        action:"Wait",
                        desc:"Add a wait time before proceeding with a next action. For example: send a series of email, but only one per day",
                        icon:<FaAlgolia 
                                size="1.5rem"
                                color="grey"
                            />
                    },
                    {
                        action:"Evaluate a condition",
                        desc:"Take actions when a condition is met. For example: a previous email is opened or clicked",
                        icon:<FaCodeBranch
                                size="1.5rem"
                                color="grey"
                            />
                    },
                    {
                        action:"Operation",
                        desc:"Perform an operation like: update/copy/move/tag contacts",
                        icon:<FaRegHourglass 
                            size="1.5rem"
                            color="grey"
                        />
                    },
                ]?.map((actions,index)=>{
                    const{
                        action,
                        desc,
                        icon
                    }=actions
                    return(
                        <div 
                            key={index}
                            className="d-flex align-items-center mb-3"
                        >
                            <span className="me-3">
                                {icon}
                            </span>
                            <span>
                                <h6 className="fw-bold fs-5">{action}</h6>
                                <h6 className="fs-6">{desc}</h6>
                            </span>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}