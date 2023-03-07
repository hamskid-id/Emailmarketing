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
        console.log(err.response?.data?.message);
        }
    }
)

// export const GetList = createAsyncThunk(
//     'campaign/GetList ', 
//     async () =>{
//     try{
//         const response = await axios.get(
//             `${apiBaseUrl}/viewcamps`,
//                 setHeaders()
//         )
//         console.log(
//            response?.data
//         )
//         return response?.data
//     } catch(err){
//             console.log(
//                 err.response?.data
//             )
//         }
//     }
// )

// export const CreateList  = createAsyncThunk(
//     'campaign/CreateList', 
//     async ({
//         title,
//         reply_to,
//         from_email,
//         from_name,
//         subject,
//         content,
//         tag_id,
//         content_type,
//         schedule_date,
//         status
//     },{rejectWithValue}) =>{
//     try{
//         const response = await axios.post(
//             `${apiBaseUrl}/createcampaigns`,{
//                 title,
//                 reply_to,
//                 from_email,
//                 from_name,
//                 subject,
//                 content,
//                 tag_id,
//                 content_type,
//                 schedule_date,
//                 status
//             },
//             setHeaders()
//         )
//         return response?.data
//     } catch(err){
//         return rejectWithValue(
//             err.response?.data?.message
//         )
//         }
//     }
// )

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
        toast.error(err.response?.data?.message);
        }
    }
)

export const CreateCampaigns  = createAsyncThunk(
    'campaign/CreateCampaigns', 
    async ({
        title,
        reply_to,
        from_email,
        subject,
        content,
        tag_id,
        from_name,
        content_type,
        schedule_date,
        status
    },{rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createcampaigns`,{
                title,
                reply_to,
                from_email,
                from_name,
                subject,
                content,
                tag_id,
                content_type,
                schedule_date,
                status
            },
            setHeaders()
        )
        if(response?.data){
            dispatch(UpdateActivities({
                action:`New Campaign "${title}" was created`
            }));
        }
        
        return response?.data
    } catch(err){
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
        // list:[],
        Campaigns:[],
        CreateListStatus:'',
        CreateListError:'',
        CreateCampaignsStatus:'',
        CreateCampaignsError:'',
        GetCampaignsStatus:'',
        GetCampaignsError:'',
        GetListStatus:'',
        GetListError:'',
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

        // builder.addCase(GetList.pending,(state, action)=>{
        //     return {
        //         ...state,
        //         GetListStatus:'pending'
        //     }

        // });
        // builder.addCase(GetList.fulfilled,(state, action)=>{
        //     if(action.payload){
        //         const {
        //             status
        //         }= action.payload
        //         if(status === true){
        //             return{
        //                 ...state,
        //                 list:action.payload.message,
        //                 GetListStatus:"success"
        //             }
        //         }
        //         return{
        //             ...state,
        //             GetListStatus:"success"
        //         }
        //     }else return{
        //         ...state,
        //         GetListStatus:"failed"
        //     }
        // })
        // builder.addCase(GetList.rejected,(state, action)=>{
        //     return{
        //         ...state,
        //         GetListStatus:'rejected'
        //     }
        // })

        // builder.addCase(CreateList.pending,(state, action)=>{
        //     return {
        //         ...state,
        //         CreateListStatus:'pending'
        //     }

        // });
        // builder.addCase(CreateList.fulfilled,(state, action)=>{
        //     if(action.payload){
        //         toast("Campaign successfully created");
        //         return{
        //             ...state,
        //             CreateListStatus:"success"
        //         }
        //     }else return{
        //         ...state,
        //         CreateListStatus:"failed"
        //     }
        // })
        // builder.addCase(CreateList.rejected,(state, action)=>{
        //     return{
        //         ...state,
        //         CreateListStatus:'rejected'
        //     }
        // })
    }
})


export default campaign_Slice;