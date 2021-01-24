<template>
  <section class="case">
    <div class="title">
      <h4 class="text-center">案例展示</h4>
    </div>
    <div class="bottom">
      <ol class="indicators">
        <li :class="{active:index==k}" v-for="(v,k) in cases" :key="v.id" >
          <a href="javascript:;"></a>
        </li>
      </ol>
      <div class="work-list clearfix">
        <div class="box" v-for="(v,k) in cases" :key="v.id">
          <a href="javascript:;">
            <img :src="v.imgUrl" alt="">
          </a>
        </div>
      </div>
      <a href="javascript:;" class="prev">
        <img src="../../../static/image/phone/row-ph_03.png" alt=""/>
      </a>
      <a href="javascript:;" class="next">
        <img src="../../../static/image/phone/row-ph_05.png" alt=""/>
      </a>
    </div>
    </section>
</template>

<script>
    export default {
        name: "Case",
        data(){
          return{
            index:0,
          }
        },
        props:["cases"]
    }
</script>

<style lang="less" scoped>
  @import "../../assets/css/common.less";
  .case{
    margin-top: 5%;
    .title{
      .title(100%,4rem);
    }
    .bottom{
      width: 100%;
      margin-top:5%;
      position: relative;
      .indicators{
        .indicators(2.2rem,#c9c9c9);
        position:absolute;
        top: 110%;
        left: 41%;
      }
      .work-list {
        .flexStyle(90%,nowrap);
        div{
          width:47%;
          margin-left:2%;
          img{
            width: 100%;
          }
        }
      }
      .arrow(31%,1%,-5%);
    }
  }

</style>
