import { FaSistrix } from "react-icons/fa"

export const SearchView=()=>{
    return(
        <div className="df-lex flex-column">
            <form className="d-flex w-100">
                <span className="w-100">
                    <input type="text" placeholder="enter search" className=" w-100 btn border p-2"/>
                </span>
                <span>
                    <FaSistrix
                        size="2.4rem"
                        color="grey"
                        className="btn border"
                    />
                </span>
                
            </form>
            <div>
                 search body
            </div>
        </div>
    )
}