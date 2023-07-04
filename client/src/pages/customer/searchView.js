import { AiOutlineFileSearch } from "react-icons/ai"
import { FaSistrix } from "react-icons/fa"

export const SearchView=()=>{
    return(
        <div className="df-lex flex-column">
            <form className="d-flex w-100">
                <span className="w-100">
                    <input type="text" placeholder="enter search" className=" w-100 btn border p-2 bg-ddd"/>
                </span>
                <span>
                    <FaSistrix
                        size="2.4rem"
                        color="white"
                        className="btn border bg-slate-grey"
                    />
                </span>
            </form>
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center p-2 py-4">
                    <AiOutlineFileSearch
                        size="3rem"
                        color="#0d6efd"
                    />
                    <h6 className="mt-1">Type something to search for</h6>
                </div>
                 
            </div>
        </div>
    )
}