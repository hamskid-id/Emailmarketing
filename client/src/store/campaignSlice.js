import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';


export const GetRecentCampaigns = createAsyncThunk(
    'campaign/GetRecentCampaigns ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/recentcamp`,
                setHeaders()
        )
        console.log(
           response?.data
        )
        return response?.data
    } catch(err){
            console.log(
                err.response?.data
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
        console.log(
           response?.data
        )
        return response?.data
    } catch(err){
            console.log(
                err.response?.data
            )
        }
    }
)

export const CreateCampaigns  = createAsyncThunk(
    'campaign/CreateCampaigns', 
    async ({
        title,
        receipient,
        from_email,
        subject,
        content,
        tag_id,
        content_type,
        schedule_date,
        status
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createcampaigns`,{
                title,
                receipient,
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
        return response?.data
    } catch(err){
        console.log(
            err.response?.data
        )
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)


const campaign_Slice = createSlice({
    name:"campaign",
    initialState: {
        recentCampaigns:[],
        Campaigns:[],
        CreateCampaignsStatus:'',
        CreateCampaignsError:'',
        GetCampaignsStatus:'',
        GetCampaignsError:'',
        GetRecentCampaignsStatus:'',
        GetRecentCampaignsError:''
    },
    reducers:{},

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
                    status
                }= action.payload
                if(status === true){
                    console.log("recent",action.payload.message)
                    return{
                        ...state,
                        recentCampaigns:action.payload.message,
                        GetRecentCampaignsStatus:"success"
                    }
                }
                return{
                    ...state,
                    GetRecentCampaignsStatus:"success"
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
                    status
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        Campaigns:action.payload.message,
                        GetCampaignsStatus:"success"
                    }
                }
                return{
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

        builder.addCase(CreateCampaigns.pending,(state, action)=>{
            return {
                ...state,
                CreateCampaignsStatus:'pending'
            }

        });
        builder.addCase(CreateCampaigns.fulfilled,(state, action)=>{
            if(action.payload){
                toast("Campaign successfully created");
                return{
                    ...state,
                    CreateCampaignsStatus:"success"
                }
            }else return{
                ...state,
                CreateCampaignsStatus:"failed"
            }
        })
        builder.addCase(CreateCampaigns.rejected,(state, action)=>{
            return{
                ...state,
                CreateCampaignsStatus:'rejected'
            }
        })
    }
})


export default campaign_Slice;