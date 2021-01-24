<template>
   <section class="work">
        <div class="top">
            <div class="title">
                <h4 class="text-center">优秀作品</h4>
            </div>
            <div class="work-menu clearfix">
<!--                <ComMenu v-bind="$attrs" @simple="handle" :cateId="cateId" />-->
              <ul class="nav nav-pills">
                <li v-if="menu" :class="{active:v.id==cateId}" v-for="(v,k) in menu" :key="v.id" v-on:click="change(v)" >
                  <a href="javascript:;">{{v.name}}</a>
                </li>
              </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="work-list clearfix" >
                <div class="box" :class="{active:k==index}" v-for="(v,k) in lists.slice(0,2)" :key="v.id" @click="index=k">
                    <a href="javascript:;">
                        <img :src="v.imgUrl" alt="">
                    </a>
                    <p class="text-center">
                        <span>{{v.title}}</span>
                        <span>{{v.des}}</span>
                    </p>
                </div>
            </div>

            <a href="javascript:;" class="prev" @click="prev">
                <img src="../../../static/image/phone/row-ph_03.png" alt="" />
            </a>
            <a href="javascript:;" class="next" @click="next">
                <img src="../../../static/image/phone/row-ph_05.png" alt="" />
            </a>
        </div>

    </section>
</template>

<script>
import ComMenu from './comMenu'
export default {
    name:'Work',
    data(){
        return{
            index:0,
            cateId:0,
            current:0,
            lists:[],
            cateIds:[]
        }
    },
  methods: {
    prev() {
      for(var i=0;i<this.menu.length;i++){
          if(this.cateId==0){
            return false;
          }
          if(this.cateId == this.menu[i].id){
            this.cateId = this.menu[i-1].id;
            this.lists = this.cateId==0?this.workList:this.workList.filter(item => item.cate_id == this.cateId);
            break;
          }
        }
    },
    next() {
        for(var i=0;i<this.menu.length;i++){
          if(this.cateId==this.menu.length-1){
            return false;
          }else{
            if(this.cateId == this.menu[i].id){
              this.cateId = this.menu[i+1].id;
              this.lists = this.workList.filter(item => item.cate_id == this.cateId);
              return false;
            }
          }
        }
    },
    change(item) {
      this.cateId = item.id;
      //如果点击分类，切换对应的列表
      if (this.cateId != 0) {
        this.lists = this.workList.filter(item => item.cate_id == this.cateId);
      } else {
        this.lists = this.workList;
      }
    },

  },
    components:{
        ComMenu
    },
    mounted(){
      this.lists = this.workList;
      for(var i=0;i<this.menu.length;i++){
        this.cateIds.push(this.menu[i].id);
      }
    },
    props:['workList',"menu"]
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/index/work.less';
</style>
