import { FaMailBulk} from "react-icons/fa"

export const Brand =({handleClick,iconColor})=>{
    return(
        <div className="d-flex align-items-center">
            <span className="me-2">
                <FaMailBulk
                    size="2.5rem"
                    color="#3498db"
                    onClick={handleClick }
                />
            </span>
            <span className="brand">
                5STAR MAIL
            </span>
        </div>
    )
}