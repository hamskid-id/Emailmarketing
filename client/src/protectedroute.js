import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
    const location = useLocation();
    if (!localStorage.getItem("marketingUserToken")) {
        return (
            <Navigate 
                to="/auth/login" 
                state={{ 
                    from: location 
                }} 
                replace 
            />
        )    
    } else {
        let user = localStorage?.getItem("marketingUserToken");
        if (user) {
            return <Outlet/>;
        }
    }
    return (
        <Navigate
            to="/auth/login" 
            state={{ 
                from: location 
            }} 
            replace 
        />
    )
};