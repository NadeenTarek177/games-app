<template>
      <div class="container-fluid  bg-white pt-3">
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-12 ">
                <ul class="scroll pt-2">
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light" id="sport">sport &radic;</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                    <li class="list-item"><button class="btn1 btn-light">actions</button></li>
                </ul>
          </div>
        </div>
    </div>
</template>

<script> 
    export default {
        name:'categoriesComp',
    }
</script>

<style scoped>
.btn{
    border:1px solid #a1a1a1;
    border-radius: 4px;
    width: 100%;
}

.btn1{
    border:1px solid #a1a1a1;
    border-radius: 20px;
    
}
#sport{
    color:aliceblue;
    background-color: rgb(118, 71, 163);
}

.list-item {
  margin-left: 10px;
  display: inline-block;
}

.scroll { 
  height: 10vh;
  overflow-x:scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: auto;
}
::-webkit-scrollbar{width:2px;height:2px;}
::-webkit-scrollbar-button{width:2px;height:2px;}
.btnn{
  background-color: #572589;
  color:aliceblue
}
</style>