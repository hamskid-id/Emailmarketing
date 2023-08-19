import { AiOutlineAppstore, AiOutlineRadiusSetting } from "react-icons/ai";
import {FcTemplate,FcList,FcMindMap} from "react-icons/fc";
export const AccordionsRoutes =[
    {
        id:"collapseOne",
        icon:<FcList
                size="1.1rem"
                color="white"
            />,
        name:"Lists",
        subName:[
            "Overview",
            // "Lists",
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
                color="lightblue"
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
        icon:<AiOutlineAppstore
                size="1.1rem"
                color="lightblue"
            />,
        name:"DashBoard",
        route:"/"
    },
    {
        icon:<FcMindMap
        size="1.1rem"
        color="white"
    />,
        name:"Campaigns" ,
        route:"/campaigns"   
    },
    {
        icon:<FcTemplate
        size="1.1rem"
        color="white"
    />,
        name:"Templates",
        route:"/templates"     
    }
    
]