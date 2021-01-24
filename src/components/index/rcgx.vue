<template>
   <section class="rcgx">
        <div class="title">
            <h4 class="text-center">人才共享</h4>
        </div>
        <div class="bottom">
            <div class="persons clearfix"  >
                <div :class="{active:index==k}" v-for="(v,k) in rcgxList" :key="v.id" @click="index=k">
                    <a href="javascript:;">
                        <img :src="v.imgUrl" />
                    </a>
                    <p class="intro text-center">
                       {{v.name}}
                    </p>
                </div>

            </div>
            <ol class="indicators">
                <li :class="{active:index==k}"  v-for="(v,k) in rcgxList" :key="v.id">
                    <a href="#"></a>
                </li>
            </ol>
        </div>
    </section>
</template>

<script>
export default {
    name:'Rcgx',
    data(){
        return{
            index:0
        }
    },
    props:['rcgxList']
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/index/rcgx.less';
</style>
