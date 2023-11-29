import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';


export const GetRecentCampaigns = createAsyncThunk(
    'campaign/GetRecentCampaigns ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/recentcamp`,
                setHeaders()
        )
        return response?.data
    } catch(err){
        return err.response?.data
        }
    }
)


export const DeleteCampaigns = createAsyncThunk(
    'campaign/DeleteCampaigns', 
    async ({id},{dispatch}) =>{
    try{
        const response = await axios.delete(
            `${apiBaseUrl}/deletecamp/${id}`,
                setHeaders()
        )
        if(response?.data?.status){
            dispatch(GetCampaigns());
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)

export const GetCampaigns = createAsyncThunk(
    'campaign/GetCampaigns ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewcamps`,
                setHeaders()
        )
        return response?.data
    } catch(err){
        return err.response?.data
        }
    }
)

export const GetSentCampaigns = createAsyncThunk(
    'campaign/GetSentCampaigns', 
    async () =>{
    try{
        const response = await axios.get(
            `https://emailservice.cheapmailing.com.ng/api/v1/track-campaign`,
                setHeaders()
        )
        return response?.data
    } catch(err){
        return err.response?.data
        }
    }
)

export const CreateCampaigns  = createAsyncThunk(
    'campaign/CreateCampaigns', 
    async ({
        title,
        reply_to,
        from_title,
        subject,
        content,
        tag_id,
        from_name,
        from_email,
        content_type,
        schedule_date,
        status
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createcampaigns`,{
                title,
                reply_to,
                from_title,
                from_name,
                from_email,
                subject,
                content,
                tag_id,
                content_type,
                schedule_date,
                status
            },
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(UpdateActivities({
                action:`New Campaign "${title}" was created`
            }));
        }
        
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)


const campaign_Slice = createSlice({
    name:"campaign",
    initialState: {
        recentCampaigns:[],
        // list:[],
        Campaigns:[],
        sentCampaigns:{},
        campaignToFilter:[],
        CreateListStatus:'',
        deleteStatus:"",
        CreateListError:'',
        CreateCampaignsStatus:'',
        CreateCampaignsError:'',
        GetCampaignsStatus:'',
        GetCampaignsError:'',
        GetSentCampaignsStatus:'',
        GetSentCampaignsError:'',
        GetListStatus:'',
        GetListError:'',
        GetRecentCampaignsStatus:'',
        GetRecentCampaignsError:''
    },
    reducers:{
        sortDataByTitle(state,action){
            const newArray=[...state.campaignToFilter]
            const sortByTitle =  newArray.sort((a, b)=> (a.title < b.title ) ? -1 : (a.title > b.title) ? 1 : 0);
            return{
                ...state,
                Campaigns:sortByTitle
            }    
        },
        sortDataByEmail(state,action){
            const newArray=[...state.campaignToFilter]
            const sortByName =  newArray.sort((a, b)=> (a.from_email < b.from_email) ? -1 : (a.from_email > b.from_email) ? 1 : 0);
            return{
                ...state,
                Campaigns:sortByName
            }        
        },
        searchdata(state,action){
            const data=action.payload;
            const filteredData = state.campaignToFilter.filter((item)=>item.title.toLowerCase().includes(data.toLowerCase()));
            return{
                ...state,
                Campaigns:filteredData
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(GetRecentCampaigns.pending,(state, action)=>{
            return {
                ...state,
                GetRecentCampaignsStatus:'pending'
            }

        });

        builder.addCase(GetRecentCampaigns.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        recentCampaigns: message,
                        GetRecentCampaignsStatus:"success"
                    }
                }else{
                    return{
                    ...state,
                    GetRecentCampaignsStatus:"failed"
                    }
                }
            }else return{
                ...state,
                GetRecentCampaignsStatus:"failed"
            }
        })

        builder.addCase(GetRecentCampaigns.rejected,(state, action)=>{
            return{
                ...state,
                GetRecentCampaignsStatus:'rejected'
            }
        })

        builder.addCase(GetCampaigns.pending,(state, action)=>{
            return {
                ...state,
                GetCampaignsStatus:'pending'
            }

        });
        builder.addCase(GetCampaigns.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        Campaigns: message,
                        campaignToFilter: message,
                        GetCampaignsStatus:"success"
                    }
                }return{
                    ...state,
                    GetCampaignsStatus:"success"
                }
            }else return{
                ...state,
                GetCampaignsStatus:"failed"
            }
        })
        builder.addCase(GetCampaigns.rejected,(state, action)=>{
            return{
                ...state,
                GetCampaignsStatus:'rejected'
            }
        })

        builder.addCase(GetSentCampaigns.pending,(state, action)=>{
            return {
                ...state,
                GetSentCampaignsStatus:'pending'
            }

        });
        builder.addCase(GetSentCampaigns.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    data
                }= action.payload
                if(data){
                    return{
                        ...state,
                        sentCampaigns: data,
                        GetSentCampaignsStatus:"success"
                    }
                }return{
                    ...state,
                    GetSentCampaignsStatus:"success"
                }
            }else return{
                ...state,
                GetSentCampaignsStatus:"failed"
            }
        })
        builder.addCase(GetSentCampaigns.rejected,(state, action)=>{
            return{
                ...state,
                GetSentCampaignsStatus:'rejected'
            }
        })

        builder.addCase(DeleteCampaigns.pending,(state, action)=>{
            return {
                ...state,
                deleteStatus:'pending'
            }

        });
        builder.addCase(DeleteCampaigns.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message)
                    return{
                        ...state,
                        deleteStatus:"success"
                        }
                }else{
                    toast.error(message)
                    return{
                    ...state,
                    deleteStatus:"failed"
                    }
                }
            }else return{
                ...state,
                deleteStatus:"failed"
            }
        })
        builder.addCase(DeleteCampaigns.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                deleteStatus:'rejected'
            }
        })

        builder.addCase(CreateCampaigns.pending,(state, action)=>{
            return {
                ...state,
                CreateCampaignsStatus:'pending'
            }

        });
        builder.addCase(CreateCampaigns.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message);
                    localStorage.removeItem('templateInfo')
                    window.location.replace("/campaigns_status")
                    return{
                        ...state,
                        CreateCampaignsStatus:"success"
                    }
                }else {
                    toast.error(message)
                    return{
                    ...state,
                    CreateCampaignsStatus:"failed"
                    }
                }
            }else return{
                ...state,
                CreateCampaignsStatus:"failed"
            }
        })
        builder.addCase(CreateCampaigns.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                CreateCampaignsStatus:'rejected'
            }
        })
    }
})

export const campaign_SliceActions = campaign_Slice.actions;
export default campaign_Slice;