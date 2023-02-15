import { FaAlignRight, FaArrowLeft, FaBoxTissue, FaMonero, FaTimesCircle } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { LogOutUser } from "../../../../store/authSlice";
import LetteredAvatar from 'react-lettered-avatar';
import { useRef, useState } from "react";

export const Nav =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mobileNav = useRef(null)
    const handleLogOut =()=>{
        dispatch(LogOutUser(null));
        navigate("/auth/login")
    }
    const hideNav =()=>{
        mobileNav.current.classList.remove("active");
        setShowMobileNavToggler(false)
    }
    const showNav =()=>{
        mobileNav.current.classList.add("active");
        setShowMobileNavToggler(true)
    }
    const [
        showMobileNavToggler,
        setShowMobileNavToggler
    ]= useState(false);

    return(
        <div className="auth-nav bg-slate-grey px-3">
            <div className="d-flex align-items-center justify-content-between auto-mw">
                <div className="d-flex align-items-center">
                    <span>
                        <FaMonero
                            size="3rem"
                            color="white"
                            className="me-3"
                            onClick={
                                ()=>navigate("/")
                            }
                        />
                    </span>
                    <span
                        className="text-white"
                    >                   
                        New Sales Automation for VIP
                    </span>
                </div>
                <div className="navToggler">                   
                    {
                        showMobileNavToggler?
                            <FaTimesCircle
                                size="2rem"
                                color="white"
                                onClick={hideNav }

                            />:
                            <FaAlignRight
                                size="2rem"
                                color="white"
                                onClick={showNav }
                            />
                    }                   
                </div>
            </div>
            <div className="auth-mobile-nav" ref={mobileNav}>
                <div 
                    className="me-5 text-white"
                >
                    Last saved: 1 year ago
                </div>
                <div className="d-flex align-items-center me-5">
                    <span className="me-2">
                        <FaArrowLeft
                            color="white"
                            onClick={
                                ()=>navigate("/")
                            }
                        />
                    </span>
                    <span
                    className="text-white"
                    >
                        Go Back
                    </span>
                </div>               
                <div className="dropdown">
                    <div className="d-flex align-items-center me-5 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="me-2">
                            <FaBoxTissue
                                color="white"
                            />
                        </span>
                        <span
                            className="text-white"
                        >
                            Switch Automation
                        </span>
                    </div>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>              
                <div className="d-flex align-items-center my-3 me-5">
                    <span className="me-2 dropdown">
                        <span 
                            className="dropdown-toggle d-flex align-items-center" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                            <LetteredAvatar
                                backgroundColor="brown"
                                color="white"
                                name="Hamzat Avatar"
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
                            <li>
                                <h6 
                                    className="dropdown-item" 
                                    onClick={handleLogOut}
                                >
                                    Log Out
                                </h6>
                            </li>
                        </ul>
                    </span>
                    <span className="text-white">
                        Hamzat
                    </span>
                </div>
            </div>
        </div>
    )
}