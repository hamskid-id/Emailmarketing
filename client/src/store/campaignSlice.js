import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl } from './api';

export const GetCampaigns = createAsyncThunk(
    'campaign/GetCampaigns ', 
    async ({rejectWithValue}) =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewcamps`
        )
        return response?.data
    } catch(err){
        console.log(
            err.response?.data
        )
        return rejectWithValue(
            err.response?.data
        )
        }
    }
)

export const CreateCampaigns  = createAsyncThunk(
    'campaign/CreateCampaigns ', 
    async ({
        title,
        recipient,
        from,
        subject,
        content
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createcampaign`,{
                title,
                recipient,
                from,
                subject,
                content
            }
        )
        return response?.data
    } catch(err){
        console.log(
            err.response?.data
        )
        return rejectWithValue(
            err.response?.data
        )
        }
    }
)


const campaign_Slice = createSlice({
    name:"campaign",
    initialState: {
        Campaigns:[],
        CreateCampaignsStatus:'',
        CreateCampaignsError:'',
        GetCampaignsStatus:'',
        GetCampaignsError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetCampaigns.pending,(state, action)=>{
            return {
                ...state,
                GetCampaignsStatus:'pending'
            }

        });
        builder.addCase(GetCampaigns.fulfilled,(state, action)=>{
            if(action.payload){
                return{
                    ...state,
                    Campaigns:action.payload,
                    GetCampaignsStatus:"success"
                }
            }else return state
        })
        builder.addCase(GetCampaigns.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                GetCampaignsStatus:'rejected',
                GetCampaignsError:action.payload
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
                toast("Campaign successfully created")
                return{
                    ...state,
                    CreateCampaignsStatus:"success"
                }
            }else return state
        })
        builder.addCase(CreateCampaigns.rejected,(state, action)=>{
            toast(action.payload);
            return{
                ...state,
                CreateCampaignsStatus:'rejected',
                CreateCampaignsError:action.payload
            }
        })
    }
})


export default campaign_Slice;