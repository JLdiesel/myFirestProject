<template>
  <div id='tab-bar'> 
      <slot></slot>
 <!--     <div class='tab-bar-item'>
         <img src="../../assets/img/tabbar/home.svg" alt="" >
       <div>首页 </div>  
         </div>  
     <div class='tab-bar-item'>
         <img src="../../assets/img/tabbar/fenbushi.svg" alt="" >
          <div>分类 </div>  
         </div>
     <div class='tab-bar-item'>
         <img src="../../assets/img/tabbar/car.svg" alt="" >
         <div>购物车  </div>  
         </div>
     <div class='tab-bar-item'>
         <img src="../../assets/img/tabbar/user.svg" alt="" >
          <div>我的 </div>  
         </div> -->
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>
 #tab-bar{
       display: flex;
       background-color: #f6f6f6;
       position: fixed;
       left: 0;
       bottom: 0;
       right: 0;
       box-shadow: 0 -2px 1px rgba(100,100,100,.1);
   }
   
</style>