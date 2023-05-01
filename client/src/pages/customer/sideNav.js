import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AccordionsRoutes, ListRoute } from "./routes";
import { motion } from "framer-motion";
import { Brand } from "../../components/navbarbrand";
import { AiOutlineLogout } from "react-icons/ai";

export const SideNav =({navToggler,showNavToggler,setShowNavToggler})=>{
    const navigate = useNavigate();
    const hideNav =()=>{
        setShowNavToggler(false)
        setTimeout(()=>{
            navToggler.current.classList.remove("active");
            setShowNavToggler(null)
        },400)
       
    }
    const variants = {
        open: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                staggerChildren: 0.07, 
                delayChildren: 0.2 
            } 
        },
        default: { 
            opacity: 1
        },
        closed: {
             opacity: 0, 
             x: "-100%",
             transition: { 
                staggerChildren: 0.05, 
                staggerDirection: -1 
            } },
    }
    return(
        <motion.div
            animate={
                showNavToggler? "open": 
                showNavToggler===false ? 
                "closed":"default"
            }
            variants={variants}
        >
            <div className="d-flex justify-content-between align-items-center py-3 mb-2">
                <span className="d-flex align-items-center">
                   <Brand
                        handleClick={()=>navigate("/")}
                        iconColor="white"
                   />
                </span>
                <span className="hide-toggler">
                    <AiOutlineClose
                        size="1rem"
                        color="white"
                        onClick={hideNav}
                    />
                </span>
            </div>
            <div className="dashSideNav">
                {
                     ListRoute.map((uniqueroute, index)=>{
                        const {
                            icon,
                            name,
                            route
                        }=uniqueroute;
                        return(                            
                            <div 
                                className="d-flex align-items-center mb-4 pointer" 
                                key={index}
                                onClick={
                                    ()=>navigate(route)
                                }
                            >
                                <span className="me-3">
                                    {icon}
                                </span>
                                <h2 
                                    className="text-white fs-6 w-100 mb-0" 
                                    id="headingOne"
                                >
                                    {name}
                                </h2>
                            </div>
                        )
                    })
                }
                {
                    AccordionsRoutes.map((route, index)=>{
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
                                    <div className="accordion-item">
                                        <div className="d-flex align-items-center">
                                            <span >
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
            <div 
                className="d-flex flex-column justify-content-center align-items-center  btn"
                data-bs-toggle="modal" 
                data-bs-target="#alertStaticBackdrop"
                onClick={()=>navToggler.current.classList.remove("active")}
            >
                <span className="me-2 mb-2">
                    <AiOutlineLogout
                        color="white"
                        size="1.3rem"
                    />
                </span>
                <span>
                    <h6 className="fs-6 text-white mb-0">Sign Out</h6>
                </span>
            </div>
        </motion.div>
    )
    
}