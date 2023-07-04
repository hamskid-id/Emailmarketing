import { useRef } from "react"
import { AiOutlineTags } from "react-icons/ai";
import { CreateTag } from "./tagsmodalcontent"
import { TagContainer } from "./tagstable"
import { Tablelayout } from "../tableContentLayout"

export const TagsContent =()=>{
    const hidemodal = useRef(null);
    return(
        <>
            <Tablelayout
                hidemodal={hidemodal}
                title="Tags"
                titleIcon={
                    <AiOutlineTags
                        size="1.5rem"
                        color='grey'
                    />
                }
                tableContainer={<TagContainer/>}
                modalBody={                  
                    <CreateTag
                        hidemodal={hidemodal}
                    />
                }
                modalTitle="Add Tags"
            />
        </>
    )
}