import { useRef } from "react";
import "../homepage/home.css";
import { SideNav } from "./sideNav";
import { NavToggler } from "../../components/navToggler";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


export const Layout=({routeChildren})=>{
    const navToggler = useRef(null);
    const navigate = useNavigate();
    const showNav =()=>{
        navToggler.current.classList.add("active");
    }
    return(
        <div className="container-fluid whitesmoke">
            <div className="row no-wrap">
                <div className="col-md-2 px-3 sideNav bg-slate-grey w-230" ref={navToggler}>
                   <SideNav navToggler={navToggler}/>
                </div>
                <div className="col-md-10 dashboardvh bg-smoke">
                        <div>
                            <div className="d-flex justify-content-between p-4 navHeader">
                                <span className="fs-4 fw-bold bg-blue">
                                    Dashboard
                                </span>
                                <span className="d-flex align-items-center">
                                    <span className="me-3 rounded-circle border search-icon">
                                        <FaSearch
                                            color="goldenrod"
                                        />
                                    </span>
                                    <span>
                                        <img 
                                        src="https://res.cloudinary.com/hamskid/image/upload/v1675341778/Vector_4_daatnj.svg"
                                        alt="object not found"
                                        onClick={
                                            ()=>navigate("/inbox")
                                        }
                                    />
                                    </span>                                   
                                </span>
                            </div>
                            <div className="children">
                            {
                                routeChildren
                            }
                            </div>
                        </div>
                    
                    <NavToggler
                        showNav={showNav}
                    />
                </div>
            </div>
        </div>
    )
    
}