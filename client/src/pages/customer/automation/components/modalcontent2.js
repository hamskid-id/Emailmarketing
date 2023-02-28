import { FaArrowLeft } from "react-icons/fa";
import { MonthlyRecurring } from "./automationForms/monthlyrecurring";
import { SayGoodByeToSubscriber } from "./automationForms/sayGoodbye";
import { SayHappyBirthDay } from "./automationForms/sayHappyBirsthday";
import { SpecificDate } from "./automationForms/specificdate";
import { SubscriberAddedDate } from "./automationForms/subscriberAddeddate";
import { WeeklyRecurring } from "./automationForms/weeklyrecurring";
import { WelcoemNewSub } from "./automationForms/welocomenewSub";

export const ModalContentSecondView =({
    setModalView,
    modalView
})=>{
    const arr =[
        {
            component:<WelcoemNewSub
                setModalView={setModalView}
            />,
            id:1
        },
        {
            component:<SayHappyBirthDay
                setModalView={setModalView}          
            />,
            id:2
        },
        {
            component:<SubscriberAddedDate
                setModalView={setModalView}
            />,
            id:3
        },
        {
            component:<SpecificDate
                setModalView={setModalView}
            />,
            id:4
        },
        {
            component:<SayGoodByeToSubscriber
                setModalView={setModalView}
            />,
            id:5
        },
        {
            component:<SayGoodByeToSubscriber
                setModalView={setModalView}
            />,
            id:6
        },
        {
            component:<WeeklyRecurring
                setModalView={setModalView}
            />,
            id:7
        },
        {
            component:<MonthlyRecurring
                setModalView={setModalView}
            />,
            id:8
        }
    ]


    return(
        <div className="wt-50 rounded shadow d-flex flex-column m-auto p-3">
            <FaArrowLeft
                onClick={
                    ()=>setModalView({
                        name:"first",
                        id:null
                    })
                }
            />
            <hr className="b-grey"/>
            <div className="row">
                {
                    arr?.map((item,index)=>{
                        const{
                            component,
                            id
                        }=item;
                        if(id === modalView.id){
                            return(
                                <div 
                                    className="col-md-12 col-sm-12 col-xs-12"
                                    key={index}                                
                                >
                                    {component}
                                </div>
                            )
                        }
                        
                    })
                }
            </div>
        </div>
        
    )
}