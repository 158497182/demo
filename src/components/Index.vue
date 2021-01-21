<template>
  <div>
      <Public @e-index="contact">
        <section class="content" slot="content">
            <About :descript="descript"/>
            <Ywtx v-bind:icons="icons"/>
            <Work :workMenu="workMenu" :workList="workList"/>
            <Rcgx :rcgxList="rcgxList"/>
            <News :newsList="newsList" :newsMenu="newsMenu"/>
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
            descript:[
                {name:'关于我们',des:" 自成立以来，始终致力于为中国企业提供专业信息化服务， 在川内率先开创了专属个性化定制模式，实现企业“信息化运营”。"},
                {name:'成都商脉科技有限公司',des:'四川商脉科技有限公司，位于成都锦江区大型商圈内，拥有行业顶级的技术人才。',imgUrl:'../../../static/image/phone/about_03.png'}
            ],
           
           workMenu:[
                {id:1,name:'All'},
                {id:2,name:'网页设计'},
                {id:3,name:'UI设计'},
                {id:4,name:'微信设计'}
            ],
            newsMenu:[
                {id:1,name:'All'},
                {id:2,name:'动态新闻'},
                {id:3,name:'行业新闻'},
            ],
            icons:[
                {id:1,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:2,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:3,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:4,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:5,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'},
                {id:6,name:"网页设计",imgUrl:'../../../static/image/phone/ph_01.png'}
            ],
            workList:[
                {id:1,title:"林氏木业",des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_03.png'},
                {id:2,title:"林氏木业",des:"家具品牌网络营销",imgUrl:'../../../static/image/phone/work-ph_03.png'},
            ],
            newsList:[
                {id:1,imgUrl:"../../../static/image/phone/news_03.png",time:"2020/12/14",title:"2021年你该如何规划",des:"经过上半年的观察，成都商脉科技有限"},
                {id:2,imgUrl:"../../../static/image/phone/news_03.png",time:"2020/12/14",title:"2021年你该如何规划",des:"经过上半年的观察，成都商脉科技有限"}
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
            ]
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
    mounted(){
        this.$emit('data-footer',this.contact);
    }

}
</script>

<style lang="less" scoped>
         
</style>