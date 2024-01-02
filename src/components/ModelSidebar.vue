<template>
  <el-menu class="el-menu-vertical-demo" router>
    <el-menu-item index="1">
      <router-link to="/training">模型训练</router-link>
    </el-menu-item>

    <el-menu-item index="2">
      <router-link to="/evaluation">模型评测</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/deployment">模型发布</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'ModelSidebar',
  // ...
}
</script>

<style>
/* 添加样式 */
</style>
