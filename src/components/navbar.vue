<template>
  <div class="header">
    <div class="header-container">

<!--      -<ul id="menu">-->
<!--      <li><a><router-link to="/main"><img src="./pages/logo1.png" ></router-link></a></li>-->
    <div id="menu">
      <ul v-if = "userAdmin" >
        <li><a><router-link to="/catalog">The store</router-link></a></li>
        <li><a><router-link to="/report">Report</router-link></a></li>
        <li><a><router-link to="/constructor">Constructor</router-link></a></li>
        <li @click="logOutRequest"><a>Log out</a></li>
      </ul>

      <ul v-else-if="isAuth" >
        <li><a><router-link to="/catalog">The store</router-link></a></li>
        <li @click="logOutRequest"><a>Log out</a></li>
      </ul>

      <ul v-else >
        <li><a><router-link to="/catalog">The store</router-link></a></li>
        <li><a><router-link to="/log_in">Log in</router-link></a></li>
      </ul>
    </div>


<!--    </ul>-->

    </div>
  </div>

  <router-view></router-view>
</template>

<script>
import {logInRequest} from '@/pages/api.js'
import {ref} from 'vue'
// import {thisIsAdmin} from "@/pages/api.js";
import {logOutRequest} from "@/pages/api.js";

export default {
  beforeMount: function(){
      window.user = ref({
        isAdmin: false,
        isAuth: false
      })
    },
  methods:{
    logInRequest,
    logOutRequest
  },
  computed:{
    userAdmin: function (){
      console.log('recompute', window.user.value);
      return window.user.value.isAdmin
    },
    isAuth: function () {
      return window.user.value.isAuth
    }
  }

}
</script>

<style scoped>
.header-container{
  width: 100%;
  background: black;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  position: relative;
}

#menu{
  text-align: end;

}

#menu li{
  display: inline-block;
  margin-right: 30px;
}
#menu a{
  color: whitesmoke;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  display: block;
  text-decoration: none;

}
#menu a:hover{
  color: lightgrey;
}
#menu li:last-child{
  margin-right: 0;
}

@media all and (max-width: 800px) {
  .header-container {
    /* На экранах среднего размера мы центрируем элементы, равномерно распределяя пустое пространство вокруг элементов */
    justify-content: space-around;
  }
}
@media only screen and (min-width: 315px) {
  .header-container{
    width: 665px;
  }
}
@media only screen and (min-width: 660px) {
  .header-container{
    width: 100%;
  }
}
</style>