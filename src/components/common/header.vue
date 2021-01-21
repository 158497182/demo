<template>
  <div>
        <section class="header clearfix">
            <div class="pull-left logo">
                    <img src="../../../static/image/phone/logo_ph.png" alt="" />
                </div>
                <div class="pull-right menu">
                    <a href="javascript:;" @click="toggleMenu">
                        <img src="../../../static/image/phone/nav_ph.png" alt="">
                    </a>
                </div>
                <div class="menu-nav" v-show="isShow">
                    <div @click="close">
                        <img src="../../../static/image/phone/close_03.png" alt="" />
                    </div>
                    <ul class="nav">
                        <li v-for="(v,k) in menuList" :key="v.id" @click="toMenu(k)">
                         <a href="javascript:;" class="text-center " :class="{current:index==k}">{{v.name}}</a>
                        </li>
                    </ul>
                </div>
        </section>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            isShow:false,
            index:0
        }
    },
    methods:{
        toggleMenu(){
            this.isShow = !this.isShow;
        },
        close(){
             this.isShow = !this.isShow;
        },
        toMenu(key){
          this.index = key;
          this.$router.push(this.menuList[key].url);
          this.isShow = !this.isShow;
        }
    },
    props:["menuList"]
}
</script>

<style lang="less" scoped>
.header{
  margin-bottom: 5%;
  .logo{
    width:22.6%;
    img{
      width:100%;
      padding-top: 15%;
      padding-left: 5%;
    }
  }
  .menu{
    width:9.3%;
    a{
      img{
        width:100%;
        padding-top: 35%;
        padding-left: 5%;
      }
    }
  }
  .menu-nav{
    width:100%;
    height:100%;
    background: #4287d5;
    opacity: 0.8;
    position: absolute;
    top:0;
    left:0;
    z-index:999;
    div{
      width: 9%;
      height: 5%;
      margin-top: 2%;
      margin-right: 4%;
      float: right;
      img{
        width:100%;
      }
    }
    ul{
      margin-top:10%;
      li{
        position: relative;
        .current:before{
            content: '';
            width: 11%;
            border-bottom: 3px solid #ffffff;
            position: absolute;
            top: 49%;
            left: 20%;
          }
        .current:after{
          content: '';
          width: 11%;
          border-bottom:3px solid #ffffff;
          position: absolute;
          top: 49%;
          right:20%;
        }
        a{
          color:#ffffff;
          font-size: 2em;
        }
      }
    }
  }
}

</style>