<template>
    <div class="div-template">
        <nav class="navbar navbar-light" >
            <div class="container-fluid">
                <router-link class="navbar-brand" aria-current="page" to="/home" style="margin-left:20%">
                <img src="../assets/Logo_4.png" alt="" width="195" height="70">
                </router-link>
                <span class="search-box" style="margin-left:-15% ; margin-top:-1.25%">
                    <input v-show="isHidden" type="text" class="search-input" placeholder="Start Looking For Something!">
                    <a href="#" v-on:click="isHidden = !isHidden">
                        <img src="../assets/loupe.png" alt="" width="15" height="15" style="position:relative;"/>
                    </a>
                </span>
                <span>
                    <div class="dropdown">
                        <a href="#"  data-bs-toggle="dropdown" aria-expanded="false"  style="margin-left:-20%">
                            <img src="../assets/more.png" alt="" width="15" height="15"/>
                        </a>
                        <ul class="dropdown-menu" >
                            <li><a class="dropdown-item" href="#"><loginComp/></a></li>
                        </ul>
                    </div>
                </span>
            </div>
        </nav>
    </div>
</template>

<script>
    import loginComp from './login.vue'
    export default {
      name:'navigationComp',
      components:{
          loginComp,
      },    
      data() {
        return{
         isHidden: true,
        };
      },
     
    }
</script>

<style scoped>
nav{
  padding-right: 17%;
}
.search-box {
  position: absolute;
  top: 50%;
  left: 75%;
  height: 40px;
  border-radius: 8px;
  
}
.search-input{
    position: relative;
    border-radius: 8px;
}
.dropdown-menu{
    transform:translate(-40%,-0.5%) ;
}


</style>