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
                <p v-for="(v,k) in contact" :key="k">
                    <img :src="v.imgUrl" alt="">
                    <span>{{v.name}}</span>
                </p>
            </address>
            <div class="ewm clearfix">
                <div class="pull-left">
                    <img :src="wechat[0]" alt="" />
                </div>
                <div class="pull-right">
                    <img :src="wechat[1]" alt="" />
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
        return{
            'contact':[],
            "wechat":[]
        }
  },
  mounted(){
        this.contact = JSON.parse(localStorage.getItem("contact"));
        this.wechat = JSON.parse(localStorage.getItem("wechat"))
  },
}
</script>

<style lang="less" scoped>
  @import "../../assets/css/footer.less";
</style>
