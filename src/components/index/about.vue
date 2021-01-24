<template>
<div>
    <section class="about clearfix">
        <div class="pull-left about-left">
            <div class="about-intro" v-html="descript[0]">

            </div>

            <div class="more">
                <a href="#"><img src="../../../static/image/phone/more_03.png" alt="" /></a>
            </div>
        </div>
        <div class="pull-right about-right" v-html="descript[1]">

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
