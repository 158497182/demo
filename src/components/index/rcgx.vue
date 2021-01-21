<template>
   <section class="rcgx">
        <div class="title">
            <h4 class="text-center">人才共享</h4>
        </div>
        <div class="bottom">
            <div class="persons clearfix"  >
                <div :class="{active:index==k}" v-for="(v,k) in rcgxList" :key="v.id" >
                    <a href="#">
                        <img :src="v.imgUrl" />
                    </a>
                    <p class="intro text-center">
                       {{v.name}}
                    </p>
                </div>
               
            </div>
            <ol class="indicators">
                <li :class="{active:index==k}"  v-for="(v,k) in rcgxList" :key="v.id">
                    <a href="#"></a>
                </li>
            </ol>
        </div>
    </section>
</template>

<script>
export default {
    name:'Rcgx',
    data(){
        return{
            index:0
        }
    },
    props:['rcgxList']
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/common.less';
   /*人才共享*/
    .rcgx{
      .baseBackg(23rem,"../../../static/image/phone/rcgx-ph_02.png");
      .title{
        h4{
          .baseH4(@h4,2% 0% 0%,#ffffff);
        }
      }
      .bottom{
        position:relative;
        .persons{
          .flexStyle(100%,nowrap);
          div{
            width: 45%;
            margin:5% 2% 0%;
            position: relative;
            img{
              width: 100%;
            }
            p{
              .baseP(0,center);
              width: 100%;
              line-height:3em;
              background: black;
              color:#ffffff;
              position: absolute;
              top:61%;
              z-index: 999;
              opacity: 0.6;
            }
          }
        }
        .indicators{
          .indicators(2.2rem,#ffffff);
          position:absolute;
          top:117%;
          left:23%;
        }
      }
    }
</style>