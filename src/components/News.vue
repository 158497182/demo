<template>
<div>
  <Public>
    <!--主体-->
    <section class="content" slot="content">
      <div class="top clearfix">
        <p class="pull-right">您当前所在的位置：
          <a href="index.html">首页</a>/
          <a href="#">新闻动态</a>
        </p>
      </div>
      <div class="middle">
        <div class="top-nav">
          <ul class="nav nav-pills">
            <li :class="{active:val.id==cateId}"  v-for="(val,k) in cate" :key="val.id">
              <a href="javascript:;" @click="change(val)">{{val.name}}</a>
            </li>
          </ul>
        </div>
        <div class="lists clearfix">
          <div class="box" v-for="(va,k) in newslists.slice((currentPage- 
    1)*pageSize,currentPage*pageSize)" :key="va.id">
            <a href="javascript:;">
              <img :src="va.imgUrl" alt="">
            </a>
            <p class="text-center">
              <a href="javascript:;" @click="toDetail(va.id)">{{va.name}}</a>
            </p>
            <p class="text-center">time:{{va.time}}</p>
            <p class="text-center">
              <a href="javascript:;" @click="toDetail(va.id)"> {{va.des}}</a>
            </p>
          </div>
        </div>
         <el-pagination :page-size="pageSize" background
                  @current-change="changePage"
                  @prev-click="changePage"
                  @next-click="changePage"
                  layout="prev, pager, next"
                  :current-page.sync = "currentPage"
                  :total="lists.length">
          </el-pagination>

        <!-- <ul class="pagination">
          <li><a href="#" class="disabled">前一页</a></li>
          <li class="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">后一页</a></li>
        </ul> -->
      </div>

    </section>

  </Public>
</div>
</template>

<script>
    import Public from "./common/public";
    export default {
        name: "News",
        components: {Public},
      data(){
          return {
            index:0,
            cateId:0,
            page: 1,
            pageSize: 2,
            currentPage: 1,
            lists:[],
            cate:[
              {id:0,name:'All'},
              {id:1,name:'设计'},
              {id:2,name:'网站建设'},
              {id:3,name:'微信开发'},
            ],
            newslists:[
              {id:1,cate_id:1,title:"Allen珠宝",des:"打造一家成功的创业公司不太容易",imgUrl:"../../static/image/phone/work-ph_03.png",time:"2020/12/19"},
              {id:2,cate_id:1,title:"Allen珠宝",des:"打造一家成功的创业公司不太容易",imgUrl:"../../static/image/phone/work-ph_03.png",time:"2020/12/19"},
              {id:3,cate_id:2,title:"Allen珠宝",des:"打造一家成功的创业公司不太容易",imgUrl:"../../static/image/phone/work-ph_03.png",time:"2020/12/19"},
              {id:4,cate_id:2,title:"Allen珠宝",des:"打造一家成功的创业公司不太容易",imgUrl:"../../static/image/phone/work-ph_03.png",time:"2020/12/19"},
              {id:5,cate_id:3,title:"Allen珠宝",des:"打造一家成功的创业公司不太容易",imgUrl:"../../static/image/phone/work-ph_03.png",time:"2020/12/19"},
              {id:6,cate_id:3,title:"Allen珠宝",des:"打造一家成功的创业公司不太容易",imgUrl:"../../static/image/phone/work-ph_03.png",time:"2020/12/19"},
            ]
          }
      },
      methods:{
          toDetail(id){
            this.$router.push({path:'/news/detail', params:{ id: id }});
          },
          change(item) {
            this.cateId = item.id;
            // console.log(this.cateId,item.id)
            //如果点击分类，切换对应的列表
            if (this.cateId != 0) {
              this.lists = this.newslists.filter(item => item.cate_id == this.cateId);
            } else {
              this.lists = this.newslists;
            }
          },
          changePage(val) {
            this.currentPage = val;
          },
      },
      mounted(){
          this.lists = this.newslists;
      }
    }
</script>

<style lang="less" scoped>
  @import "../assets/css/news.less";
</style>
