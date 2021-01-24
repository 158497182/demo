<template>
   <section class="news">
        <div class="top">
            <div class="title text-center">
                <h4 class="text-center">新闻动态</h4>
            </div>
            <div class="middle clearfix">
<!--                  <ComMenu v-bind="$attrs" :cateId="cateId"/>-->
              <ul class="nav nav-pills">
                <li v-if="menu" :class="{active:v.id==cateId}" v-for="(v,k) in menu" :key="v.id" v-on:click="change(v)" >
                  <a href="javascript:;">{{v.name}}</a>
                </li>
              </ul>
            </div>
        </div>
        <div class="news-detail">
            <div  class="lists" v-for="(v,k) in lists.slice(0,2)" :key="v.id" >
                <div class="news-img">
                    <a href="#"><img :src="v.imgUrl" alt=""></a>
                    <time class="time pull-right">Time:{{v.time}}</time>
                </div>
                <div class="news-intro">
                    <h6 class="text-center">{{v.title}}</h6>
                    <p class="text-center">
                        <a href="#" class="small">{{v.des}}</a>
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import ComMenu from './comMenu'
export default {
    name:"News",
    data(){
        return{
          index:0,
          cateId:0,
          current:0,
          lists:[]
        }
    },
    components:{
        ComMenu
    },
    methods:{
      change(item) {
        this.cateId = item.id;
        console.log(this.cateId);
        //如果点击分类，切换对应的列表
        if (this.cateId != 0) {
          this.lists = this.newsList.filter(item => item.cate_id == this.cateId);
        } else {
          this.lists = this.newsList;
        }
      },
    },
  mounted(){
    this.lists = this.newsList;
  },
    props:['newsList',"menu"]
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/index/news.less';

</style>
