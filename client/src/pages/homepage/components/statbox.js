import { FaAirbnb, FaCodiepie, FaCreativeCommonsBy, FaHandPeace } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const StatBox =()=>{
    const navigate = useNavigate();
    const statDetails=[
        {
            name:"Campaign",
            amount:10,
            icon:<FaCodiepie
                color="darkslategrey"
            />,
            route:"/campaigns/All campaigns"

        },
        {
            name:"Subscriptions",
            amount:20,
            icon:<FaHandPeace
                color="darkslategrey"
            />,
            route:"/Audience/Subscribers"
        },
        {
            name:"Collaborations",
            amount:30,
            icon:<FaCreativeCommonsBy
                color="darkslategrey"
            />,
            route:"/Audience/Subscribers"
        },
        {
            name:"Tags",
            amount:40,
            icon:<FaAirbnb
                color="darkslategrey"
            />,
            route:"/Audience/Tags"
        }
    ]
    return(
        <div className="d-flex justify-content-between w-overflow">
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
                            className="bg-slate-grey rounded">
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