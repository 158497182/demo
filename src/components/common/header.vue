<template>
  <div>
        <section class="header clearfix">
            <div class="pull-left logo">
                    <img src="../../../static/image/phone/logo_ph.png" alt="" />
                </div>
                <div class="pull-right menu">
                    <a href="javascript:;" @click="toggleMenu">
                        <img src="../../../static/image/phone/nav_ph.png" alt="">
                    </a>
                </div>
                <div class="menu-nav" v-show="isShow">
                    <div @click="close">
                        <img src="../../../static/image/phone/close_03.png" alt="" />
                    </div>
                    <ul class="nav">
                        <li v-for="(v,k) in menuList" :key="v.id" @click="toMenu(v.id)">
                         <a href="javascript:;" class="text-center " :class="{current:index==v.id}">{{v.name}}</a>
                        </li>
                    </ul>
                </div>
        </section>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            isShow:false,
            index:1,
            menuList:[]
        }
    },
    methods:{
        toggleMenu(){
            this.isShow = !this.isShow;
        },
        close(){
             this.isShow = !this.isShow;
        },
        toMenu(key){
          this.index = key;
          var url = this.menuList.filter( item=>item.id==key).map(item=>item.url).join("");
          if(url!=this.$route.path){
            this.$router.push(this.menuList.filter( item=>item.id==key).map(item=>item.url).join(""));
          }
          this.isShow = !this.isShow;
        }
    },
  mounted(){
    this.menuList = JSON.parse(localStorage.getItem("menuList"));
  },
}
</script>

<style lang="less" scoped>
  @import "../../assets/css/header.less";
</style>
