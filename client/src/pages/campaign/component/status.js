import { FaCalendarCheck, FaCheckDouble, FaDiceD20, FaDolly, FaEnvelopeOpenText, FaFileInvoice, FaIdCard, FaPeopleArrows } from "react-icons/fa";

export const status =[
    {
        text:"All",
        icon:<FaCalendarCheck
         size="1.5rem"
         color="grey"
         />
    },
    {
        text:"Ongoing",
        icon:<FaDiceD20
         size="1.5rem"
         color="grey"
         />
    },
    {
        text:"Draft",
        icon:<FaFileInvoice
         size="1.5rem"
         color="grey"
         />
    },
    {
        text:"Completed",
        icon:<FaCheckDouble
         size="1.5rem"
         color="grey"
         />
    }
]

export const Types =[
    {
        text:"Emails",
        icon:<FaEnvelopeOpenText
         size="1.5rem"
         color="grey"
         />
    },
    {
        text:"Ads",
        icon:<FaDolly
         size="1.5rem"
         color="grey"
         />
    },
    {
        text:"Surveys",
        icon:<FaIdCard
         size="1.5rem"
         color="grey"
         />
    },
    {
        text:"Social Posts",
        icon:<FaPeopleArrows
         size="1.5rem"
         color="grey"
         />
    }
]