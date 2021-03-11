<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scpoed>
.recommend {
  overflow: hidden;
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend .recommendItem {
  flex: 1;
}
.recommendItem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>