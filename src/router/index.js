import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Business from '@/components/Business'
import News from '@/components/News'
import Work from '@/components/Work'
import About from '@/components/About'
import NewsDetail from '@/components/NewsDetail'
import WorkDetail from '@/components/WorkDetail'
import Share from '@/components/Share'
import ShareDetail from '@/components/ShareDetail'
import Shop from '@/components/Shop'
import Wechat from '@/components/Wechat'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/business',
            name: 'Business',
            component: Business,
           children: [

           ]
        },

      {
        path:"/share",
        name:"Share",
        component: Share
      },
      {
        path:"/share/detail",
        name:"ShareDetail",
        component: ShareDetail
      },
      {
        path:"/shop",
        name:"Shop",
        component: Shop
      },
      {
        path:"/wechat",
        name:"Wechat",
        component: Wechat
      },
      {
        path: '/work',
        name: 'Work',
        component: Work,
        children:[

        ],
      },
      {
        path: '/work/detail',
        name: "WorkDetail",
        component: WorkDetail
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/news',
        name: 'News',
        component: News,
        children:[

        ],
      },
      {
        path:'/news/detail',
        name:"NewsDetail",
        component:NewsDetail
      }
    ]
})
