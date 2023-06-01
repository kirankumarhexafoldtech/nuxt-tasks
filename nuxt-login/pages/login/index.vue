<template>
    <div>
        <h1>Login</h1>

        <div>
            <form @submit.prevent="handleLogin">
                <label>Email</label>
                <input type="text" class="form-input" v-model="email">
                <label>
                    Password
                </label>
                <input type="password" class="form-input" v-model="password">
                <input type="submit" class="btn btn-primary" >
            </form>
        </div>

        <br/>
        <div>
            //         username: 'kminchelle',
    // password: '0lelplR',

           
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import {getUser} from "~/composables/api"
export default Vue.extend({
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        async handleLogin(){
    
            const res=await getUser(this.email,this.password);

            console.log(res)
        }
    },
   created(){
    console.log(process.env.BASE_API)
   }
    
})
</script>