import { ref, Ref } from 'vue'

export function reactiveWidth(
  xlWidthResult: string,
  smWidthResult: string
): Ref<string>
export function reactiveWidth(
  xlWidthResult: boolean,
  smWidthResult: boolean
): Ref<boolean>

export function reactiveWidth(
  xlWidthResult: any,
  smWidthResult: any
): Ref<any> {
  const targetResult = ref<any>()

  function changeTargetWidth() {
    if (window.innerWidth <= 768) {
      targetResult.value = xlWidthResult
    } else if (window.innerWidth >= 768) {
      targetResult.value = smWidthResult
    }
  }
  changeTargetWidth()

  window.addEventListener('resize', () => {
    changeTargetWidth()
  })

  return targetResult
}
