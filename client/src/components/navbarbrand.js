import { FaMailBulk} from "react-icons/fa"

export const Brand =({handleClick,iconColor})=>{
    return(
        <div className="d-flex align-items-end">
            <span className="me-2">
                <FaMailBulk
                    size="2.5rem"
                    color={iconColor}
                    onClick={handleClick }
                />
            </span>
            <span className="brand space">
                5STAR MAIL
            </span>
        </div>
    )
}