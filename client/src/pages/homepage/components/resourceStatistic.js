import { FaCheck, FaGg} from "react-icons/fa"

export const ResourceStatistics =()=>{
    const statistics =[
        {
            name:" Collaborations",
            number:1
        },
        {
            name:" Subscriptions",
            number:2
        },
        {
            name:" Admins",
            number:3
        },
        {
            name:" Campaigns",
            number:4
        },
        {
            name:" Tags",
            number:5
        },
    ]
    return(
        <div>
            <div className="d-flex align-items-center">
                <span className='me-3'>
                    <FaGg
                        size="0.8rem"
                        color="darkslategrey"
                    />
                </span>
                <span className='fw-bold fs-4'>
                    Resources statistics
                </span>
            </div>
            <div className='mb-3'>
                An overview of system resource usage
            </div>
            <div>
                {
                    statistics?.map((stat,index)=>{
                        const {
                            name,
                            number
                        } = stat
                        return(
                            <div 
                                className="d-flex align-items-end mb-2"
                                key={index}
                            >
                                <span className='me-3'>
                                    <FaCheck
                                        size="0.8rem"
                                        color="darkslategrey"
                                    />
                                </span>
                                <span className='fs-6 me-5'>
                                    {name}
                                </span>
                                <span className="fl-r">
                                    {number}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}