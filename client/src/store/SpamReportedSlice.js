import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';

export const GetSpamReported = createAsyncThunk(
    'SpamReported/GetSpamReported ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/list_spamreport`,
                setHeaders()
        )
        return response?.data
    } catch(err){ 
            return err.response?.data
        }
    }
)

export const CreateSpamReported  = createAsyncThunk(
    'SpamReported/CreateSpamReported ', 
    async ({
        email
    },{rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/create_spamreport`,{
                email
            },
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(UpdateActivities({
                action:`"${email}" was reported as a spam`
            }));
            dispatch(GetSpamReported());
        }
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)


const SpamReported_Slice = createSlice({
    name:"SpamReported",
    initialState: {
        SpamReported:[],
        spamToFilter:[],
        CreateSpamReportedStatus:'',
        CreateSpamReportedError:'',
        GetSpamReportedStatus:'',
        GetSpamReportedError:''
    },
    reducers:{
        sortDataByEmail(state,action){
            const newArray=[...state.spamToFilter]
            const sortByEmail =  newArray.sort((a, b)=> (a.email < b.email ) ? -1 : (a.email > b.email) ? 1 : 0);
            return{
                ...state,
                SpamReported:sortByEmail
            }    
        },
        sortDataByCreatedAt(state,action){
            const newArray=[...state.SpamReported]
            const sortByCreatedAt =  newArray.sort((a, b)=> (a.created_at < b.created_at) ? -1 : (a.created_at > b.created_at) ? 1 : 0);
            return{
                ...state,
                SpamReported:sortByCreatedAt
            }        
        },
        searchdata(state,action){
            const data=action.payload;
            const filteredData = state.spamToFilter.filter((item)=>item.email.toLowerCase().includes(data.toLowerCase()));
            return{
                ...state,
                SpamReported:filteredData
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(GetSpamReported.pending,(state, action)=>{
            return {
                ...state,
                GetSpamReportedStatus:'pending'
            }

        });
        builder.addCase(GetSpamReported.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        SpamReported:action.payload.message,
                        spamToFilter:action.payload.message,
                        GetSpamReportedStatus:"success"
                    }
                }
                return{
                    ...state,
                    GetSpamReportedStatus:"success"
                }
            }else return{
                ...state,
                GetSpamReportedStatus:"failed"
            }
        })
        builder.addCase(GetSpamReported.rejected,(state, action)=>{
            return{
                ...state,
                GetSpamReportedStatus:'rejected'
            }
        })

        builder.addCase(CreateSpamReported.pending,(state, action)=>{
            return {
                ...state,
                CreateSpamReportedStatus:'pending'
            }

        });
        builder.addCase(CreateSpamReported.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message);
                    return{
                        ...state,
                        CreateSpamReportedStatus:"success"
                    }
                }else{
                    toast.error(message);
                    return{
                        ...state,
                        CreateSpamReportedStatus:"failed"
                    }
                }
            }else return{
                ...state,
                CreateSpamReportedStatus:"failed"
            }
        })
        builder.addCase(CreateSpamReported.rejected,(state, action)=>{
            return{
                ...state,
                CreateSpamReportedStatus:'rejected'
            }
        })
    }
})


export const SpamReported_SliceActions = SpamReported_Slice.actions;
export default SpamReported_Slice;