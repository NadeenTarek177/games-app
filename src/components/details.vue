<template>
    <div >
        <div class="container" style="max-width: 63%;margin-left:19% ;">
            <img v-bind:src=this.photo class="img-fluid rounded-start w-100 h-25" alt="..." >
        </div>
        <div class="container">
            <div class="card ">
                <div class="card-body">
                    <div class="card-body" style="text-align:left;  ">
                        <h5 class="card-title">{{this.title}}</h5>
                        <p class="card-text">{{this.body}}</p>
                    </div>
                </div>
            </div>
        </div>
        <recommendationInDetailsPageComp/>
    </div>
</template>

<script>
    import axios from "axios";
    import recommendationInDetailsPageComp from './recommendationSecond.vue'
    export default {
        name:'detailsComp',
        components:{
            recommendationInDetailsPageComp,
        },
        props:['id'],
        data() {
            return {
                title: "",
                body: "",
                photo: "",
            };
        },

    created() {
        this.getItemById();
    },
    methods: {
        getItemById() {
            axios.get(`games?id=${this.id}`)
            .then((res) => {console.log(res.data);
            console.log(res.data[0].photo);

                this.title= res.data[0].title;
                this.body = res.data[0].body;
                this.photo = res.data[0].photo;
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
        margin-top: 5%;
        max-width: 65%;
        margin-bottom:5% ;
    }
</style>