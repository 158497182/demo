<template>
    <ul class="nav nav-pills">
        <li v-if="menu" :class="{active:v.id==cateId}" v-for="(v,k) in menu" :key="v.id" v-on:click="change(v)" >
            <a href="javascript:;">{{v.name}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name:'NavList',
    data(){
        return{

        }
    },
     methods:{
        change(item){
          this.cateId = item.id;
          console.log(this.cateId);
          //如果点击分类，切换对应的列表
          this.$emit("simple",this.cateId);
        }
     },

    props:['menu','cateId']
}
</script>

<style lang="less">
 @import '../../assets/css/common.less';
.navTab(100%);
</style>
