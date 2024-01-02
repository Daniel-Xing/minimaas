<template>
  <div id="app">
    <model-sidebar></model-sidebar> <!-- 侧边栏组件 -->
    <div class="content">
      <router-view></router-view> <!-- 路由视图 -->
    </div>
  </div>
</template>



<script>
import ModelSidebar from './components/ModelSidebar.vue'

export default {
  name: 'App',
  components: {
    ModelSidebar
  }
}
</script>

<style>
#app {
  display: flex;
  height: 100vh; /* 使应用填充整个视口高度 */
}

.model-sidebar {
  /* 侧边栏的样式，例如宽度 */
  width: 200px; /* 或你想要的宽度 */
  flex-shrink: 0; /* 防止侧边栏被压缩 */
}

.content {
  flex-grow: 1; /* 让内容区域填充剩余空间 */
  padding: 20px; /* 可选，为内容区域添加一些内边距 */
}
</style>


