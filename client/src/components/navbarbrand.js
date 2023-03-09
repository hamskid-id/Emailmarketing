import { FaMonero } from "react-icons/fa"

export const Brand =({handleClick})=>{
    return(
        <>
            <span className="me-1">
                <FaMonero
                    size="3.5rem"
                    color="white"
                    onClick={handleClick }
                />
            </span>
            <span className="fs-3 fw-bold text-white">
                5star Mail
            </span>
        </>
    )
}