import { useRef, useState } from "react";
// import "../homepage/home.css";
import { SideNav } from "./sideNav";
import { NavToggler } from "../../components/navToggler";
import { useNavigate } from "react-router-dom";
import { FaMonero, FaSearch } from "react-icons/fa";
import LetteredAvatar from 'react-lettered-avatar';
import { useSelector } from "react-redux";

export const Layout=({routeChildren})=>{
    const navToggler = useRef(null);
    const navigate = useNavigate();
    const auth = useSelector(
        state => state.auth
    )
    const [showNavToggler,setShowNavToggler] = useState(null);
    const showNav =()=>{
        setShowNavToggler(false)
        setTimeout(()=>{
            navToggler.current.classList.add("active");
            setShowNavToggler(null)
        },100)
    }
    return(
        <div className="container-fluid whitesmoke">
            <div className="row no-wrap">
                <div className="col-md-2 px-3 sideNav bg-slate-grey w-230" ref={navToggler}>
                   <SideNav navToggler={navToggler} showNavToggler={showNavToggler} setShowNavToggler={setShowNavToggler}/>
                </div>
                <div className="col-md-10 dashboardvh bg-smoke">
                        <div>
                            <div className="d-flex justify-content-between px-4 navHeader align-items-center">
                                <span className="mobile-logo">
                                    <span className="me-1">
                                        <FaMonero
                                            size="3.5rem"
                                            color="white"
                                            onClick={
                                                ()=>navigate("/")
                                            }
                                        />
                                    </span>
                                    <em className="fs-2 fw-bold text-white">
                                        5star
                                    </em>
                                </span>
                                <span className="fs-3 cl-blue web-dash fw-bold">Dashboard</span>
                                <span className="d-flex align-items-center justify-content-end">
                                    <span className="me-3 rounded-circle border search-icon">
                                        <FaSearch
                                            color="goldenrod"
                                        />
                                    </span>
                                    <div className="d-flex align-items-center my-3">
                                        <span className="me-2 dropdown">
                                            <span 
                                                className="dropdown-toggle d-flex align-items-center" 
                                                data-bs-toggle="dropdown" 
                                                aria-expanded="false">
                                                <LetteredAvatar
                                                    backgroundColor="brown"
                                                    color="white"
                                                    name={auth.userdata?.user?.name}
                                                />
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a 
                                                        className="dropdown-item" 
                                                        href="/account/profile">
                                                        Profile
                                                    </a>
                                                </li>
                                            </ul>
                                        </span>
                                     </div>                                   
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