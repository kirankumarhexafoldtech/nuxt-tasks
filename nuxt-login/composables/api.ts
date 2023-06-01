
import axios from "axios"
// import { UserCRedentials } from "./types"

// username: 'kminchelle',
// password: '0lelplR',


// export interface LoginUser {
//     user:UserCRedentials
// }

export const getUser=async(email:string,password:string)=>{
    try{
        const data=await axios.post("https://dummyjson.com/auth/login",{
            username:email,
            password:password
        })

        const res=await data.data;

        return res
    }catch(err){
        return false
    }
}