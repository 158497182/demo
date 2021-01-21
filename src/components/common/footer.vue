<template>
  <div>
    <section class="footer">
        <section class="message">
            <form action="" method="post">
                <span>留下你的意见和建议：</span>
                <input type="text" name="msg" value="" />
                <button type="submit">提交</button>
            </form>
        </section>
        <section class="contact">
            <address class="text-center">
                <p>
                    <img src="../../../static/image/phone/tb_03.png" alt="">
                    <span>电话：13625899525</span>
                </p>
                <p>
                    <img src="../../../static/image/phone/tb_07.png" alt="">
                    <span>电话：13625899525</span>
                </p>
                <p>
                    <img src="../../../static/image/phone/tb_11.png" alt="">
                    <span>电话：13625899525</span>
                </p>
                <p>
                    <img src="../../../static/image/phone/tb_14.png" alt="">
                    <span>电话：13625899525</span>
                </p>
                <p>
                    <img src="../../../static/image/phone/tb_16.png" alt="">
                    <span>电话：13625899525</span>
                </p>
            </address>
            <div class="ewm clearfix">
                <div class="pull-left">
                    <img src="../../../static/image/phone/ewm_03.png" alt="" />
                </div>
                <div class="pull-right">
                    <img src="../../../static/image/phone/ewm_05.png" alt="" />
                </div>
            </div>
        </section>
    </section>
  </div>
</template>

<script>
export default {
  name:"Footer",
  data(){
    return {
      contact:[]
    }
  },
  mounted(){
    this.$on("data-footer",function(value){
// console.log(value);
    });
  }
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/common.less';
 .footer{
    .message{
      width: 100%;
      height:20%;
      background: #999999;
      margin: 0 auto;
      margin-top:5%;
      form{
        @media (max-width: 415px){
          padding-left: 4%;
          @media (max-width: 376px){
            padding-left: 3%;
          }
          @media (max-width: 320px){
            padding-left: 2%;
          }
        }
  
        input{
          width:38%;
          border: none;
          border-bottom: 1px solid #ffffff;
          background: none;
          padding-top: 6%;
          margin-bottom: 6%;
          @media (max-width: 415px){
            width: 39%;
            @media (max-width: 360px){
              width:35%;
              @media (max-width: 320px){
                width: 32%;
              }
            }
          }
  
        }
        button{
          width: 13%;
          background: #4287d5;
          text-align: center;
          border:none;
          border-radius: 0.35rem;
          @media (max-width: 415px){
            margin-left:2%;
            @media (max-width: 360px){
              margin-left:1%;
            }
          }
        }
      }
    }
    .contact{
      width: 100%;
      background: #000000;
      address{
        padding-top:10%;
        p{
          width: 100%;
          color:#ffffff;
          font-size: 1.2em;
          text-indent: 5%;
          img{
            width: 6%;
          }
          span{
            font-size: 1.7rem;
            margin-left:1%;
          }
        }
      }
      .ewm{
        width:68%;
        margin:0 auto;
        div{
          width: 45%;
          padding-bottom: 10%;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>