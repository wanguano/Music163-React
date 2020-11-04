import { changeFocusStateAction } from '@/components/app-header/store/actionCreator'
import { useDispatch } from 'react-redux'

/**
 * 返回一个函数,调用该函数不显示下拉框
 * 改变搜索下拉框的状态,默认为false
 * @param {boolean} state focus状态
 */
export function useChangeDropBoxState(state = false) {
  const dispatch = useDispatch()
  return () => {
    dispatch(changeFocusStateAction(state))
  }
}
