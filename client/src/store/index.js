import { configureStore } from "@reduxjs/toolkit";
import auth_Slice from './authSlice';
import campaign_Slice from "./campaignSlice";
import collab_Slice from "./collaborationSlice";
import notification_Slice from "./notificationSlice";
import subscriber_Slice from "./subscriberSlice";
import Tag_Slice from "./tagSlice";

const store = configureStore({
    reducer:{
        auth: auth_Slice.reducer,
        subscriber:subscriber_Slice.reducer,
        collab:collab_Slice.reducer,
        campaign:campaign_Slice.reducer,
        tag:Tag_Slice.reducer,
        notification:notification_Slice.reducer
    }
});
export default store;