export const ListPerformance =()=>{
    const performace =[
        {
            name:"Average open rate",
            amount:"10%",
        },{
            name:"Average click rate",
            amount:"20%",
        }
    ]
    return(
        <>
            <p className="fs-2 mt-4">List performance</p>
            <div className="row mb-4">
                {
                    performace?.map((per,index)=>{
                        const{
                            name,
                            amount
                        }=per
                        return(
                            <div 
                                key={index}
                                className="col-md-6 mb-2"
                            >
                                <div className="pe-3">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-bold">
                                            {name}
                                        </span>
                                        <span>
                                            {amount}
                                        </span>
                                    </div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar bg-primary" 
                                            role="progressbar" 
                                            aria-label="Basic example" 
                                            aria-valuenow={amount} 
                                            style={{width:amount}}
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}