<template>
    <div class="container p-3  ml-5 mt-5 sec2" style="width:64%">
          <div class="row justify-content-center"> 
                <span class="mb-3" style="font-size:20px">Most Recommendation  <span style="margin-left:55%">SEE ALL ></span></span> 
                
                <div class="col-lg-3 col-md-6 col-sm-12" v-for="toy of toys" :key=toy.id>   
                        <div class="card" style="width:100%; border:none;" >
                            <div class="rate">
                                <img  src="../assets/purple-star-hi.png" alt="">
                                <span>4.9</span>
                            </div>
                            <img v-bind:src=toy.photo class="card-img-top rounded" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{toy.title}}</h5>
                                <router-link  class="btn btnn" :to="`/details/${toy.id}`">MORE INFO</router-link>
                                <p class="card-text"><small class="text-muted">For Android only</small></p>
                            </div>
                        </div>
                </div>
          </div>
    </div>   
</template>



<script>
    import axios from "axios";
    export default {
        name:'recommendationInDetailsPageComp',
        data() {
            return {
                toys: [],
            };
        },

        created() {
            this.gettoys();
        },
        methods: {
             gettoys() {
                axios.get("games").then((res) => {
                    console.log(res.data);
                    this.toys = res.data;
                 })
                .catch((err) => {
                    console.log(err);
                });
             },
        }
    }

</script>

<style scoped>
    .container{
        text-align:left;
        max-width: 63%;
        margin-left:19% ;
        margin-top:5%;
        background-color:white; 
        padding-top:2%; 
        padding-bottom:2%;
        border-radius:8px;
        box-shadow:rgba(0,0,0,0.24) 0px 3px 8px;
    }
    img{
        width:100%;
        height:200px;
    }
     .btn-primary,.btn
    {
        background-color: #8064A2;
        border-color: #8064A2;
    }
    .card-body{
        text-align: left;
    }
    .rate img{
        max-width:40%;
        max-height:20px;
        
    }
    .rate{
        position: absolute;
        margin-top:10px;
        margin-left:10%;
        background-color: white;
        border-radius: 8px;
        padding: 2%;
    }
</style>