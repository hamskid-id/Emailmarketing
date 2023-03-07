import { FaAlignRight } from "react-icons/fa";

export const NavToggler=({showNav})=>{
    return(
        <div className="rounded-circle p-3 show-toggler">
             <FaAlignRight
                size="1.5rem"
                color="white"
                onClick={showNav}
            />
        </div>
    )
}