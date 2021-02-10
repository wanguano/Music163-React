import React, { memo, useRef, useState } from 'react'
import { Button, message, Modal } from 'antd'
import Draggable from 'react-draggable'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsVisible } from './store'
import { PhoneOutlined } from '@ant-design/icons'
import LoginIcon from '@/components/theme-controls-icon/login/index'
import { LoginLeft, LoginRight, LoginWrapper, PhoneLoginModal } from './style'
import ThemeLoginForm from '../theme-login-form'

/**
 * 登录页面(模态框)
 */
function ThemeLogin() {
  // state/props
  const [disabled, setDisabled] = useState(true)
  const [loginState, setLoginState] = useState('default')// 默认状态显示
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
  const draggleRef = useRef()

  // redux
  const dispatch = useDispatch()
  const { isVisible } = useSelector(
    (state) => ({
      isVisible: state.getIn(['loginState', 'isVisible']),
    }),
    shallowEqual
  )
  
  // 取消
  const handleCancel = (e) => {
    // 关闭模态框
    dispatch(changeIsVisible(false))
    // 延迟返回初始化状态
    setTimeout(() => {
      setLoginState('default')
    }, 100)
  }
  // 拖拽
  const onStart = (event, uiData) => {
    console.log('---->拖拽')
    const { clientWidth, clientHeight } = window?.document?.documentElement
    const targetRect = draggleRef?.current?.getBoundingClientRect()
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    })
  }

  // other handle
  const handleLogin = (loginMode) => {
    switch (loginMode) {
      case 'phone':
        setLoginState('phone')
        break
      case 'email':
        setLoginState('email')
        break
      default:
    }
  }

  const defaultWrapperContent = (
    <LoginWrapper>
      <LoginLeft>
        <div className="login-content">
          <div className="login-bg"></div>
          <Button
            type="ghost"
            onClick={() => message.warn('暂不做')}
            shape="round"
            icon={<PhoneOutlined />}
            className="gap"
          >
            注册
          </Button>
          <Button
            type="primary"
            shape="round"
            icon={<PhoneOutlined />}
            onClick={() => handleLogin('phone')}
          >
            手机号登录
          </Button>
        </div>
      </LoginLeft>
      <LoginRight>
        <div className="icons-wrapper">
          <LoginIcon
            onClick={() => message.warn('暂不做')}
            position="-150px -670px"
            description="微信登录"
          />
          <LoginIcon
            onClick={() => message.warn('暂不做')}
            position="-190px -670px"
            description="QQ登录"
          />
          <LoginIcon
            onClick={() => message.warn('暂不做')}
            position="-231px -670px"
            description="微博登录"
          />
          <LoginIcon
            onClick={() => handleLogin('email')}
            position="-271px -670px"
            description="网易邮箱登录"
          />
        </div>
      </LoginRight>
    </LoginWrapper>
  )

  const phoneLogin = (loginState) => {
    return (
      <PhoneLoginModal>
        <ThemeLoginForm loginState={loginState} />
      </PhoneLoginModal>
    )
  }
  return (
    <Draggable>
      <Modal
        centered
        footer={null}
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
        {/* 登录 */}
        {loginState === 'default' ? defaultWrapperContent : null}
        {loginState === 'phone' ? phoneLogin() : undefined}
        {loginState === 'email' ? phoneLogin('email') : undefined}
      </Modal>
    </Draggable>
  )
}

export default memo(ThemeLogin)
