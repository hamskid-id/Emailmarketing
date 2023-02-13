import { Layout } from "../layoute"
import { ProfileView } from "./components.js/profileView"

export const ProfilePage=()=>{
    return(
        <Layout
            routeChildren={ <ProfileView/>  }
        />
    )
}