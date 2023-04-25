import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';


export const DeleteSubscriber = createAsyncThunk(
    'subscriber/DeleteSubscriber', 
    async ({
        email,
        fname,
        lname,
        country,
        state,
        phone,
        dob,
        tag_id
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/DeleteSubscriber`,{
                email,
                fname,
                lname,
                country,
                state,
                phone,
                dob,
                tag_id
            },
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(GetSubscribers())
        }
        return response?.data
    } catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)

export const GetSubscribers = createAsyncThunk(
    'subscriber/GetSubscribers', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewsubscrib`,
                setHeaders()
        )
        return response?.data
    } catch(err){
        console.log(
            err.response?.data?.message
        )
        }
    }
)

export const GetTotalSubscribers = createAsyncThunk(
    'subscriber/GetTotalSubscribers', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/totalsubscriber`,
                setHeaders()
        )
        return response?.data
    } catch(err){
        console.log(
            err.response?.data?.message
        )
        }
    }
)

export const Createsubscriber = createAsyncThunk(
    'subscriber/Createsubscriber', 
    async ({
        email,
        fname,
        lname,
        country,
        state,
        phone,
        dob,
        tag_id
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/addsubscrib`,{
                email,
                fname,
                lname,
                country,
                state,
                phone,
                dob,
                tag_id
            },
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(UpdateActivities({
                action:`You added "${email}" to your subscribers list`
            }));
            dispatch(GetSubscribers())
        }
        return response?.data
    } catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)


const subscriber_Slice = createSlice({
    name:"subscriber",
    initialState: {
        subscribers:[],
        subscribersToFilter:[],
        deleteSubStatus:'',
        totalsub:0,
        GetTotalSubscribersStatus:'',
        GetTotalSubscribersError:'',
        CreatesubscriberStatus:'',
        CreatesubscriberError:'',
        GetSubscribersStatus:'',
        GetSubscribersError:''
    },
    reducers:{
        sortDataByEmail(state,action){
            const newArray=[...state.subscribersToFilter]
            const sortByEmail =  newArray.sort((a, b)=> (a.email < b.email ) ? -1 : (a.email > b.email) ? 1 : 0);
            return{
                ...state,
                subscribers:sortByEmail
            }    
        },
        sortDataByName(state,action){
            const newArray=[...state.subscribers]
            const sortByName =  newArray.sort((a, b)=> (a.fname < b.fname) ? -1 : (a.fname > b.fname) ? 1 : 0);
            return{
                ...state,
                subscribers:sortByName
            }        
        },
        searchdata(state,action){
            const data=action.payload;
            const filteredData = state.subscribersToFilter.filter((item)=>item.fname.toLowerCase().includes(data.toLowerCase()));
            return{
                ...state,
                subscribers:filteredData
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(DeleteSubscriber.pending,(state, action)=>{
            return {
                ...state,
                deleteSubStatus:'pending'
            }

        });
        builder.addCase(DeleteSubscriber.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    deleteSubStatus:"success"
                }
            }else return{
                ...state,
                deleteSubStatus:"failed"
            }
        })
        builder.addCase(DeleteSubscriber.rejected,(state, action)=>{
            return{
                ...state,
                GetTotalSubscribersStatus:'rejected'
            }
        })

        builder.addCase(GetTotalSubscribers.pending,(state, action)=>{
            return {
                ...state,
                GetTotalSubscribersStatus:'pending'
            }

        });
        builder.addCase(GetTotalSubscribers.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    totalsub:action.payload.message,
                   GetTotalSubscribersStatus:"success"
                }
            }else return{
                ...state,
                GetTotalSubscribersStatus:"failed"
            }
        })
        builder.addCase(GetTotalSubscribers.rejected,(state, action)=>{
            return{
                ...state,
                GetTotalSubscribersStatus:'rejected'
            }
        })

        builder.addCase(GetSubscribers.pending,(state, action)=>{
            return {
                ...state,
                GetSubscribersStatus:'pending'
            }

        });
        builder.addCase(GetSubscribers.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    subscribers:action.payload.message,
                    subscribersToFilter:action.payload.message,
                    GetSubscribersStatus:"success"
                }
            }else return{
                ...state,
                GetSubscribersStatus:"failed"
            }
        })
        builder.addCase(GetSubscribers.rejected,(state, action)=>{
            return{
                ...state,
                GetSubscribersStatus:'rejected'
            }
        })

        builder.addCase(Createsubscriber.pending,(state, action)=>{
            return {
                ...state,
                CreatesubscriberStatus:'pending'
            }

        });
        builder.addCase(Createsubscriber.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message);
                    return{
                        ...state,
                        CreatesubscriberStatus:"success"
                    }
                }else{
                    toast.error(message);
                    return{
                        ...state,
                        CreatesubscriberStatus:"failed"
                    }
                }
            }else{
                return{
                    ...state,
                    CreatesubscriberStatus:"failed"
                }
            }
        })
        builder.addCase(Createsubscriber.rejected,(state, action)=>{
            return{
                ...state,
                CreatesubscriberStatus:'rejected'
            }
        })
    }
})

export const subscriber_SliceActions = subscriber_Slice.actions;
export default subscriber_Slice;