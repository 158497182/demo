<template>
   <section class="work">
        <div class="top">
            <div class="title">
                <h4 class="text-center">优秀作品</h4>
            </div>
            <div class="work-menu clearfix">
                <ComMenu v-bind="$attrs"/>
            </div>
        </div>
        <div class="bottom">
            <div class="work-list clearfix">
                <div class="box" :class="{active:k==index}" v-for="(v,k) in workList" :key="v.id" @click="index=k">
                    <a href="javascript:;">
                        <img :src="v.imgUrl" alt="">
                    </a>
                    <p class="text-center">
                        <span>{{v.title}}</span>
                        <span>{{v.des}}</span>
                    </p>
                </div>
            </div>
            <a href="#" class="prev">
                <img src="../../../static/image/phone/row-ph_03.png" alt="" />
            </a>
            <a href="#" class="next">
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
            index:0
        }
    },
    components:{
        ComMenu
    },
    props:['workList']
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/common.less';
    .work{
      margin-top:5%;
      .top{
        position: relative;
        .title{
          .title(45%,6rem);
          position: absolute;
          right:5%;
          @media (max-width: 420px){
            top:-178%;
            @media (max-width: 375px){
              top:-178%;
              @media (max-width: 320px) {
                top: -89%;
              }
            }
          }
        }
        .work-menu{
          .leftNav{
            width:79%;
            .navTab(100%);
              @media (min-width: 375px) {
                /deep/ .nav-pills>li+li  {
                    margin-left:-2px!important;
                  }
              }
                       
          }
         
          .more{
            width: 21%;
            margin-top:3%;
          }
        }
      }
      .bottom{
        width: 100%;
        margin-top:10%;
        position: relative;
        .work-list {
          .flexStyle(90%,nowrap);
          .active{
            color:#ffffff;
            background: #000000;
          }
          div{
              width:47%;
              margin-left:2%;
              background: #eeeeee;
              img{
                width: 90%;
                margin-top: 7%;
                margin-left: 5%;
              }
              p{
                .baseP(0,center);
                margin-top:10%;
                span:nth-child(1){
                  font-size: 1.3rem;
                }
              }
          }
        }
        .arrow(31%,2%,-4%)
      }
    }
</style>