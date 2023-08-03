import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';


export const DeleteSubscriber = createAsyncThunk(
    'subscriber/DeleteSubscriber', 
    async ({
        id
    },{dispatch}) =>{
    try{
        const response = await axios.delete(
            `${apiBaseUrl}/deletesubscribe/${id}`,
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
        return err.response?.data
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
        return err.response?.data
        }
    }
)

export const CreatCsvSubscriber = createAsyncThunk(
    'subscriber/CreateCsvSubscriber', 
    async ({
        csv,
        tag_id
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/bulksubscribe`,{
                "csvfile": csv,
                "tag_id":tag_id
            },{
                headers:{
                    "Authorization":`Bearer Bearer ${JSON.parse(localStorage.getItem('marketingUserToken'))?.access_token}`,
                    "Content-Type": 'multipart/form-data',
                    "Accept":'application/json'
                }
            },
             
        )
        if(response?.data?.status){
            dispatch(UpdateActivities({
                action:`You updated your subscriber's list`
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
        CreateCsvSubscriberStatus:'',
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
            if(action.payload){
                const{
                    message,
                    status
                }=action.payload;
                if(status){
                    toast(message);
                    return{
                        ...state,
                        deleteSubStatus:"success"
                    }
                }else{
                    toast.error(message);
                    return{
                        ...state,
                        deleteSubStatus:"failed"
                    }
                }
            }return{
                ...state,
                deleteSubStatus:"failed"
            }
        })
        builder.addCase(DeleteSubscriber.rejected,(state, action)=>{
            toast.error(action?.payload?.message);
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
            if(action.payload){
                const{
                    status,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        totalsub: message,
                        GetTotalSubscribersStatus:"success"
                    }
                }return{
                    ...state,
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
            if(action.payload){
                const{
                    status,
                    message
                }=action.payload
                if(status){
                    return{
                        ...state,
                        subscribers: message,
                        subscribersToFilter: message,
                        GetSubscribersStatus:"success"
                    }
                }
                return{
                    ...state,
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
                    message,
                    status
                }= action.payload
                if(status){
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
            toast.error(action?.payload?.message)
            return{
                ...state,
                CreatesubscriberStatus:'rejected'
            }
        })

        builder.addCase(CreatCsvSubscriber.pending,(state, action)=>{
            return {
                ...state,
                CreateCsvSubscriberStatus:'pending'
            }

        });
        builder.addCase(CreatCsvSubscriber.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    message,
                    statusCode
                }= action.payload
                if(statusCode){
                    toast(message);
                    return{
                        ...state,
                        CreateCsvSubscriberStatus:"success"
                    }
                }else{
                    toast.error(message);
                    return{
                        ...state,
                        CreateCsvSubscriberStatus:"failed"
                    }
                }
            }else{
                return{
                    ...state,
                    CreateCsvSubscriberStatus:"failed"
                }
            }
        })
        builder.addCase(CreatCsvSubscriber.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                CreateCsvSubscriberStatus:'rejected'
            }
        })
    }
})

export const subscriber_SliceActions = subscriber_Slice.actions;
export default subscriber_Slice;