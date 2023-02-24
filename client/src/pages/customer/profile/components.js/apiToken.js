import { CustomFormField } from "../../../../components/customFomField"

export const ApiToken=()=>{
    return(
        <div className="wt-50">
            <div className="d-flex flex-column mb-2">
                <label
                    className="fs-4"
                    htmlFor="docs"
                >
                API docs
                </label>
                <p 
                    id="docs"
                    className="text-danger fs-5"
                    >
                    https://demo.acellemail.com/frontend/docs/api/v1 link
                </p>
            </div>
            <div className="d-flex flex-column mb-2">
                <label
                    className="fs-4"
                    htmlFor="docs"
                >
                Your API token
                </label>
                <p 
                    id="docs"
                    className="text-danger fs-5"
                    >
                    OMVRVE986THjQZcqlNQXsogLKjtgEdTrEzsLtBfsRhyRrAhfWlu3aPhinQvK
                </p>
            </div>
            <div className="p-3 fs-6 text-white bg bg-primary rounded mb-3">
                You need to add parameter api_token=YOUR_API_TOKEN to each request to the API system
                Example: https://demo.acellemail.com/api/v1/lists?api_token=YOUR_API_TOKEN
            </div>
            <CustomFormField
                value="Renew Token"
                type="btn"
                loadingStatus="success"
            />
        </div>
    )
}