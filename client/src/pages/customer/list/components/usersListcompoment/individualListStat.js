
export const IndividualListStat =()=>{
    const statDetails=[
        {
            name:"Avg subscribe rate",
            amount:100

        },
        {
            name:"Avg unsubscribe rate",
            amount:0.00
        },
        {
            name:"Total unconfirmed",
            amount:0
        },
        {
            name:"Total unsubscribers",
            amount:0
        }
    ]
    return(
        <>
        <div className="d-flex justify-content-between overflow-x mb-5 w-89">
            {
                statDetails?.map((stat,index)=>{
                    const{
                        name,
                        amount
                    }=stat
                    return(
                        <div 
                            key={index}
                            className="b-grey rounded">
                            <div 
                                className="m-2 rounded shadow p-2 w-15 b-grey d-flex flex-column align-items-center"
                            >
                                <p className="fw-bold display-6 text-white">
                                    {amount}
                                </p>
                                <p className="fw-bold text-white">
                                    {name}
                                </p>
                            </div>
                        </div>
                    )

                })
            }
        </div>
        </>
    )
}