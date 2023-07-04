import { AiOutlineSend,AiOutlineBars,AiOutlineHome,AiOutlineLayout,AiOutlineRadiusSetting } from "react-icons/ai";
export const AccordionsRoutes =[
    {
        id:"collapseOne",
        icon:<AiOutlineBars
                size="1.1rem"
                color="white"
            />,
        name:"Lists",
        subName:[
            "Overview",
            "Lists",
            "Subscribers",
            "Unsubscribe",
            "Spam Report",
            "Tags",
            "Collaborations",
            "Invites"
        ]
    },
    {
        id:"collapseTwo",
        icon:<AiOutlineRadiusSetting
                size="1.1rem"
                color="white"
            />,
        name:"Sending",
        subName:[
            // "Sending domains",
            // "Tracking domains",
            "Blacklist"
        ]
    }
]
export const ListRoute=[
    {
        icon:<AiOutlineHome
                size="1.1rem"
                color="white"
            />,
        name:"DashBoard",
        route:"/"
    },
    {
        icon:<AiOutlineSend
        size="1.1rem"
        color="white"
    />,
        name:"Campaigns" ,
        route:"/campaigns"   
    },
    {
        icon:<AiOutlineLayout
        size="1.1rem"
        color="white"
    />,
        name:"Templates",
        route:"/templates"     
    }
    
]