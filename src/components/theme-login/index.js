import React, { memo, useState } from 'react'
import { Button, message, Modal } from 'antd'
import Draggable from 'react-draggable'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsVisible } from './store'
import { PhoneOutlined } from '@ant-design/icons'
import LoginIcon from '@/components/theme-controls-icon/login/index'
import { LoginLeft, LoginRight, LoginWrapper } from './style'

function ThemeLogin() {
  // state/props
  const [disabled, setDisabled] = useState(true)
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
  const draggleRef = React.createRef()

  // redux
  const dispatch = useDispatch()
  const { isVisible } = useSelector(
    (state) => ({
      isVisible: state.getIn(['loginState', 'isVisible']),
    }),
    shallowEqual
  )

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
        centered
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
        {/* 登录盒子 */}
        <LoginWrapper>
          <LoginLeft>
            <div className="login-content">
              <div className="login-bg">
              </div>
              <Button type="ghost" shape="round" icon={<PhoneOutlined />} className="gap">
                注册
              </Button>
              <Button type="primary" shape="round" icon={<PhoneOutlined />}>
                手机号登录
              </Button>
            </div>
          </LoginLeft>
          <LoginRight>
            <div className="icons-wrapper">
              <LoginIcon onClick={() => message.warn('暂时先不做')} position="-150px -670px" description="微信登录" />
              <LoginIcon onClick={() => message.warn('暂时先不做')} position="-190px -670px" description="QQ登录" />
              <LoginIcon onClick={() => message.warn('暂时先不做')} position="-231px -670px" description="微博登录" />
              <LoginIcon onClick={() => message.warn('暂时先不做')} position="-271px -670px" description="网易邮箱登录" />
            </div>
          </LoginRight>
        </LoginWrapper>
      </Modal>
    </Draggable>
  )
}

export default memo(ThemeLogin)
