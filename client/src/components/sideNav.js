import { dashboardRoutes } from "../pages/routes";
import {FaMailchimp,FaMonero,FaRegEdit,FaTimesCircle} from "react-icons/fa";
import LetteredAvatar from 'react-lettered-avatar';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOutUser } from "../store/authSlice";

export const SideNav =({navToggler})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const hideNav =()=>{
        navToggler.current.classList.remove("active");
    }
    const handleLogOut =()=>{
        dispatch(LogOutUser(null));
        navigate("/auth/login")
    }
    return(
        <>
            <div className="d-flex justify-content-between align-items-center py-3">
                <span>
                    <FaMonero
                        size="3rem"
                        color="white"
                        onClick={
                            ()=>navigate("/")
                        }
                    />
                </span>
                <span className="hide-toggler">
                    <FaTimesCircle
                        size="2rem"
                        color="white"
                        onClick={hideNav}
                    />
                </span>
            </div>
            <div className="d-flex align-items-center"
                onClick={
                    ()=>navigate("/wizard/template")
                }
            >
                <span className="me-3 create-btn rounded-circle">
                    <FaRegEdit
                        color="black"
                        size="1.5rem"
                    />
                </span>
                <span className="fs-6 fw-bold text-white">
                    Create
                </span>
            </div>
            <div className="dashSideNav">
                {
                    dashboardRoutes.map((route, index)=>{
                        const {
                            icon,
                            name,
                            subName,
                            id
                        }=route;
                        return(
                            <div className="d-flex align-items-center" key={index}>
                                <div 
                                    className="accordion" 
                                    id="accordionExample"
                                >
                                    <div className="accordion-item bg-slate-grey">
                                        <div className="d-flex align-items-center">
                                            <span className="me-3">
                                                {icon}
                                            </span>
                                            <h2 
                                                className="accordion-header w-100" 
                                                id="headingOne"
                                            >
                                            <button className="accordion-button"
                                                type="button" 
                                                data-bs-toggle="collapse" 
                                                data-bs-target={`#${id}`}
                                                aria-expanded="false" 
                                                aria-controls={id}>
                                                {name}
                                            </button>
                                            </h2>
                                        </div>
                                        <div id={id}
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                        <div className="accordion-body">
                                            <div className="d-flex flex-column justify-content-center">
                                                {
                                                    subName.map((link,index)=>{
                                                        return(
                                                            <Link
                                                                key={index} 
                                                                to={`/${name}/${link}`}
                                                                className="decoration-none"
                                                            >
                                                                {link}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex align-items-center my-3">
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
                        {/* <li>
                            <h6 
                                className="dropdown-item" 
                                >
                                    Invite Users
                            </h6>
                        </li> */}
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
        </>
    )
    
}