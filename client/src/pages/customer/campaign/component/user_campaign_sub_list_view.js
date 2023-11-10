import { Layout } from "../../layoute";
import { User_Campaign_sub_list } from "./user_campaign_sub_list";

export const User_Campaign_sub_list_view =()=>{
    return(
        <>
            <Layout
                routeChildren={<User_Campaign_sub_list/>}
            />
        </>
    )
}