import { FaArrowLeft } from "react-icons/fa";

export const ModalContentSecondView =({
    setModalView,
    modalView
})=>{
    const arr =[
        {
            title:"Welcome New Subscribers",
            subtitle:"Introduce yourself| your organization to people when they sign up for your audience",
            id:1
        },
        {
            title:"Say Happy birthday",
            subtitle:"Celebrate with an exclusive offer or cheerful message that sends based on the birthday field in your audience.",
            id:2
        },
        {
            title:"Subscriber added date",
            subtitle:"Send an email based on when a subscriber joined your audience.",
            id:3
        },
        {
            title:"Specific date",
            subtitle:"Send a one-time message based on an individual date field, like an appointment.",
            id:4
        },
        {
            title:"Say goodbye to subscriber",
            subtitle:"Send an email to say sorry when a subscriber unsubscribe from your audience.",
            id:5
        },
        {
            title:"API 3.0",
            subtitle:"Trigger an email series with an API call from your application, if you've got a developer on hand.",
            id:6
        },
        {
            title:"Weekly recurring",
            subtitle:"Schedule your campaign to automatically send on a weekly basis, on a particular week day you choose.",
            id:7
        },
        {
            title:"Monthly recurring",
            subtitle:"Schedule your campaign to automatically send on a monthly basis, on a particular day of the month",
            id:8
        }
    ]


    return(
        <>
            <FaArrowLeft
                onClick={
                    ()=>setModalView({
                        name:"first",
                        id:null
                    })
                }
            />
            <div className="row">
                {
                    arr?.map((item,index)=>{
                        const{
                            title,
                            subtitle,
                            id
                        }=item;
                        if(id === modalView.id){
                            return(
                                <div 
                                    className="col-md-12 col-sm-12 col-xs-12"
                                    key={index}                                
                                >
                                    <div className="border rounded d-flex flex-column align-items-center p-3 m-2 justify-content-center">
                                        <p>{modalView.id}</p>
                                        <p className="fw-bold text-center">{title}</p>
                                        <p className="fs-6 text-center">{subtitle}</p>
                                    </div>  
                                </div>
                            )
                        }
                        
                    })
                }
            </div>
        </>
        
    )
}