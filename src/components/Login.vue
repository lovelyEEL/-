<template>
  <router-view></router-view>
  <h1>登录界面</h1>


      <label >账号</label>
      <input type="text" v-model="user_for_login.username" />
  <br>
      <label >密码</label>
      <input type="password" v-model="user_for_login.password" />
  <br>
    <button @click="login">登录</button>


</template>

<script>
import axios from "axios"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",

  data(){
    return{
      // username:"",
      // password:"",
      user_for_login:{
       username:"",
       password:"",
      }

    }
  },

    methods:{
      login(){
        console.log(this.user_for_login.username);
        console.log(this.user_for_login.password);
        axios({
          url:'http://localhost:8888/login',
          methods:"POST",
          data:this.user_for_login,

        }).then(res=>{
          console.log("i am here")
          console.log(res.data);
          if (res.data == "1") {
            sessionStorage.setItem("isLogined", "true");
          }
          else {
            alert("用户名或密码错误");
          }

        })

        // if(this.user_for_login.username==="root"&&this.user_for_login.password==="1234"){
        //   localStorage.setItem("name","ycm");
        //   this.$router.push("/home");
        // }else{
        //   alert("用户名或密码错误");
        // }
      },


  }
}
</script>

<style scoped>

</style>