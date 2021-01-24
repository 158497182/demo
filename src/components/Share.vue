<template>
  <div>
        <Public>
            <section class="content" slot="content">
                <div class="top clearfix">
                    <p class="pull-right">您当前所在的位置：
                        <a href="index.html">首页</a>/
                        <a href="#">人才共享</a>
                    </p>
                </div>
                <div class="middle">
                    <div class="lists clearfix" v-for="(v,k) in lists.slice(0,2)" :class="{active:index==k}" v-if="k%2==0">
                        <div class="left pull-left" >
                            <div class="title">
                              <small>{{v.title}}</small>
                              <h4 class="text-right">{{v.name}}</h4>
                            </div>
                            <div>
                              <p v-for="(val,index) in v.des">
                                {{val}}
                              </p>
                            </div>
                        </div>
                        <div class="right pull-right">
                            <div>
                                <img :src="v.imgUrl" alt="">
                            </div>
                            <div class="more text-center">
                              <router-link to="/share/detail?id='+v.id+'">read more++</router-link>
                              <router-view></router-view>
<!--                                <a href="#">read more++</a>-->
                            </div>
                        </div>
                    </div>
                    <div class="lists clearfix"  :key="v.id" v-else>
                        <div class="left pull-left">
                            <div>
                                <img :src="v.imgUrl" alt="">
                            </div>
                            <div class="more text-center">
<!--                                <a href="#">read more++</a>-->
                              <router-link to="/share/detail?id='+v.id+'">read more++</router-link>
                              <router-view></router-view>
                            </div>
                        </div>
                        <div class="right pull-right">
                            <div class="title">
                                <small>{{v.title}}</small>
                                <h4 class="text-right">{{v.name}}</h4>
                            </div>
                            <div>
                                <p v-for="(val,index) in v.des">
                                  {{val}}
                                </p>
                            </div>
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
import Public from './common/public'
export default {
    name:"Share",
    data(){
        return{
            index:0,
            lists:[
              {id:1,name:"田丽",title:"资深网页设计师",imgUrl:"../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:2,name:"田丽1",title:"资深网页设计师",imgUrl:"../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:3,name:"田丽2",title:"资深网页设计师",imgUrl:"../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:4,name:"田丽3",title:"资深网页设计师",imgUrl:"../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:5,name:"田丽4",title:"资深网页设计师",imgUrl:"../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:6,name:"田丽5",title:"资深网页设计师",imgUrl:"../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
              {id:7,name:"田丽6",title:"资深网页设计师",imgUrl:"../../static/image/phone/person_04.png",des:['◆ 会各种设计软件，更是PS熟练程度达到90%，AI熟练度80%',' ◆ 会手写代码HTML+css和JS的效果修改等']},
            ]
        }
    },
    components:{
      Public
    }
}
</script>

<style lang="less" scoped>
  @import '../assets/css/rcgx.less';
</style>
