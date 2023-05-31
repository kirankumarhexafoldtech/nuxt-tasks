<template>
    <div>
        <h1>Login</h1>

        <div>
            <form @submit.prevent="handleLogin">
                <label>Email</label>
                <input type="text" class="form-input">
                <label>
                    Password
                </label>
                <input type="password" class="form-input">
                <input type="submit" class="btn btn-secondary" >
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
    methods:{
        async handleLogin(){
    
            const res=getUser("kminchelle","0lelplR");

            console.log(res)
        }
    }
})
</script>