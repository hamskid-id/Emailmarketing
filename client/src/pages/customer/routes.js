import { FaQuestionCircle, FaRegFolderOpen, FaShippingFast, FaUserCog,FaHome,FaPaperPlane,FaRegClock,FaThList,FaSync,FaTable } from "react-icons/fa";
export const AccordionsRoutes =[
    {
        id:"collapseOne",
        icon:<FaThList
                size="1.5rem"
                color="white"
            />,
        name:"Lists",
        subName:[
            "Overview",
            "Lists",
            "Subscribers",
            "Segments",
            "Tags",
            "Collaborations",
            "Forms"
        ]
    },
    {
        id:"collapseTwo",
        icon:<FaSync
                size="1.5rem"
                color="white"
            />,
        name:"Sending",
        subName:[
            "Sending domains",
            "Tracking domains",
            "Blacklist"
        ]
    }
]
export const ListRoute=[
    {
        icon:<FaHome
                size="1.5rem"
                color="white"
            />,
        name:"DashBoard",
        route:"/"
    },
    {
        icon:<FaPaperPlane
        size="1.5rem"
        color="white"
    />,
        name:"Campaigns" ,
        route:"/campaigns"   
    },
    {
        icon:<FaRegClock
        size="1.5rem"
        color="white"
    />,
        name:"Automations",
        route:"/automations"    
    },
    {
        icon:<FaTable
        size="1.5rem"
        color="white"
    />,
        name:"Templates",
        route:"/templates"     
    },
    {
        icon:<FaUserCog
        size="1.5rem"
        color="white"
    />,
        name:"Campaign api",
        route:"/campaignApi"      
    }
    
]