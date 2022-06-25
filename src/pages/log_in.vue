<template>
  <div id="log_in" >

    <div class="demo">
      <h1>Log in</h1>

        <div v-for="item in formItems" :key="item.id" class='form-item'>
          <label :for="item.id"> {{ item.label }}: </label>
          <input :type="item.type" :id="item.id" :name="item.id" v-model="item.value" :placeholder="item.placeholder">
        </div>
        <button class="bg-black  text-white mt-6 rounded hover:bg-zinc-800 w-1/3
      h-14 font-sans:arial font-normal mr-4  ..." @click="logInRequest">Log in</button>
        <router-link to="/sign_up">Sign up</router-link>

    </div>
  </div>
</template>

<script>
import {logInRequest} from './api.js'


export default {
  components: {},
  data() {
    return {
      formItems: [
        {
          label: 'Email',
          id: 'Email',
          type: 'Email',
          value: '',
          placeholder: "Evan@mail.ru"
        },
        {
          label: 'Enter password',
          id: 'password',
          type: 'text',
          value: '',
          placeholder: "Evan345"
        },
      ]
    }
  },
  methods:{
    logInRequest
  }
  //   log_in(event){
  //     alert('Authorization was successful')
  //   },
  //   async logInRequest(){
  //     const res = await fetch('http://localhost:5000/auth/login',{
  //       method: 'POST',//метод
  //       headers:{//объект с заголовками запроса; тип передаваемых данных 'application/json'
  //         'Content-Type': 'application/json'
  //       },
  //       credentials: 'include',// куки браузера
  //       body: JSON.stringify({
  //         email: this.formItems[0].value,
  //         password: this.formItems[1].value
  //       })
  //     })
  //     console.log(res);
  //   }
  // }
};
</script>

<style scoped>
#log_in{
  background: linear-gradient( 90deg, #25c07b, #29dad5);
  width: 100%;
  height: 920px;
  padding: 1px;

}
.demo{
  position: relative;
  top: 0px;
  width: 650px;
  padding: 18px 6% 60px 6%;
  margin: 100px 0 35px 0;
  margin-left: auto;
  margin-right: auto;
  background: white;
  border: 1px solid #4cde97;
  box-shadow: inset 10em 1em #d8fcea;
  border-radius: 5px;
}
button {
  font-size: 1em;
}
.demo{
  z-index: 22;
}
/*Авторизация, регистрация*/
.demo h1{
  font-size: 48px;
  color: black;
  padding: 2px 0 10px 0;
  font-family: 'FranchiseRegular','Arial Narrow',Arial,sans-serif;
  font-weight: lighter;
  text-align: end;
  padding-bottom: 30px;
}


.demo h1:after{
  content:' ';
  display:block;
  width:50%;
  height:2px;
  margin-top:10px;


}

input {
  outline: none;
}
.demo input:not([type="checkbox"]){
  width: 92%;
  margin-top: 4px;
  padding: 10px 5px 10px 32px;
  border: 1px solid rgb(178, 178, 178);
  box-sizing : content-box;
  border-radius: 3px;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}
.demo input:not([type="checkbox"]):active,
.demo input:not([type="checkbox"]):focus{
  border: 1px solid rgba(91, 90, 90, 0.7);
  background: rgba(238, 236, 240, 0.2);
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
}

@media only screen and (min-width: 315px) {
  #log_in{
    height: 1400px;
    width: 665px;
  }
  .demo {
    width: 75%;
  }
}
@media only screen and (min-width: 660px) {
  #log_in{
    height: 700px;
    width: 100%;
  }
  .demo{
    width: 70%;
  }
}

@media only screen and (min-width: 768px) {
  #log_in{
    height: 700px;
  }
  .demo {
    width: 70%;
  }
}

@media only screen and (min-width: 1000px) {
  #log_in{
    height: 970px;
  }
  .demo {
    width: 40%;
    /*margin-left: 100px;*/
  }
}



/*@keyframes fadeInLeft {*/
/*  0% {*/
/*    opacity: 0;*/
/*    transform: translateX(-20px);*/
/*  }*/

/*  100% {*/
/*    opacity: 1;*/
/*    transform: translateX(0);*/
/*  }*/
/*}*/
/*#toregister:target ~ #demo #login,*/
/*#tologin:target ~ #demo #register{*/
/*  animation-name: fadeOutLeftBig;*/
/*}*/

/*@keyframes fadeOutLeft {*/
/*  0% {*/
/*    opacity: 1;*/
/*    transform: translateX(0);*/
/*  }*/

/*  100% {*/
/*    opacity: 0;*/
/*    transform: translateX(-20px);*/
/*  }*/
/*}*/

</style>