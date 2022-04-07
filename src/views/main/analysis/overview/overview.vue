<template>
  <div class="overview">
    <div>
      <xl-card title="关于">
        vue3-ts-cms 是基于
        Vue3、Pinia、VueRouter、Vite、ElementPlus、TypeScript、Echart5
        等技术实现的。
      </xl-card>
    </div>

    <div class="technologyStacks">
      <xl-card title="技术栈">
        <ul class="align-left">
          <li v-for="item in technologyStacks" :key="item.title">
            <span class="title">{{ item.title }}:</span>
            <el-link type="primary">{{ item.desp }}</el-link>
          </li>
        </ul>
      </xl-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import XlCard from '@/base-ui/card'

import { technologyStacks } from './config/technology-stacks'
</script>

<style scoped lang="less">
.overview {
  display: grid;
  row-gap: 20px;

  .align-left {
    text-align: left;
  }

  .technologyStacks {
    ul {
      padding-left: 24px;
      margin: 0;

      li {
        padding: 6px 0;
        .title {
          padding-right: 16px;
        }
      }
    }
  }
}
</style>
