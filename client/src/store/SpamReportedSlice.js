import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';

export const GetSpamReported = createAsyncThunk(
    'SpamReported/GetSpamReported ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/list_spamreport`,
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

export const CreateSpamReported  = createAsyncThunk(
    'SpamReported/CreateSpamReported ', 
    async ({
        email
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/create_spamreport`,{
                email
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


const SpamReported_Slice = createSlice({
    name:"SpamReported",
    initialState: {
        SpamReported:[],
        CreateSpamReportedStatus:'',
        CreateSpamReportedError:'',
        GetSpamReportedStatus:'',
        GetSpamReportedError:''
    },
    reducers:{},

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
                    status
                }= action.payload
                if(status === true){
                    toast(action.payload.message);
                    return{
                        ...state,
                        CreateSpamReportedStatus:"success"
                    }
                }
                return{
                    ...state,
                    CreateSpamReportedStatus:"success"
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


export default SpamReported_Slice;