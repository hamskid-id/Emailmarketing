import { FaRegCompass, FaRegCreditCard, FaRegFileAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const SelectTypeSection=()=>{
    const navigate = useNavigate();
    return(
        <div>
            <div className="d-flex align-items-center bg-lightBlue pdx-4 pb-3 mb-3">
                <span className="me-3">
                    <FaRegCompass
                        size="1.5rem"
                    />
                </span>
                <span className="fs-1">
                    Select campaign type
                </span>
            </div>
            <div className="pdx-4">
                {
                    [
                        {
                            icon: <FaRegCreditCard
                                        size="2.3rem"
                                        color="grey"
                                    />,
                            type:"Regular",
                            text:"Campaign with HTML email content as well as images, links. This is the most common type."
                        },{
                            icon: <FaRegFileAlt
                                    size="2.3rem"
                                    color="grey"
                                />,
                            type:"Plain Text",
                            text:"Send a plain-text email without link tracking, images, or HTML."
                        }
                    ].map((types,index)=>{
                        const{
                            icon,
                            type,
                            text
                        }=types
                        return(
                            <div 
                                className="row align-items-center justify-content-between mb-4"
                                key={index}>
                                <div className="col-md-9">
                                    <div className="d-flex align-items-start">
                                        <span className="me-3">
                                            {icon}
                                        </span>
                                        <span className="fs-1">
                                            <h6 className="fs-3 text-primary">{type}</h6>
                                            <h6 className="fs-5">{text}</h6>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <button 
                                            className="b-grey text-white btn btn-md"
                                            onClick={
                                                ()=>{
                                                        localStorage.setItem(
                                                            "campaigns",type
                                                        )
                                                        if(localStorage.getItem(
                                                            "campaigns"
                                                        )){
                                                            navigate("/campaigns/Create")
                                                        }                                                        
                                                    }
                                            }
                                            >Choose</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}