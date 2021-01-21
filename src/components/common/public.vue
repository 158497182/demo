<template>
  <div>
       <section class="container-fluid">
            <!--头部-->
            <div>
                <HeaderTop/>
            </div>
             <!--banner-->
            <div>
                <Banner></Banner>
            </div>
            <!--主体-->
            <div>
                <slot name="content"></slot>
            </div>
            <!--底部-->
            <div>
                <FooterBottom :contact="contact"></FooterBottom>
            </div>
       </section>
  </div>
</template>

<script>
import HeaderTop from './header'
import Banner from './banner'
import FooterBottom from './footer'
export default {
    name:'Public',
    components:{
        HeaderTop,
        Banner,
        FooterBottom
    },
    
}
</script>

<style lang="less">
</style>