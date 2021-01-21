<template>
   <section class="news">
        <div class="top">
            <div class="title text-center">
                <h4 class="text-center">新闻动态</h4>
            </div>
            <div class="middle clearfix">
                  <ComMenu v-bind="$attrs"/>
            </div>
        </div>
        <div class="news-detail">
            <div class="lists"  v-for="(v,k) in newsList" :key="v.id">
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
            index:0
        }
    },
    components:{
        ComMenu
    },
    props:['newsList']
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/common.less';
  /*新闻动态*/
    .news{
      margin-top:5%;
      .top{
        position: relative;
        .title{
          .title(45%,6rem);
          position: absolute;
          right:6%;
          @media (max-width: 420px) {
            top: -189%;
            @media (max-width: 375px) {
              top: -220%;
              @media (max-width: 320px) {
                top:-218%;
              }
            }
          }
        }
        .middle{
          .navTab(79%);
          .more{
            width: 21%;
            margin-top:3%;
          }
        }
      }
      .news-detail{
        .flexStyle(100%,nowrap);
        .lists{
          width: 48%;
          height: auto;
          margin-top:6%;
          margin-left:2%;
          background: #eeeeee;
          position: relative;
          .news-img{
            margin-left:4%;
            img{
              width: 100%;
            }
            .time{
              position: absolute;
              top: 49%;
              right: 3%;
              font-size: 0.5em;
            }
          }
          .news-intro{
            margin-top:22%;
            p{
              .baseP(1rem,justify);
            }
          }
        }
      }
    }
</style>