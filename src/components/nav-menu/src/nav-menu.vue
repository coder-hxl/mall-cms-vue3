<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="routePath"
      class="el-menu-vertical"
      background-color="#001529"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
      :router="true"
    >
      <template v-for="item in menus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <!-- 二级菜单的标题 -->
            <template #title>
              <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单的children -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.url">
                <el-icon v-if="subItem.icon">
                  <component :is="subItem.icon" />
                </el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.url">
            <el-icon v-if="item.icon">
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLoginStore } from '@/store'
import { useRoute } from 'vue-router'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

// store
const loginStore = useLoginStore()
const menus = computed(() => loginStore.userMenus)

// router
const route = useRoute()
const routePath = route.path
</script>

<style scoped lang="less">
.nav-menu {
  width: 100%;
  height: 100%;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 8px 10px 8px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 9.8px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  .el-menu {
    border-right: none;
    background-color: #0c2135;

    .el-sub-menu__title {
      padding-right: none !important;
    }

    // 二级菜单内 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }
  }

  .is-active .el-sub-menu__title {
    .el-icon,
    span {
      color: #0a60bd !important;
    }
  }

  .is-active .is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
