import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';

export const GetUserTemplate = createAsyncThunk(
    'template/GetUserTemplate ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewusertemp`,
                setHeaders()
        )
        return response?.data
    } catch(err){
           toast.error(err.response?.data?.message);
        }
    }
)

export const GetGeneralTemplate = createAsyncThunk(
    'template/GetGeneralTemplate ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/generaltemp`,
                setHeaders()
        )
        return response?.data
    } catch(err){
            toast.error(err.response?.data?.message)
        }
    }
)

export const CreateTemplate  = createAsyncThunk(
    'template/CreateTemplate ', 
    async ({
        template_name,
        template_describ,
        design_content,
        design_html,
        template_type
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/usertemplate`,{
                template_name,
                template_describ,
                design_content,
                design_html,
                template_type
            },
            setHeaders()
        )
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)


const template_Slice = createSlice({
    name:"template",
    initialState: {
        template:[],
        templateToFilter:[],
        generalTemp:[],
        CreateTemplateStatus:'',
        CreateTemplateError:'',
        GetUserTemplateStatus:'',
        GetUserTemplateError:'',
        GetGeneralTemplateStatus:'',
        GetGeneralTemplateError:''
    },
    reducers:{
        sortDataByName(state,action){
            const newArray=[...state.templateToFilter]
            const sortByName =  newArray.sort((a, b)=> (a.template_name < b.template_name ) ? -1 : (a.template_name > b.template_name) ? 1 : 0);
            return{
                ...state,
                template:sortByName
            }    
        },
        sortDataByCreatedAt(state,action){
            const newArray=[...state.template]
            const sortByCreatedAt =  newArray.sort((a, b)=> (a.created_at < b.created_at) ? -1 : (a.created_at > b.created_at) ? 1 : 0);
            return{
                ...state,
                template:sortByCreatedAt
            }        
        },
        searchdata(state,action){
            const data=action.payload;
            const filteredData = state.templateToFilter.filter((item)=>item.template_name.toLowerCase().includes(data.toLowerCase()));
            return{
                ...state,
                template:filteredData
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(GetGeneralTemplate.pending,(state, action)=>{
            return {
                ...state,
                GetGeneralTemplateStatus:'pending'
            }

        });
        builder.addCase(GetGeneralTemplate.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        generalTemp:action.payload.message,
                        GetGeneralTemplateStatus:"success"
                    }
                }
                return{
                    ...state,
                    GetGeneralTemplateStatus:"success"
                }
            }else return{
                ...state,
                GetGeneralTemplateStatus:"failed"
            }
        })
        builder.addCase(GetGeneralTemplate.rejected,(state, action)=>{
            return{
                ...state,
                GetGeneralTemplateStatus:'rejected'
            }
        })

        builder.addCase(GetUserTemplate.pending,(state, action)=>{
            return {
                ...state,
                GetUserTemplateStatus:'pending'
            }

        });
        builder.addCase(GetUserTemplate.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        template:action.payload.message,
                        templateToFilter:action.payload.message,
                        GetUserTemplateStatus:"success"
                    }
                }
                return{
                    ...state,
                    GetUserTemplateStatus:"success"
                }
            }else return{
                ...state,
                GetUserTemplateStatus:"failed"
            }
        })
        builder.addCase(GetUserTemplate.rejected,(state, action)=>{
            return{
                ...state,
                GetUserTemplateStatus:'rejected'
            }
        })

        builder.addCase(CreateTemplate.pending,(state, action)=>{
            return {
                ...state,
                CreateTemplateStatus:'pending'
            }

        });
        builder.addCase(CreateTemplate.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message);
                    return{
                        ...state,
                        CreateTemplateStatus:"success"
                    }
                }else{
                    toast.error(message);
                    return{
                        ...state,
                        CreateTemplateStatus:"failed"
                    }
                }
            }else return{
                ...state,
                CreateTemplateStatus:"failed"
            }
        })
        builder.addCase(CreateTemplate.rejected,(state, action)=>{
            return{
                ...state,
                CreateTemplateStatus:'rejected'
            }
        })
    }
})

export const template_SliceActions = template_Slice.actions;
export default template_Slice;