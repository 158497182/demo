<template>
  <div>
    <Public>
      <!--主体-->
      <section class="content" slot="content">
        <div class="top clearfix">
          <p class="pull-right">您当前所在的位置：
            <a href="index.html">首页</a>/
            <a href="#">优秀作品</a>
          </p>
        </div>
        <div class="middle">
          <div class="top-nav">
            <ul class="nav nav-pills">
              <li :class="{active:index==k}"  v-for="(val,k) in cate" :key="val.id">
                <a href="#">{{val.name}}</a>

              </li>
            </ul>
          </div>
          <div class="lists clearfix">
            <div class="box" v-for="(va,k) in worklists" :key="va.id">
              <a href="javascript:;">
                <img :src="va.imgUrl" alt="">
              </a>
              <p class="text-center">
                <router-link to="/work/detail?id='+val.id+'">{{va.title}}</router-link>
                <router-view/>
<!--                <a href="javascript:;" @click="toDetail(va.id)">{{va.title}}</a>-->
              </p>
              <p class="text-center">
                <span>{{va.des}}</span>
              </p>
            </div>
          </div>
          <ul class="pagination">
            <li><a href="#" class="disabled">前一页</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">后一页</a></li>
          </ul>
        </div>

      </section>

    </Public>
  </div>

</template>

<script>
  import Public from "./common/public";
  export default {
    name: "Work",
    components: {Public},
    data(){
      return{
        index:0,
        cate:[
          {id:0,name:'All'},
          {id:1,name:'设计'},
          {id:2,name:'网站建设'},
          {id:3,name:'微信开发'},
        ],
        worklists:[
          {id:1,cate_id:1,title:"Allen珠宝",des:"珠宝品牌商城设计",imgUrl:"../../static/image/phone/work-ph_03.png"},
          {id:2,cate_id:1,title:"Allen珠宝",des:"珠宝品牌商城设计",imgUrl:"../../static/image/phone/work-ph_03.png"},
          {id:3,cate_id:1,title:"Allen珠宝",des:"珠宝品牌商城设计",imgUrl:"../../static/image/phone/work-ph_03.png"},
          {id:4,cate_id:1,title:"Allen珠宝",des:"珠宝品牌商城设计",imgUrl:"../../static/image/phone/work-ph_03.png"},
          {id:5,cate_id:1,title:"Allen珠宝",des:"珠宝品牌商城设计",imgUrl:"../../static/image/phone/work-ph_03.png"},
          {id:6,cate_id:1,title:"Allen珠宝",des:"珠宝品牌商城设计",imgUrl:"../../static/image/phone/work-ph_03.png"},
        ]
      }
    },
    methods:{
      toDetail(id){
        console.log(this.$route);
        this.$route.push('/work/detail?id='+id);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/work.less';
</style>
