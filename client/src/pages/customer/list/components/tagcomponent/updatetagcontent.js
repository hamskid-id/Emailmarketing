import { FaTags } from "react-icons/fa"
import { TagContainer } from "./tagstable"
import { UpdateTagForm } from "./updatetagform"
import { Tablelayout } from "../tableContentLayout"

export const UpdateTagsContent =()=>{
    return(
        <>
            <Tablelayout
                title="Update Tags"
                titleIcon={
                    <FaTags
                        size="1.5rem"
                        color='grey'
                    />
                }
                tableContainer={<UpdateTagForm/>}
            />
        </>
    )
}