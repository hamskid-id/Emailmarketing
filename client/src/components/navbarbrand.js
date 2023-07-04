import { AiTwotoneMail } from "react-icons/ai";
export const Brand =({handleClick})=>{
    return(
        <div className="d-flex align-items-center">
            <span className="me-2 p-2 rounded-circle brandBg btn">
                <AiTwotoneMail
                    size="1.5rem"
                    color="#3B3C36"
                    onClick={handleClick }
                />
            </span>
            <span className="brand">
                cheapmailing
            </span>
        </div>
    )
}