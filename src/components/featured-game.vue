<template>
    <div class="container" style="max-width: 63%;margin-left:19%">
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-8">
                <img src="@/assets/Bitmap.png" class="img-fluid rounded-start" alt="..." style="height:100% ;width:100%">
            </div>
            <div class="col-md-4">
                <div class="card-body" style="text-align:left; margin-left:10% ">

                    <h5 class="card-title">Subway Surfers</h5>
                    <p class="card-text" style="margin-top:-7%">SYPO Games</p>
                    <p class="card-text">SURF the urban wave!</p>
                    <p class="card-text" style="margin-top:-7%">DODGE the oncoming trains!</p>
                    <p class="card-text"><small class="text-muted">300k Downloads</small></p>
                    <router-link :to="`/details1`" class="btn btn-primary w-100" style="margin-top:-7%">More INFO</router-link>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    export default {
        name:'featuredGameComp',
        
    }
</script>

<style scoped>
    .container{
        border-radius:8px;
        box-shadow:rgba(0,0,0,0.24) 0px 3px 8px;
    }
    .btn-primary,.btn
    {
        background-color: #8064A2;
        border-color: #8064A2;
    }
</style>