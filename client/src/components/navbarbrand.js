import { FaMailBulk} from "react-icons/fa"

export const Brand =({handleClick})=>{
    return(
        <>
            <span className="me-2">
                <FaMailBulk
                    size="3rem"
                    color="white"
                    onClick={handleClick }
                />
            </span>
            <span className="fs-6 fw-bold text-white">
                5star Mail
            </span>
        </>
    )
}