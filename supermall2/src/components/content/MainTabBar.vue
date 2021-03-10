<template>
<div id='main-tab-bar'>
  <tab-bar>
          <tab-bar-item path='/home' activeColor='red'>
              <template  v-slot:item-icon>
                  <div>
                      <img src="~img/tabbar/home.svg" alt="">
                  
                      
                  </div>
              </template>
               <template  v-slot:item-icon-active>
                  <div>
                      <img src='~img/tabbar/active.svg' alt="">
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
                      <img src="~img/tabbar/fenbushi.svg" alt="">
                  </div>
              </template>
              <template  v-slot:item-icon-active>
                  <div>
                      
                      <img src="~img/tabbar/active.svg" alt="">
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
                      <img src="~img/tabbar/car.svg" alt="">
                  </div>
              </template>
              <template  v-slot:item-icon-active>
                  <div>
                      <img src="~img/tabbar/active.svg" alt="">
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
                      <img src="~img/tabbar/user.svg" alt="">
                  </div>
              </template>
              <template  v-slot:item-icon-active>
                  <div>
                      <img src="~img/tabbar/active.svg" alt="">
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
import  TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {

  name:'MainTabBar',
  components: { TabBar,TabBarItem},
    
}
</script>

<style>

</style>