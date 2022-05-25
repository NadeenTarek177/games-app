<template>
    <div>
        <div class="container" style="max-width: 63%;margin-left:19% ;">
            <img src="@/assets/Bitmap.png" class="img-fluid rounded-start w-100 h-25" alt="..." >
        </div>
            <div class="container">
                <div class="card ">
                    <div class="card-body">
                        <div class="card-body" style="text-align:left;  ">
                            <h5 class="card-title">Subway Surfers</h5>
                            <p class="card-text">SURF the urban wave!</p>
                            <p class="card-text">DODGE the oncoming trains!</p>
                            <p class="card-text"><small class="text-muted">300k Downloads</small></p>
                        </div>
                    </div>
                </div>
            </div>
        <recommendationInDetailsPageComp/>
    </div>
</template>

<script>
    import recommendationInDetailsPageComp from './recommendationSecond.vue'
    export default {
        name:'detailSecComp',
        components:{
            recommendationInDetailsPageComp,
        },

    }
</script>

<style scoped>
.container{
        margin-top: 5%;
        max-width: 65%;
        margin-bottom:5% ;
        border-radius:8px;
        box-shadow:rgba(0,0,0,0.24) 0px 3px 8px;
    }
</style>