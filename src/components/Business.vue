<template>
  <div>
        <Public>
            <section class="content" slot="content">
              <section class="about" >
                <div class="top clearfix">
                  <p class="pull-right">您当前所在的位置：
                    <a href="index.html">首页</a>/
                    <a href="#">网站建设</a>
                  </p>
                </div>
                <div class="middle" v-html="content">

                </div>
              </section>
              <section class="intro">
                <Icon :icons="icons"></Icon>
              </section>
              <Case :cases="cases"></Case>
            </section>
        </Public>
  </div>
</template>

<script>
import Public from './common/public'
import Case from "./common/case";
import Icon from "./index/icon";
export default {
    name:"Business",
    data(){
        return{
            index:0,
            content:`<div class="lists clearfix">
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
                  </div>`,
            lists:[
              {id:1,name:"田丽",title:"资深网页设计师",imgUrl:"../../static/../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:2,name:"田丽1",title:"资深网页设计师",imgUrl:"../../static/../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:3,name:"田丽2",title:"资深网页设计师",imgUrl:"../../static/../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:4,name:"田丽3",title:"资深网页设计师",imgUrl:"../../static/../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:5,name:"田丽4",title:"资深网页设计师",imgUrl:"../../static/../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:6,name:"田丽5",title:"资深网页设计师",imgUrl:"../../static/../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:7,name:"田丽6",title:"资深网页设计师",imgUrl:"../../static/../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
            ],
          icons:[
            {id:1,name:"集团上市公司管网及站群",imgUrl:"../../static/image/phone/web_04.png"},
            {id:2,name:"html响应式网站",imgUrl:"../../static/image/phone/web_05.png"},
            {id:3,name:"企业及品牌官网",imgUrl:"../../static/image/phone/web_10.png"},
            {id:4,name:"营销策略型网站",imgUrl:"../../static/image/phone/web_11.png"},
          ],
          cases:[
            {id:1,imgUrl:"../../static/image/phone/web_03.png"},
            {id:2,imgUrl:"../../static/image/phone/web_03.png"},
          ]
        }
    },
    components:{
      Icon,
      Case,
      Public
    }
}
</script>

<style lang="less" scoped>
  @import '../assets/css/web.less';
</style>
