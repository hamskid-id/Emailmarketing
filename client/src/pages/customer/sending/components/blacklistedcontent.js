import { FaSlidersH } from "react-icons/fa"
import { BlacklistTable } from "./blacklistedtable"

export const BlacklistContent =()=>{
    return(
        <>
            <div className="d-flex align-items-center mb-5">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <div className="fs-1">
                    Blacklist
                </div>
            </div>
            <BlacklistTable/>
        </>
    )
}