<template >
  <div class="wrapper" ref="wrapper">
     <slot />
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:'Scroller',
  props:{
   handleToScroll:{
    type:Function,
    default:function(){}
   },
   handleToTouchEnd:{
    type:Function,
    default:function(){}
   }
  },
  mounted(){
      var scroll=new BScroll(this.$refs.wrapper,{tap:true,probeType:1});
      // scroll对象绑定scroll事件 实现上下拉刷新
      scroll.on('scroll',(pos)=>{
        this.handleToScroll(pos);
      })
      scroll.on('touchEnd',(pos)=>{
        this.handleToTouchEnd(pos);
      })
  }
}
</script>

<style scoped>
  .wrapper{height: 100%;}
</style>