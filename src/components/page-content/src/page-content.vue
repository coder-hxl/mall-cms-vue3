<template>
  <div class="page-content">
    <xl-table
      v-model:page="pageInfo"
      :listData="dataList"
      v-bind="contentTableConfig"
      :listCount="dataCount"
    >
      <!-- header中的插槽 -->
      <template #headerHandle>
        <el-button v-if="isCreate" type="primary" @click="handleNewClick">
          {{ contentTableConfig.title.btnText }}
        </el-button>
      </template>

      <!-- 列表中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启动' : '禁止' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            size="small"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            <el-icon><EditPen /></el-icon> 编辑
          </el-button>
          <el-button
            v-if="isDelete"
            size="small"
            type="text"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon><Delete /></el-icon> 删除
          </el-button>
        </div>
      </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot
          v-if="item.slotName"
          :name="item.slotName"
          :row="scope.row"
        ></slot>
      </template>
    </xl-table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { useListStore } from '@/store'

import XlTable from '@/base-ui/table'

import { usePermissions } from '@/hooks/use-permission'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['editBtnClick', 'newBtnClick'])

const listStore = useListStore()

// 0.获取操作的权限
const isCreate = usePermissions(props.pageName, 'create')
const isDelete = usePermissions(props.pageName, 'delete')
const isUpdate = usePermissions(props.pageName, 'update')
const isQuery = usePermissions(props.pageName, 'query')

// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(
  () => pageInfo.value,
  () => getPageData()
)

// 2.发送网络请求
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  listStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}

getPageData()

// 3.从systemStore中获取数据
const dataList = computed(() => listStore.pageListData(props.pageName))
const dataCount = computed(() => listStore.pageListCount(props.pageName))

// 4.获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'handle') return false
    return true
  }
)

// 5.删除/编辑/新建操作
const handleDeleteClick = (item: any) => {
  listStore.deletePageDataAction({
    pageName: props.pageName,
    id: item.id
  })
}

const handleEditClick = (item: any) => {
  emit('editBtnClick', item)
}

const handleNewClick = () => {
  emit('newBtnClick')
}

defineExpose({
  getPageData
})
</script>

<style scoped lang="less">
.page-content {
  padding: 22px;
  border-top: 20px solid #f0f2f5;

  .el-icon {
    margin-right: 4px;
  }
}
</style>
