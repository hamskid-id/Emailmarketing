import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';

export const UpdateContactInfo = createAsyncThunk(
    'auth/UpdateContactInfo', 
    async ({
        id,
        email,
        company,
        phone,
        zip_code,
        state,
        city,
        address1,
        address2,
        country
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/updateuserinfo/${id}`,{
                email,
                company,
                phone,
                zip_code,
                state,
                city,
                address1,
                address2,
                country
            },setHeaders()
        );
        if(response?.data?.status){
            dispatch(GetContactInfo(id))
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
    }
    }
)


export const UploadProfilePicture = createAsyncThunk(
    'auth/UploadProfilePicture', 
    async ({
        id,
        pics,
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/updateprofile/${id}`,{
                profile:pics
            },setHeaders()
        );
        if(response?.data?.status){
            dispatch(GetProfilePics(id))
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
    }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({
        name,
        email,
        password
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/registering`,{
                name,
                email,
                password
            }
        );
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const LogInUser = createAsyncThunk(
    'auth/LogInUser', 
    async ({
        email,
        password,
        remember
    },{rejectWithValue}) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}/login`,{
                    email:email,
                    password:password,
                    remember:remember
                }
            );

            localStorage.setItem(
                'marketingUserToken',
                JSON.stringify(response?.data?.data)
            )
            return response?.data
        }catch(err){
            return rejectWithValue(
                err.response?.data?.message
            )
        }
    }
)

export const GetProfilePics = createAsyncThunk(
    'auth/GetProfilePics', 
    async ({id}) =>{
        try{
            const response = await axios.get(
                `${apiBaseUrl}/viewprofile/${id}`,setHeaders()
            );
            return response?.data
        }catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)

export const GetContactInfo = createAsyncThunk(
    'auth/GetContactInfo', 
    async ({
        id
    })=>{
        try{
            const response = await axios.get(
                `${apiBaseUrl}/viewuserinfo/${id}`,setHeaders()
            );
            return response?.data
        }catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)

export const SendPasswordResetLink = createAsyncThunk(
    'auth/SendPasswordResetLink', 
    async ({
        email,
    }) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}/forgetpas`,{
                    email:email
                }
            );
            return response?.data
        }catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)

export const ResetPassword = createAsyncThunk(
    'auth/ResetPassword', 
    async ({
        old_password,
        password,
        confirm_pass
    }) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}/changepassword`,{
                    old_password,
                    password,
                    confirm_pass
                },setHeaders()
            );
            return response?.data
        }catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)

