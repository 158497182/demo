<template>
    <div>
        <div class="pull-left leftNav">
            <NavList v-bind="$attrs"></NavList>
        </div>
        <div class="pull-right text-center">
          <More/>
        </div>
    </div> 
</template>

<script>
import NavList from './navList'
import More from './more'
export default {
    name:"ComMenu",
     components:{
         NavList,
         More
     },
}
</script>

<style lang="less">
 @import '../../assets/css/common.less';
.leftNav{
    width:79%;
}
    
</style>