import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';

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
            `${apiBaseUrl}/createcampaigns`,{
                title,
                recipient,
                from,
                subject,
                content
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