<template>
  <div>
      <Public>
        <section class="content" slot="content">
            <About :descript="descript"/>
            <Ywtx v-bind:icons="icons"/>
            <Work ref="work" :menu="workMenu" :workList="workList" />
            <Rcgx :rcgxList="rcgxList"/>
            <News :newsList="newsList" :menu="newsMenu"/>
        </section>
      </Public>
  </div>
</template>

<script>
import Public from './common/public'
import About from './index/about'
import Ywtx from './index/ywtx'
import Work from './index/work'
import Rcgx from './index/rcgx'
import News from './index/news'
export default {
    name:'Index',
    data(){
        return{
          descript:[` <h4 class="text-center">关于我们</h4>
                <p>
                  自成立以来，始终致力于为中国企业提供专业信息化服务， 在川内率先开创了专属个性化定制模式，实现企业“信息化运营”。
                </p>`,` <div class="top-about">
                <h4 class="text-center"> 成都商脉科技有限公司</h4>
                <p>
                  四川商脉科技有限公司，位于成都锦江区大型商圈内，拥有行业顶级的技术人才。
                </p>
            </div>
            <div class="about-img">
                <img src="../../../static/image/phone/about_03.png" alt="" />
            </div>`],
            workMenu:[
                {id:0,name:'All'},
                {id:1,name:'网页设计'},
                {id:2,name:'UI设计'},
                {id:3,name:'微信设计'}
            ],
            workList:[
              {id:1,title:"林氏木业",cate_id:1,des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_03.png'},
              {id:2,title:"林氏木业",cate_id:1,des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_03.png'},
              {id:3,title:"林氏木业",cate_id:2,des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_05.png'},
              {id:4,title:"林氏木业",cate_id:2,des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_05.png'},
              {id:5,title:"林氏木业",cate_id:3,des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_03.png'},
              {id:6,title:"林氏木业",cate_id:3,des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_03.png'},
            ],
            newsMenu:[
                {id:0,name:'All'},
                {id:1,name:'动态新闻'},
                {id:2,name:'行业新闻'},
            ],
            newsList:[
              {id:1,cate_id:1,imgUrl:"../../../static/image/phone/news_03.png",time:"2020/12/14",title:"2021年你该如何规划",des:"经过上半年的观察，成都商脉科技有限"},
              {id:2,cate_id:1,imgUrl:"../../../static/image/phone/news_06.png",time:"2020/12/14",title:"2021年你该如何规划",des:"经过上半年的观察，成都商脉科技有限"},
              {id:3,cate_id:2,imgUrl:"../../../static/image/phone/news_09.png",time:"2020/12/14",title:"2021年你该如何规划",des:"经过上半年的观察，成都商脉科技有限"},
              {id:4,cate_id:2,imgUrl:"../../../static/image/phone/news_03.png",time:"2020/12/14",title:"2021年你该如何规划",des:"经过上半年的观察，成都商脉科技有限"},
            ],
            icons:[
                {id:1,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:2,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:3,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:4,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:5,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:6,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'}
            ],
            banner:[
              {id:1,imgUrl:"../../static/image/phone/banner_ph.png"},
              {id:2,imgUrl:"../../static/image/phone/banner_ph.png"},
              {id:3,imgUrl:"../../static/image/phone/banner_ph.png"},
            ],
            rcgxList:[
                {id:1,name:"何丽 UI设计师",imgUrl:'../../../static/image/phone/person_03.png'},
                {id:2,name:"何丽 UI设计师",imgUrl:'../../../static/image/phone/person_03.png'},
            ],
            contact:[
                {id:1,name:"电话：13625899525",imgUrl:'../../../static/image/phone/tb_03.png'},
                {id:2,name:"电话：13625899525",imgUrl:'../../../static/image/phone/tb_07.png'},
                {id:3,name:"电话：13625899525",imgUrl:'../../../static/image/phone/tb_11.png'},
                {id:4,name:"电话：13625899525",imgUrl:'../../../static/image/phone/tb_14.png'},
                {id:5,name:"电话：13625899525",imgUrl:'../../../static/image/phone/tb_16.png'},
            ],
            menuList:[
                  {id:1,name:"首页",url:'/'},
                  {id:2,name:"业务体系",url:'/business'},
                  {id:3,name:"优秀作品",url:'/work'},
                  {id:4,name:"人才共享",url:'/share'},
                  {id:5,name:"新闻动态",url:'/news'},
                  {id:6,name:"关于我们",url:'/about'},
            ],
            wechat:["../../../static/image/phone/ewm_03.png","../../../static/image/phone/ewm_05.png"]
        }
    },
    components:{
        Public,
        About,
        Ywtx,
        Work,
        Rcgx,
        News
    },
    methods:{

    },
    created() {
      localStorage.setItem("banner",JSON.stringify(this.banner));
      localStorage.setItem("contact",JSON.stringify(this.contact));
      localStorage.setItem("wechat",JSON.stringify(this.wechat));
      localStorage.setItem("menuList",JSON.stringify(this.menuList));
    }
}
</script>

<style lang="less" scoped>

</style>
