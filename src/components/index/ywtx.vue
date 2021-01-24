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
 @import '../../assets/css/index/ywtx.less';
</style>
