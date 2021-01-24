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
        <div class="title">
          <h3 class="text-center">商脉优秀设计师——岑双华</h3>
        </div>
        <div class="descript">
          <div class="des">
            <h4>【简介】</h4>
            <div class="clearfix">
              <p class="pull-left left">
                &nbsp; &nbsp; &nbsp; &nbsp;大家好，我是岑双华， 很感谢商脉给了我展示和交流的机会。
                大学专业是投资理财，后面发现自己并不感兴趣最后选择了电商， 从事电商

              </p>
              <div class="pull-right right">
                <img src="../../static/image/phone/work-ph_03.png">
              </div>
            </div>
            <p>
              已经快3年了，做过美工，开过工作室，喜欢五月天、摄影、篮球。
              <br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;目前就职于这里，希望以后能有更好的作品和大家分享。<br>
            </p>
          </div>
          <div class="des">
            <h4>【对话】</h4>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp;商脉：对于电商类项目的布局、细节和配色这三个方面有什么经验可以分享？
              电商类项目最终卖的是产品，无论是高大上还是怎么的，只要你能迅速抓住客户的眼球，
              把该展示的卖点通过精心的设计，清晰简单地表现出来，最终促成交易，那么这就是好的设计。
              <br> <br>
              &nbsp; &nbsp; &nbsp; &nbsp;商脉：一般的项目，您的设计流程是怎样的？
              接到需求先和客户沟通，大致了解过后便开始构思整个页面，也就是参考、收集、整合的过程，
              接着出个框架给客户确定风格，关于视觉呈现，只能说“All roads lead to Rome”表现手法
              各种各样，可以手绘、可以建模、也可以摄影合成，不管怎样细节到位、贴合主题让客户满意才
              是我们的最终目的。
            </p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="title">
          <h4>【作品】</h4>
        </div>
        <div class="lists clearfix">
          <div class="box active">
            <a href="javascript:;">
              <img src="../../static/image/phone/work-ph_03.png" alt="">
            </a>
            <p class="text-center">
              家具品牌网络营销
            </p>
          </div>
          <div class="box">
            <a href="javascript:;">
              <img src="../../static/image/phone/work-ph_03.png" alt="">
            </a>
            <p class="text-center hidden">
              家具品牌网络营销
            </p>
          </div>
        </div>
        <a href="#" class="prev">
          <img src="../../static/image/phone/row-ph_03.png" alt=""/>
        </a>
        <a href="#" class="next">
          <img src="../../static/image/phone/row-ph_05.png" alt=""/>
        </a>
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

  </Public>
</div>
</template>

<script>
    import Public from "./common/public";
    export default {
        name: "ShareDetail",
        components: {Public},
    }
</script>

<style lang="less" scoped>
  @import "../assets/css/rcdetail.less";
</style>
