<template>
  <div>
    <Public>
      <section class="content" slot="content">
        <div class="top clearfix">
          <p class="pull-right">您当前所在的位置：
            <a href="index.html">首页</a>/
            <a href="#">优秀作品</a>
          </p>
        </div>
        <div class="middle">
          <div class="title">
            <h4 class="text-center">公司简介</h4>
          </div>
          <div class="company-con" v-html="content[0]"></div>

        </div>
        <div class="company">
          <div class="title">
            <h4 class="text-center">企业文化</h4>
          </div>
          <div class="company-con">
            <Icon :icons="icons"></Icon>
          </div>
        </div>
        <div class="bottom clearfix"  v-html="content[1]"></div>
      </section>

    </Public>
  </div>
</template>

<script>
  import Public from "./common/public";
  import Icon from "./index/icon"
  export default {
    name: "About",
    components: {Public,Icon},
    data(){
      return{
        content:[` <div class="top-con">
              <p>
                四川商脉科技有限公司，位于成都市锦江区大型商圈内，
                注册资金一千万（人民币），资金实力雄厚，并拥有行业顶级的自主研发设计技术人才。
              </p>
            </div>
            <div class="mid-con clearfix">
              <div class="left pull-left">
                <img src="../../static/image/phone/person_04.png" alt="">
              </div>
              <div class="right pull-right">
                <p>
                  商脉科技已成功为川内多家知名企业客户提供了全方位，多层面的信息化解决方案。
                </p>
              </div>
            </div>`,` <div class="pull-left left">
            <p>
              社会价值——成为一家提供专业信息化服务的大型高科技企业
              行业价值——成为一个聚集众多IT精英自由发挥的平台
            </p>
          </div>
          <div class="pull-right right">
            <img src="../../static/image/phone/work-ph_03.png" alt="">
          </div>`],
        icons:[
          {id:1,name:"网页设计",imgUrl:"../../static/image/phone/ph_04.png"},
          {id:2,name:`人才理念<br>不拘一格，人尽其才`,imgUrl:"../../static/image/phone/ph_05.png"},
          {id:3,name:`网页设计`,imgUrl:"../../static/image/phone/ph_06.png"},
        ],
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../assets/css/about.less";
</style>
