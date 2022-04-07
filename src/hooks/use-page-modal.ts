import { ref } from 'vue'

import pageModal from '@/components/page-modal'

type callbackFn = (item?: any) => void

export function usePageModal(editCb?: callbackFn, newCb?: callbackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})

  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }

  return { pageModalRef, defaultInfo, handleEditData, handleNewData }
}
