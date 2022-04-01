.<template>
    <div class="bg-light">
        <categoriesComp/>
       <featuredGameComp/>
       <recommendationComp/>
       <popularComp/>
    </div>
</template>

<script>
import categoriesComp from './categoriesSlider.vue'
import featuredGameComp from './featured-game.vue'
import recommendationComp from './recommendation.vue'
import popularComp from './popular.vue'
    export default {
        name:'homepageComp',
        components:{
            featuredGameComp,
            recommendationComp,
            popularComp,
            categoriesComp,
        }
    }
</script>

<style scoped>

</style>