const auth_Slice = createSlice({
    name:"auth",
    initialState: {
        userdata:localStorage.getItem('marketingUserToken') ? JSON.parse(localStorage.getItem('marketingUserToken')):[],
        registerStatus:'',
        registerError:'',
       LoginStatus:'',
       updateContactStatus:'',
       uploadProfilePicsStatus:'',
       SendPasswordResetLinkStatus:'',
       profilePicture:'',
       profilePictureStatus:'',
       contactInfoStatus:'',
       contactInfo:'',
       SendPasswordResetLinkError:'',
       ResendVerifyStatus:'',
       ResendVerifyError:'',
       ResetPasswordStatus:'',
       ResetPasswordError:'',
       LoginError:'',
       userLoaded:false,
    },
    reducers:{
        LogOutUser(state, action){
            localStorage.removeItem('marketingUserToken');
            window.location.replace("/auth/login")
            return {
                ...state,
                userdata:[],
                registerStatus:'',
                registerError:'',
                LoginStatus:'',
                LoginError:'',
                userLoaded:false
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(GetProfilePics.pending,(state, action)=>{
            return {
                ...state,
                profilePictureStatus:'pending'
            }

        });
        builder.addCase(GetProfilePics.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                
                if(status === true){
                    return{
                        ...state,
                        profilePictureStatus:"success",
                        profilePicture:message
                    }
                }else{
                    return{
                        ...state,
                        profilePictureStatus:"failed"
                    }
                }
            }else return{
                ...state,
                profilePictureStatus:"failed"
            }
        })
        builder.addCase(GetProfilePics.rejected,(state, action)=>{
            return{
                ...state,
                profilePictureStatus:'rejected',
            }
        })


        builder.addCase(GetContactInfo.pending,(state, action)=>{
            return {
                ...state,
                contactInfoStatus:'pending'
            }

        });
        builder.addCase(GetContactInfo.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                
                if(status === true){
                    return{
                        ...state,
                        contactInfo:message,
                        contactInfoStatus:"success"
                    }
                }else{
                    return{
                        ...state,
                        contactInfoStatus:"failed"
                    }
                }
            }else return{
                ...state,
                contactInfoStatus:"failed"
            }
        })
        builder.addCase(GetContactInfo.rejected,(state, action)=>{
            return{
                ...state,
                contactInfoStatus:'rejected',
            }
        })

        builder.addCase(UpdateContactInfo.pending,(state, action)=>{
            return {
                ...state,
                updateContactStatus:'pending'
            }

        });
        builder.addCase(UpdateContactInfo.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                
                if(status === true){
                    toast(message)
                    return{
                        ...state,
                        updateContactStatus:"success"
                    }
                }else{
                    return{
                        ...state,
                        updateContactStatus:"failed"
                    }
                }
            }else return{
                ...state,
                updateContactStatus:"failed"
            }
        })
        builder.addCase(UpdateContactInfo.rejected,(state, action)=>{
            return{
                ...state,
                updateContactStatus:'rejected',
            }
        })

        builder.addCase(UploadProfilePicture.pending,(state, action)=>{
            return {
                ...state,
                uploadProfilePicsStatus:'pending'
            }

        });
        builder.addCase(UploadProfilePicture.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                
                if(status === true){
                    toast(message)
                    return{
                        ...state,
                        uploadProfilePicsStatus:"success"
                    }
                }else{
                    return{
                        ...state,
                        uploadProfilePicsStatus:"failed"
                    }
                }
            }else return{
                ...state,
                uploadProfilePicsStatus:"failed"
            }
        })
        builder.addCase(UploadProfilePicture.rejected,(state, action)=>{
            return{
                ...state,
                uploadProfilePicsStatus:'rejected',
            }
        })


        builder.addCase(ResetPassword.pending,(state, action)=>{
            return {
                ...state,
                ResetPasswordStatus:'pending'
            }

        });
        builder.addCase(ResetPassword.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                
                if(status === true){
                    toast(message)
                    return{
                        ...state,
                        ResetPasswordStatus:"success"
                    }
                }else{
                    toast(message)
                    return{
                        ...state,
                        ResetPasswordStatus:"failed"
                    }
                }
            }else return{
                ...state,
                ResetPasswordStatus:"failed"
            }
        })
        builder.addCase(ResetPassword.rejected,(state, action)=>{
            toast(action?.payload?.message)
            return{
                ...state,
                ResetPasswordStatus:'rejected',
                ResetPasswordError:action?.payload?.message
            }
        })

        builder.addCase(SendPasswordResetLink.pending,(state, action)=>{
            return {
                ...state,
                SendPasswordResetLinkStatus:'pending'
            }

        });
        builder.addCase(SendPasswordResetLink.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status
                }= action.payload
                
                if(status === true){
                    toast(action.payload.message)
                    return{
                        ...state,
                        SendPasswordResetLinkStatus:"success"
                    }
                }
                toast(action.payload.message)
                return{
                    ...state,
                    SendPasswordResetLinkStatus:"success"
                }
            }else return{
                ...state,
                SendPasswordResetLinkStatus:"failed"
            }
        })
        builder.addCase(SendPasswordResetLink.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                SendPasswordResetLinkStatus:'rejected',
                SendPasswordResetLinkError:action.payload
            }
        })

        builder.addCase(registerUser.pending,(state, action)=>{
            return {
                ...state,
                registerStatus:'pending'
            }

        });
        builder.addCase(registerUser.fulfilled,(state, action)=>{
            if(action.payload){
                toast(action.payload);
                window.location.replace("/auth/login")
                return{
                    ...state,
                    registerStatus:'success'
                }
            }else return{
                ...state,
                registerStatus:'failed'
            }
        })
        builder.addCase(registerUser.rejected,(state, action)=>{
            toast.error("Registration Failed")
            console.log(action.payload)
            return{
                ...state,
                registerStatus:'rejected',
                registerError:action.payload
            }
        })

        builder.addCase(LogInUser.pending,(state, action)=>{
            return {
                ...state,
                LoginStatus:'pending'
             }
        });

        builder.addCase(LogInUser.fulfilled,(state, action)=>{
           if(action.payload){
            const{
                data
            }=action.payload;
                localStorage.setItem("tokenExpiry",data?.expires_at);
                toast("LogIn successfull");
                window.location.replace("/");
                return{
                    ...state,
                    userdata:action.payload,
                    LoginStatus:'success'
                }
            }else return{
                ...state,
                LoginStatus:'failed'
            }

        })
        builder.addCase(LogInUser.rejected,(state, action)=>{
            toast.error("Authentication Failed")
            return{
                ...state,
               LoginStatus:'rejected',
               LoginError:action.payload
            }
        })
    }
})

export const {
    LogOutUser
} = auth_Slice.actions;
export default auth_Slice;