<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommendView from "./childrenComps/RecommendView.vue";
import { getHomeMultidata } from "network/home.js";
export default {
  name: "Home",
  components: { NavBar, HomeSwiper, RecommendView },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata()
      .then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.banners);
        console.log(this.recommends);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.home-nav {
  color: white;
  background-color: var(--color-tint);
}
</style>