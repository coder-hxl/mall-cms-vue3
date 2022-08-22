<template>
  <div class="xl-collapse">
    <el-collapse>
      <el-collapse-item
        v-for="item in collapseValues"
        :key="item.id"
        :name="item.id"
        :title="item.title"
      >
        <div class="user">
          <el-avatar :size="36" :src="item.avatarUrl" />
          <span class="user-name">{{ item.userName }}</span>
        </div>

        <div class="content">
          <div v-if="valueType == 'text'">{{ item.content }}</div>
          <div v-else v-html="item.content"></div>
        </div>

        <div class="footer">
          <p class="footer-createAt">发布于: {{ item.createAt }}</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
interface ICollapseValues {
  id: number
  title: string
  content: string
  userName: string
  avatarUrl: string
  createAt: string
}

withDefaults(
  defineProps<{
    collapseValues: ICollapseValues[]
    valueType?: 'html' | 'text'
  }>(),
  {
    valueType: 'text'
  }
)
</script>

<style lang="less">
.xl-collapse {
  text-align: left;

  .el-collapse-item__header {
    padding: 0 16px !important;
    font-size: 18px;
    font-weight: 600;
  }

  .el-collapse-item__content {
    padding: 0 16px !important;
    font-size: 16px;
  }

  .user {
    height: 36px;
    display: flex;
    align-items: center;
    font-weight: 600;

    .user-name {
      margin-left: 8px;
    }
  }

  .content {
    margin: 20px 0;
  }

  .footer {
    .footer-createAt {
      color: #8590a6;
    }
  }
}
</style>
