<template>
  <div id="nav">
    </div>
    <main-tab-bar/>
  <router-view/>
</template>
<script>
import MainTabBar from 'components/content/MainTabBar'
export default {
     name:'App',
  components: {
      MainTabBar
      },
}
</script>
<style>
@import url('assets/css/base.css');
</style>
