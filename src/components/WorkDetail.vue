<template>
<div>
  <Public>
    <!--主体-->
    <section class="content" slot="content">
      <section class="about" >
        <div class="top clearfix">
          <p class="pull-right">您当前所在的位置：
            <a href="index.html">首页</a>/
            <a href="#">网站建设</a>
          </p>
        </div>
        <div class="middle">
          <div class="lists clearfix">
            <div class="left pull-left">
              <img src="../../static/image/phone/person_04.png" alt="">
            </div>
            <div class="right pull-right">
              <div class="title text-center">
                <h4>网站建设</h4>
                <small class="text-capitalize">website construction</small>
              </div>
              <div class="gwsc-con">
                <p>
                  购物商城类似于现实世界当中的商店，
                  造就对普通消费和加大市场流通带来巨大的发展空间。
                  尽能的还消费者以利益， 带动公司发展和企业腾飞，
                  引导国民经济稳定快速发展。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="intro">
        <ul class="lists">
          <li class="active text-center">
            <div class="detail">
              <a href="javascript:;">
                <img src="../../static/image/phone/web_04.png" alt=""/>
              </a>
              <p >集团上市公司管网及站群</p>
            </div>
          </li>
          <li class="text-center">
            <div class="detail">
              <a href="javascript:;">
                <img src="../../static/image/phone/web_05.png" alt=""/>
              </a>
              <p>html响应式网站</p>
            </div>
          </li>
          <li class="text-center">
            <div class="detail">
              <a href="javascript:;">
                <img src="../../static/image/phone/web_10.png" alt=""/>
              </a>
              <p >企业及品牌官网</p>
            </div>
          </li>
          <li class="text-center">
            <div class="detail">
              <a href="javascript:;">
                <img src="../../static/image/phone/web_11.png" alt=""/>
              </a>
              <p >营销策略型网站</p>
            </div>
          </li>
        </ul>
      </section>
      <section class="case">
        <div class="title">
          <h4 class="text-center">案例展示</h4>
        </div>
        <div class="bottom">
          <div class="work-list clearfix">
            <div class="box">
              <a href="javascript:;">
                <img src="../../static/image/phone/web_03.png" alt="">
              </a>
            </div>
            <div class="box">
              <a href="javascript:;">
                <img src="../../static/image/phone/web_03.png" alt="">
              </a>
            </div>
          </div>
          <a href="#" class="prev">
            <img src="../../static/image/phone/arrow_06.png" alt=""/>
          </a>
          <a href="#" class="next">
            <img src="../../static/image/phone/arrow_03.png" alt=""/>
          </a>
        </div>
      </section>
    </section>
  </Public>
</div>
</template>

<script>
    import Public from "./common/public";

    export default {
        name: "WorkDetail",
        components: {Public},
    }
</script>
<style lang="less" scoped>
  @import '../assets/css/web.less';
</style>
