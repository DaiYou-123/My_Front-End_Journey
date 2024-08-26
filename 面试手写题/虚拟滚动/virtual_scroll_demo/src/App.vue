<template>
  <VirtualScroll class="virtual-list" :items="list" :item-size="50">
    <template #default="{ item }">
      <div class="item">{{ item }}</div>
    </template>
  </VirtualScroll>
</template>

<script>

export default {
  components: {
    RecycleScroller
  },
  data() {
    return {
      list: Array.from({ length: 100000 }, (_, index) => `Item ${index + 1}`)
    };
  }
};
</script>

<style scoped>
.virtual-list {
  height: 300px;
  overflow: auto;
}
.item {
  height: 50px;
  border-bottom: 1px solid #ccc;
}
</style>