<template>
<div>
    <section class="about clearfix">
        <div class="pull-left about-left">
            <div class="about-intro">
                <h4 class="text-center">{{descript[0].name}}</h4>
                <p>
                   {{descript[0].des}}
                </p>
            </div>

            <div class="more">
                <a href="#"><img src="../../../static/image/phone/more_03.png" alt="" /></a>
            </div>
        </div>
        <div class="pull-right about-right">
            <div class="top-about">
                <h4 class="text-center"> {{descript[1].name}}</h4>
                <p>
                    {{descript[1].des}}
                </p>
            </div>
            <div class="about-img">
                <img :src=" descript[1].imgUrl" alt="" />
            </div>
        </div>
    </section>
</div>

</template>

<script>
export default {
    name:"About",
    props:['descript']
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/index/about.less';

</style>
