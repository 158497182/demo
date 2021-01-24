<template>
  <div>
        <Public>
            <section class="content" slot="content">
              <section class="about" >
                <div class="top clearfix">
                  <p class="pull-right">您当前所在的位置：
                    <a href="index.html">首页</a>/
                    <a href="#">微信开发</a>
                  </p>
                </div>
                <div class="middle">
                  <div class="lists clearfix" v-html="content"></div>
                </div>
              </section>
              <section class="intro">
                <Icon :icons="icons"/>
              </section>
                <Case :cases="cases"></Case>
            </section>
        </Public>
  </div>
</template>

<script>
import Public from './common/public'
import Icon from "./index/icon";
import Case from "./common/case";
export default {
    name:"Wechat",
    data(){
        return{
          content:`  <div class="left pull-left">
                      <div class="title">
                        <h4 class="text-center">微信开发</h4>
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
                    <div class="right pull-right">
                      <img src="../../static/image/phone/person_04.png" alt="">
                    </div>`,
          icons:[
            {id:1,name:"网页设计",imgUrl:"../../static/image/phone/ph_04.png"},
            {id:2,name:"网页设计",imgUrl:"../../static/image/phone/ph_04.png"},
            {id:3,name:"网页设计",imgUrl:"../../static/image/phone/ph_04.png"},
            {id:4,name:"网页设计",imgUrl:"../../static/image/phone/ph_04.png"},
            {id:5,name:"网页设计",imgUrl:"../../static/image/phone/ph_04.png"},
            {id:6,name:"网页设计",imgUrl:"../../static/image/phone/ph_04.png"},
          ],
          cases:[
            {id:1,imgUrl:"../../static/image/phone/work-ph_03.png"},
            {id:2,imgUrl:"../../static/image/phone/work-ph_03.png"},
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
  @import '../assets/css/wechat.less';
</style>
