import { ElNotification } from 'element-plus'

class Notification {
  success(message: string) {
    ElNotification({
      type: 'success',
      message: message,
      duration: 3000,
      offset: 50
    })
  }

  error(message: string) {
    ElNotification({
      type: 'error',
      message: message,
      duration: 3000,
      offset: 50
    })
  }
}

export default new Notification()
