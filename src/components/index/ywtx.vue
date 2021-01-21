<template>
  <div>
    <section class="ywtx">
        <div class="title">
            <h4 class="text-center">业务体系</h4>
        </div>
        <div class="ywtx-con clearfix">
            <Icon  v-bind="$attrs"/>
        </div>
    </section>
  </div>
</template>

<script>
import Icon from './icon'
export default {
    name:'Ywtx',
    components:{
        Icon,
     }
}
</script>
<style lang="less" scoped>
 @import '../../assets/css/common.less';
  /*业务体系*/
    .ywtx{
      .baseBackg(32rem,"../../../static/image/phone/ywtx_02.png");
      .title{
        h4{
          .baseH4(@h4,2% 0% 0%,#ffffff);
        }
      }
      .ywtx-con{
        margin-top:2%;
        .lists{
          .flexStyle(90%,wrap);
          .active{
            .detail{
              background: @color;
            }
          }
          li{
            .baseLi(33.3%);
            .detail{
              .detail(62px,62px,62px,#ffffff,5% 0% 0% 18%);
              img{
                .baseImg(56%,27% -1% 0% 0%)
              }
            }
            p{
              margin-top:3%;
              text-align: center;
            }
          }
        }
      }
    }
</style>