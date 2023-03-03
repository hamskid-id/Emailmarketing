import { configureStore } from "@reduxjs/toolkit";
import activities_Slice, { GetActivities } from "./activitiesSlice";
import auth_Slice from './authSlice';
import blacklist_Slice from "./BlacklistedSlice";
import campaign_Slice, { GetRecentCampaigns } from "./campaignSlice";
import collab_Slice from "./collaborationSlice";
import notification_Slice from "./notificationSlice";
import SpamReported_Slice from "./SpamReportedSlice";
import subscriber_Slice from "./subscriberSlice";
import Tag_Slice, { GetTags } from "./tagSlice";
import template_Slice from "./templateSlice";
import unsubscriber_Slice from "./UnsubscribeSlice";

const store = configureStore({
    reducer:{
        auth: auth_Slice.reducer,
        subscriber:subscriber_Slice.reducer,
        collab:collab_Slice.reducer,
        campaign:campaign_Slice.reducer,
        blacklist:blacklist_Slice.reducer,
        unsubscriber:unsubscriber_Slice.reducer,
        activities:activities_Slice.reducer,
        template:template_Slice.reducer,
        SpamReported:SpamReported_Slice.reducer,
        tag:Tag_Slice.reducer,
        notification:notification_Slice.reducer
    }
});

store.dispatch(GetActivities(null));
store.dispatch(GetTags(null))
store.dispatch(GetRecentCampaigns(null))
export default store;