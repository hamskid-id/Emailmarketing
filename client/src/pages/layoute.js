import { useRef } from "react";
import  "../pages/homepage/home.css";
import { SideNav } from "../components/sideNav";
import { NavToggler } from "../components/navToggler";
import {useNavigate } from "react-router-dom";

export const Layout=({routeChildren,name})=>{
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
                <div className="col-md-10 dashboardvh bg-smoke pb-6">
                    {
                        name &&
                        (
                            <div>
                                <div className="d-flex justify-content-between p-4 navHeader">
                                    <span className="fs-4 fw-bold bg-blue">
                                        {name}
                                    </span>
                                    <div>
                                        <img 
                                            src="https://res.cloudinary.com/hamskid/image/upload/v1675341778/Vector_4_daatnj.svg"
                                            alt="object not found"
                                            onClick={
                                                ()=>navigate("/Audience/Inbox")
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        routeChildren
                    }
                    <NavToggler
                        showNav={showNav}
                    />
                </div>
            </div>
        </div>
    )
    
}