import React, { memo, useState } from 'react'
import { Modal } from 'antd'
import Draggable from 'react-draggable'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsVisible } from './store'

function ThemeLogin(props) {
  // state/props
  const [disabled, setDisabled] = useState(true)
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
  const draggleRef = React.createRef()

  // redux
  const dispatch = useDispatch()
  const { isVisible } = useSelector((state) => ({
    isVisible: state.getIn(['loginState', 'isVisible']),
  }), shallowEqual)

  // 确定
  const handleOk = (e) => {
    dispatch(changeIsVisible(false))
  }
  // 取消
  const handleCancel = (e) => {
    dispatch(changeIsVisible(false))
  }
  // 拖拽
  const onStart = (event, uiData) => {
    console.log('---->拖拽')
    const { clientWidth, clientHeight } = window?.document?.documentElement
    const targetRect = this.draggleRef?.current?.getBoundingClientRect()
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    })
  }

  return (
    <Draggable>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false)
              }
            }}
            onMouseOut={() => {
              setDisabled(true)
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            登录
          </div>
        }
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <p>
          Just don&apos;t learn physics at school and your life will be full of
          magic and miracles.
        </p>
        <br />
        <p>
          Day before yesterday I saw a rabbit, and yesterday a deer, and today,
          you.
        </p>
      </Modal>
    </Draggable>
  )
}

export default memo(ThemeLogin)
