import { useLoginStore } from '@/store'

export function usePermissions(pageName: string, handleName: string) {
  const loginStore = useLoginStore()
  const permission = loginStore.permissions
  const verifyPermission = `system:${pageName}:${handleName}`

  return !!permission.find((item) => item === verifyPermission)
}
