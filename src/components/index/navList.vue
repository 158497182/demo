<template>
    <ul class="nav nav-pills">
        <li v-if="newsMenu" :class="{active:newsIndex==k}" v-for="(v,k) in newsMenu" :key="v.id">
            <a href="javascript:;">{{v.name}}</a> 
        </li>
        <li v-if="workMenu" :class="{active:workIndex==k}" v-for="(v,k) in workMenu" :key="v.id">
            <a href="javascript:;">{{v.name}}</a> 
        </li>
    </ul>
</template>

<script>
export default {
    name:'NavList',
    data(){
        return{
           newsIndex:0,
           workIndex:0,
        }
    },
     mounted(){
        console.log(this.$attrs.newsMenu);
  },
    props:['newsMenu','workMenu']
}
</script>

<style lang="less">
 @import '../../assets/css/common.less';
.navTab(100%);
</style>