<template>
<div id='main-tab-bar'>
  <tab-bar>
          <tab-bar-item path='/home' activeColor='red'>
              <template  v-slot:item-icon>
                  <div>
                      <img src="" alt="">
                      <img src="" alt="">
                      
                  </div>
              </template>
               <template  v-slot:item-icon-active>
                  <div>
                      <img src='' alt="">
                  </div>
              </template>
               <template  v-slot:item-text>
                  <div>
                      首页
                  </div>
              </template>
              
          </tab-bar-item>
           <tab-bar-item path='/category' activeColor='green'>
               <template  v-slot:item-icon>
                  <div>
                      <img src="assets/img/tabbar/fenbushi.svg" alt="">
                  </div>
              </template>
              <template  v-slot:item-icon-active>
                  <div>
                      <img src="../../../_assets" alt="">
                      <img src="../../../src/assets" alt="">
                      <img src="assets/img/tabbar/active.svg" alt="">
                  </div>
              </template>
               <template  v-slot:item-text>
                  <div>
                      分类
                  </div>
              </template>
           </tab-bar-item>
            <tab-bar-item path='/cart' activeColor='green'>
                <template  v-slot:item-icon>
                  <div>
                      <img src="~assets/img/tabbar/car.svg" alt="">
                  </div>
              </template>
              <template  v-slot:item-icon-active>
                  <div>
                      <img src="~assets/img/tabbar/active.svg" alt="">
                  </div>
              </template>
               <template  v-slot:item-text>
                  <div>
                      购物车
                  </div>
              </template>
            </tab-bar-item>
             <tab-bar-item path='/profile' activeColor='green'>
                 <template  v-slot:item-icon>
                  <div>
                      <img src="~assets/img/tabbar/user.svg" alt="">
                  </div>
              </template>
              <template  v-slot:item-icon-active>
                  <div>
                      <img src="~assets/img/tabbar/active.svg" alt="">
                  </div>
              </template>
               <template  v-slot:item-text>
                  <div>
                      我的
                  </div>
              </template>
             </tab-bar-item>
      </tab-bar>
      </div>
</template>

<script>
import  TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {

  name:'MainTabBar',
  components: { TabBar,TabBarItem},
    
}
</script>

<style>

</style>