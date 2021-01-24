<template>
<div>
  <Public>
    <!--主体-->
    <section class="content" slot="content">
      <div class="top clearfix">
        <p class="pull-right">您当前所在的位置：
          <a href="index.html">首页</a>/
          <a href="#">新闻动态详情</a>
        </p>
      </div>
      <div class="middle">
        <div class="title">
          <h3 class="text-center">三大运营商投入 物联网将是下一个风口</h3>
        </div>
        <div class="descript">
          <div class="des">
            <div class="clearfix">
              <div class="pull-left left">
                <img src="../../static/image/phone/work-ph_03.png">
              </div>
              <p class="pull-right right">
                &nbsp; &nbsp; &nbsp; &nbsp;继 PC、互联网、移动互联网之后，下一个风口在哪儿？答案恐怕非物联网莫属。
                &nbsp; &nbsp; &nbsp; &nbsp;正在上海举行的世界移动通信大会上，你随处都可以看到物联网的身影。
                重点是它们不仅仅是展示，而是已具备商用的能力。
              </p>
            </div>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp;从基础连接的电信运营商、平台解决方案的设备商、芯片模组的组装工厂以及C端的终端厂商和应用开发商，
              他们的产品都正在趋于成熟。可以说，物联网已经从前期的市场培育期进入到快速发展的阶段。
              &nbsp; &nbsp; &nbsp; &nbsp; 数据显示，2017 年全球物联网市场规模将达到 4500 亿美元，2018 年有望超过 1.9 万亿元。
              到 2020 年，全球物联网终端数量将达到 260 亿台。加上包括大量的资本涌入，物联网的风口已经来了。
            </p>
          </div>
          <div class="des">
            <div class="clearfix">
              <div class="pull-left left">
                <h4 class="text-center">运营商战略之重</h4>
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; 许久没有看到三大运营商同台竞技，这次因为物联网他们又拉开了架势，投入重兵布局并列为未来战略之重。
                </p>
              </div>
              <div class="pull-right right">
                <img src="../../static/image/phone/work-ph_03.png">
              </div>
            </div>
          </div>
          <div class="des">
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp;中国移动副总裁沙跃家表示，中国移动计划在 2020 年实现全网连接数量超过 17.5 亿，并且成为数字化创新的全球领先运营商。
              &nbsp; &nbsp; &nbsp; &nbsp;“今年前 5 个月的物联网连接数增量已达到去年全年水平，保持了高速增长的态势；连接数占比较大的领域包括车联网、
              智能单车、金融、能源和可穿戴设备等。”沙跃家透露的数据显示。
              &nbsp; &nbsp; &nbsp; &nbsp;据了解，截至 5 月底，中国移动物联网连接数已经突破 1.2 亿，是全球最大的物联网连接提供商；
              同时，中国移动承载物联网基站数超 162 万，月承载流量已超过 2000TB。
            </p>
          </div>

        </div>
      </div>
      <div class="page">
        <div class="prevPage ">
          上一篇： <a href="#" class="active">优秀设计师——袁康</a>
        </div>
        <div class="nextPage">
          下一篇：<a href="#">优秀设计师——张雯琳</a>
        </div>
      </div>

    </section>
    <!--底部-->

  </Public>
</div>
</template>

<script>
    import Public from "./common/public";

    export default {
        name: "NewsDetail",
        components: {Public},
    }
</script>

<style lang="less" scoped>
  @import "../assets/css/newsdetail.less";
</style>
