<template>
  <div>
      <section class="banner">
        <div id="myCarousel" class="carousel" data-ride="carousel" data-interval="2000">
                <!--轮播图点-->
                <ol class="carousel-indicators">
                    <li v-for="(v,k) in banner" :data-slide-to="k" :key="v.id" :class="{active:index==k}" data-target="#myCarousel"></li>
                </ol>
                <!--轮播图-->
                <div class="carousel-inner">
                    <div  v-for="(val,k) in banner" class="item" :key="val.id" :class="{active:index==k}">
                        <img :src="val.imgUrl" alt="" />
                    </div>
                </div>
            </div>
      </section>
  </div>
</template>

<script>
export default {
    name:'Banner',
    data(){
        return{
            index:0,
            timer:null,
            banner:[]
        }
    },
  mounted(){
    this.banner = JSON.parse(localStorage.getItem("banner"));
  },

}
</script>

<style lang="less" scoped>
@import "../../assets/css/banner.less";
</style>
