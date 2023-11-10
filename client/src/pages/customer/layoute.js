import { useRef, useState } from "react";
import { SideNav } from "./sideNav";
import { NavToggler } from "../../components/navToggler";
import { useNavigate } from "react-router-dom";
import LetteredAvatar from 'react-lettered-avatar';
import { useDispatch, useSelector } from "react-redux";
import { Brand } from "../../components/navbarbrand";
import {FaExclamationTriangle, FaSistrix} from "react-icons/fa";
import { AlertModal } from "../../components/modal/alertModal";
import { LogOutUser } from "../../store/authSlice";
import { Modal } from "../../components/modal/modal";
import { SearchView } from "./searchView";

export const Layout=({routeChildren,main})=>{
    const dispatch = useDispatch();
    const navToggler = useRef(null);
    const navigate = useNavigate();
    const auth = useSelector(
        state => state.auth
    )
    const [showNavToggler,setShowNavToggler] = useState(null);
    const handleLogOut =()=>{
        dispatch(LogOutUser(null));
    }
    const showNav =()=>{
        setShowNavToggler(false)
        setTimeout(()=>{
            navToggler.current.classList.add("active");
            setShowNavToggler(null)
        },100)
    }
    return(
        <div className="container-fluid">
            <div className="row no-wrap">
                <div 
                    className="col-md-2 px-3 sideNav w-230" 
                    ref={navToggler}
                >
                   <SideNav 
                        navToggler={navToggler} 
                        showNavToggler={showNavToggler} 
                        setShowNavToggler={setShowNavToggler}
                    />
                </div>
                <div className="col-md-10 dashboardvh bg bg-white">
                        <div>
                            {/* navHeader */}
                            <div className="d-flex justify-content-between pdx-4 navHeader align-items-center">
                                <span className="navbrand">
                                    <Brand
                                        handleClick={()=>navigate("/")}
                                        iconColor="#122D36"
                                    />
                                </span>
                                { main && <span className="fs-3 cl-blue web-dash fw-bold">Dashboard</span>}
                                <div className="d-flex align-items-center leftIcon">
                                    {/* <span className="me-2 p-2 rounded-circle bg bg-white">
                                        <FaSistrix
                                            size="1.4rem"
                                            color="grey"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#searchstaticBackdrop"
                                            className="pointer"
                                        />
                                    </span> */}
                                    <span className="d-flex align-items-center justify-content-end">
                                        <div className="d-flex align-items-center my-3">
                                            <span className="me-2 dropdown">
                                                <span 
                                                    className="dropdown-toggle d-flex align-items-center" 
                                                    data-bs-toggle="dropdown" 
                                                    aria-expanded="false">
                                                    <LetteredAvatar
                                                        backgroundColor="brown"
                                                        color="white"
                                                        size={38}
                                                        className="fs-6"
                                                        fontSize="1rem"
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
                                    <Modal
                                        body={<SearchView/>}
                                        id="searchstaticBackdrop"
                                    />
                                </div>
                            </div>
                             {/* Route Children */}
                            <div className="children mb-2">
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
            <AlertModal
                title="Log Out Confirmation"
                body={
                    <div className="d-flex">
                        <span className="me-2">
                            <FaExclamationTriangle
                                size="1.5rem"
                                color="#dc3545"
                            />
                        </span>
                        <span>Are you sure you want to log Out?</span>
                    </div>
                }
                handleClick={handleLogOut}
            />
        </div>
    )
    
}