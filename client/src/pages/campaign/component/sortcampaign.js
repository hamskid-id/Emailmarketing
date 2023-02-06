export const SortCampaign =()=>{
    return(
        <div className="d-flex">
            <label 
                htmlFor="sort"
                className="me-3"
            >
                Sort By
            </label>
            <select 
                className="form-select" 
                aria-label="Default select example">
                <option
                    selected 
                    value="last Updated"
                >
                    Last Updated
                </option>
                <option 
                    value="creation date">
                    Creation date
                </option>
            </select>
        </div>
    )
}