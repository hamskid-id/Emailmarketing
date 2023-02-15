export const Insight =()=>{
    return(
        <>
            <div className="d-flex align-items-center">
                <p>Your automation stats overview</p>
                <p>Started: 3 years ago</p>
            </div>
            <div className="w-overflow d-flex justify-content-between border rounded mb-3">
                {
                    [
                        {
                            num:500,
                            name:"subscribers"
                        },{
                            num:227,
                            name:"Involved"
                        },{
                            num:"47%",
                            name:"% complete"
                        }
                    ].map((stat,index)=>{
                        const{
                            num,
                            name
                        }=stat
                        return(
                            <div 
                                key={index}
                                className={`p-2 d-flex flex-column align-items-center wt-12
                                    ${index ===1?`border`:null}`
                                }
                            >
                                <p className="fs-4 fw-bold">{num}</p>
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p>Below is the insight of your campaign performance and how users respond to your campaign</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h6 className="fs-6 fw-bold">Welcome new subscribers</h6>
                        <h6 className="fs-6">227 triggered</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6 className="fs-56fw-bold">3 years ago</h6>
                            <h6 className="fs-6">Last Updated</h6>
                        </div>
                        <div className="fs-4 fw-bold">
                            45%
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}