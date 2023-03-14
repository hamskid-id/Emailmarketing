export const TopPerformance =()=>{
    return(
        <>
           <div className="d-flex justify-content-between wrap">
                <div className="wt-50 pe-3">
                    <p className="fs-4"> Subscribers with most opens</p>
                    {
                        [
                            { 
                                email:"adosal@hotmail.com",
                                amount:1
                            },
                            { 
                                email:"afrayer@frayer.com",
                                amount:1
                            }
                        ]?.map((activ,index)=>{
                            const{
                                email,
                                amount
                            }=activ
                            return(
                                <div 
                                    key={index} 
                                    className="d-flex justify-content-between py-2 dotted-buttom"
                                    >
                                    <span>{email}</span>
                                    <span>{amount}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="wt-50">
                    <p className="fs-4"> Top links clicked</p>
                    {
                        [
                            { 
                                link:"http://sales.sample.com/promotion",
                                amount:1
                            },
                            { 
                                link:"http://sales.sample.com/search=new",
                                amount:1
                            }
                        ]?.map((activ,index)=>{
                            const{
                                link,
                                amount
                            }=activ
                            return(
                                <div 
                                    key={index} 
                                    className="d-flex justify-content-between py-2 dotted-buttom"
                                    >
                                    <a href={link}>{link}</a>
                                    <span>{amount}</span>
                                </div>
                            )
                        })
                    }
                </div>
           </div>
        </>
    )
}