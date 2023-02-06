import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNotifications } from "../../store/notificationSlice";
export const Inboxes =()=>{
    const notification = useSelector(
        state => state.notification
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetNotifications(null));
    },[dispatch])
    return(
        <div>
            <p 
                className="fw-bold fs-4 bg bg-white p-3"
            >
                Manage your notifications
            </p>
            
            <div className="ghost-white mt-2 px-3 py-2 bg-fade">
                {
                    notification
                        .Notifications.length ===0 && (
                            <p>You do not have any recent notifications</p>
                        )
                }
                {
                    notification
                        .Notifications?.map((not,index)=>{
                            const{
                                content,
                                email,
                                password,
                                dashboardLink
                            }=not
                            return(
                                <div key={index}>
                                    <p 
                                        className="text-danger fw-bold"
                                    >
                                        unread
                                    </p>
                                    <div className="border-bottom py-1">
                                        <img 
                                            src="https://res.cloudinary.com/hamskid/image/upload/v1675342684/Frame_156_bjikra.svg"
                                            alt="object not found"
                                        />
                                    </div>
                                    <p>
                                        Content: {content}
                                    </p>
                                    <p>
                                        Email: {email}
                                    </p>
                                    <p>
                                        Password: {password}
                                    </p>
                                    <p className="find">
                                        Find below the link to access the dashboard of the user that invited you so you can collaborate with them
                                    </p>
                                    <p 
                                        className="text-success"
                                    >
                                        {dashboardLink}
                                    </p>
                                </div>
                            )
                        }
                    )
                }
                
            </div>
        </div>
    )
}