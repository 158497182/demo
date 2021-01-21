<template>
    <ul class="lists">
        <li v-for="(v,k) in icons" class="text-center" :key="v.id" :class="{active:index==k}">
            <div class="detail">
                <a href="javascript:;">
                    <img :src="v.imgUrl" alt="" />
                </a>
            </div>
            <p>{{v.name}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name:'Icon',
    data(){
        return {
            index:0,
        }
    },
    props:['icons']
}
</script>

<style lang="less" scoped>
 @import '../../assets/css/common.less';
  .lists {
      .flexStyle(100%, wrap);
      li {
        .baseLi(33.3%);
        .detail{
          .detail(62px,62px,62px,#ffffff,13% 0% 10% 18%);
          img{
            .baseImg(56%,27% -1% 0% 0%)
          }
          p {
            margin-top: 7%;
            text-align: center;
          }
        }
      }
      .active{
        .detail{
          background: @color;
          color:#ffffff;
        }
      }
    }
</style>