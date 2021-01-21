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
            banner:[
                {id:1,imgUrl:"../../static/image/phone/banner_ph.png"},
                {id:2,imgUrl:"../../static/image/phone/banner_ph.png"},
                {id:3,imgUrl:"../../static/image/phone/banner_ph.png"},
            ]
        }
    },
  
}
</script>

<style lang="less" scoped>
/*banner*/
.banner{
  width: 100%;
  height:100%;
  img{
    width: 100%;
  }
  .carousel-indicators{
    left:27%!important;
    .active {
      width: 14%!important;
      height: 0px!important;
      border-bottom: 3px solid #4287d5!important;
    }
    li {
      width: 14%!important;
      height: 0px!important;
      border: none!important;
      border-bottom: 3px solid #ffffff!important;
    }
  }
}

</style>