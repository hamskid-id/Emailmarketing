import { FaQuestionCircle, FaRegFolderOpen, FaShippingFast, FaUsers } from "react-icons/fa";
export const dashboardRoutes =[
    {
        id:"collapseOne",
        icon:<FaShippingFast
                size="1.5rem"
                color="white"
            />,
        name:"campaigns",
        subName:[
            "All campaigns",
            // "campaigns manager",
            "email template"
        ]
    },
    {
        id:"collapseTwo",
        icon:<FaUsers
            size="1.5rem"
            color="white"
        />,
        name:"Audience",
        subName:[
            "Inbox",
            "Subscribers",
            "Tags",
            // "segments"
        ]
    },
    {
        id:"collapseThree",
        icon:<FaRegFolderOpen
            size="1.5rem"
            color="white"
        />,
        name:"Content",
        subName:[
            "My Files",
            "Product",
            "My logo"
        ]
    },
    {
        id:"collapseFour",
        icon:<FaQuestionCircle
            size="1.5rem"
            color="white"
        />,
        name:"Help",
        subName:[
            "Help and support",
            "Hire an expert",
            "Getting started video"
        ]
    }
]