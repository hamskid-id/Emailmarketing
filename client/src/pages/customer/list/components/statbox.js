import { FaAirbnb, FaCodiepie, FaCreativeCommonsBy, FaHandPeace } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const SubscriberStat =()=>{
    const navigate = useNavigate();
    const statDetails=[
        {
            name:"Subsribers",
            amount:100,
            icon:<FaCodiepie
                color="goldenrod"
            />,
            route:"/campaigns/All campaigns"

        },
        {
            name:"Active Subsribers",
            amount:20,
            icon:<FaHandPeace
                color="goldenrod"
            />,
            route:"/Audience/Subscribers"
        },
        {
            name:"Forms",
            amount:3,
            icon:<FaCreativeCommonsBy
                color="goldenrod"
            />,
            route:"/Audience/Subscribers"
        },
        {
            name:"Blacklisted",
            amount:4,
            icon:<FaAirbnb
                color="goldenrod"
            />,
            route:"/Audience/Tags"
        }
    ]
    return(
        <div className="d-flex justify-content-between w-overflow mb-5 w-89">
            {
                statDetails?.map((stat,index)=>{
                    const{
                        name,
                        amount,
                        icon,
                        route
                    }=stat
                    return(
                        <div 
                            key={index}
                            className="bg-azur rounded">
                            <div 
                                className="m-2 rounded shadow p-2 border w-15 bg-white">
                                <p className="fw-bold">
                                    {name}
                                </p>
                                <p className="fw-bold display-6">
                                    {amount}
                                </p>
                                <div className="d-flex align-items-center justify-content-between wrap">
                                    <span 
                                        className="text-success fw-bold"
                                        onClick={
                                            ()=>navigate(route)
                                        }>
                                        see all {name}
                                    </span>
                                    <span className="p-1 rounded bg-lightblue">
                                        {icon}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )

                })
            }

        </div>
    )
}