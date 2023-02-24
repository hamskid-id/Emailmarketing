import { FaSlidersH } from "react-icons/fa"
import { IndividualSubTable } from "./individualsubtable"

export const IndividualListSuscribers =({
    setListSection
})=>{
    return(
        <>
            <div className="d-flex align-items-center mb-3 mt-4">
                <span className="me-3">
                    <FaSlidersH
                        size="1.5rem"
                    />
                </span>
                <span className="fs-2">Subscribers</span>
            </div>
            <IndividualSubTable
                setListSection={setListSection}
            />
        </>
    )
}