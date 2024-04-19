<template>
  <div v-if="loggedin">
    <h1>Ha iniciado sesion</h1>
    <p>Bienvenido señor {{user.family_name}}</p>
    <img :src="user.picture" alt="user picture" width="100" height="100">
    <p>Inicio sesion con el correo {{user.email}}</p>
    <button @click="logout">Cerrar sesion</button>
  </div>
  <div v-else>
    <h1>No ha iniciado sesion</h1>
<GoogleLogin :callback="callback" prompt auto-login/>
</div>  
</template>

<script>
import { decodeCredential,googleLogout } from 'vue3-google-login';
 export default {
  data(){
    return{
      loggedin:false,
      usuario:null,
    callback:(response)=>{
      this.loggedin = true;
      console.log("Logged in")
      console.log(response) 
      this.user = decodeCredential(response.credential);
      console.log("hello",this.user)
    }
  }
  },
  methods:{
    logout(){
      googleLogout();
      this.loggedin = false;
      this.user = null;
    }
  }
  }
</script>