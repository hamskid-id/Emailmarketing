export const SearchCampaign =()=>{
    return(
        <div>
            <input
                className="wt-75 p-2 border-ghostwhite"
                type="text"
                placeholder="Find a campaign by name or by type"
            />
            <div>
                you can also search by 
                <span className="text-success ms-2">
                    all audience
                </span>
            </div>
        </div>
    )
}