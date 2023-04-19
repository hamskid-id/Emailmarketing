import { FaInbox } from "react-icons/fa"

export const NoData=()=>{
    return(
        <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5 px-2">
            <FaInbox
                color="#bbb"
                size="4rem"
            />
            <p className="fw-bold fs-6 text-bbb">
               No data!
            </p>
        </div>
    )
}